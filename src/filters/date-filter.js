const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value);
  return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
};
