import React, { Component, createContext as CreateContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { sprintf } from 'sprintf';
import root from 'window-or-global';
import { translations, defaultLang } from '../../../config/defaults';

const langDefault = defaultLang;
export const TranslateContext = new CreateContext();

export class TranslateProvider extends Component {
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

export const Translate = ({ word }) => {
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
          type="select"
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
    return word;
  };

  return <TranslateContext.Consumer>{selector}</TranslateContext.Consumer>;
};

const tr = (str = '') => {
  let tmp = root.locale[str];
  if (tmp == null || tmp == '') {
    tmp = str;
  }

  /* if (arguments.length == 1) {
    return tmp;
  } */

  return sprintf.apply(this, Array.prototype.slice.call(arguments));
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
  word: PropTypes.string
};

Translate.defaultProps = {
  word: ''
};
