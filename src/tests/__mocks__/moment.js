// Real moment.js
const moment = require.requireActual('moment');

// Mocked moment.js
export default (timestamp = 0) => {
  return moment(timestamp);  
};
