const colors = require('colors');

const messageTerminal = ({ color, type, error, message }) => {
  const colorConsole = color || 'red';
  const typeConsole = type || '';
  const errorConsole = error || '';
  const messageConsole = message || 'Message Console ';
  const consoleColor =
    colorConsole === 'green'
      ? colors.green(messageConsole)
      : colors.red(messageConsole);
  console.log(consoleColor, typeConsole, errorConsole);
};

module.exports = {
  messageTerminal
};
