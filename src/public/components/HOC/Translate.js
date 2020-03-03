import React, { Component, createContext as CreateContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { sprintf } from 'sprintf-js';
import root from 'window-or-global';
import { translations, defaultLang } from '../../../config/defaults';

const langDefault = defaultLang;
const TranslateContext = new CreateContext();

class TranslateProvider extends Component {
  constructor() {
    super();
    this.state = {
      current: langDefault
    };
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(lang = langDefault) {
    this.setState({ current: lang });
  }

  render() {
    const { children } = this.props;
    const { current } = this.state;
    const value = {
      currentLang: current,
      changeLang: this.changeLang
    };

    return (
      <TranslateContext.Provider value={value}>
        {children}
      </TranslateContext.Provider>
    );
  }
}

const Tr = (str = '', fixedValues) => {
  let rtn = str;
  if (root && root.locale && root.locale[str]) {
    const translate = root.locale[str];
    rtn = translate;
    if (!!fixedValues && Array.isArray(fixedValues)) {
      rtn = sprintf(translate, ...fixedValues);
    }
  }
  return rtn;
};

const Translate = ({ word, values }) => {
  const handleChange = (e, changeLang) => {
    if (
      e &&
      e.target &&
      e.target.value &&
      changeLang &&
      typeof changeLang === 'function'
    ) {
      changeLang(e.target.value);
    }
  };

  const selector = current => {
    if (!word && current.changeLang) {
      const languages = Object.keys(translations);
      return (
        <Input
          bsSize="sm"
          type="select"
          id="changeLang"
          onChange={e => handleChange(e, current.changeLang)}
        >
          {languages.map(language => (
            <option
              value={language}
              key={language}
            >{`${translations[language]} (${language})`}</option>
          ))}
        </Input>
      );
    }
    const valuesTr = !!values && !Array.isArray(values) ? [values] : values;
    return Tr(word, valuesTr);
  };

  return <TranslateContext.Consumer>{selector}</TranslateContext.Consumer>;
};

TranslateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

TranslateProvider.defaultProps = {
  children: []
};

Translate.propTypes = {
  word: PropTypes.string,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

Translate.defaultProps = {
  word: '',
  values: ''
};

export { TranslateContext, TranslateProvider, Translate, Tr };
