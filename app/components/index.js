'use strict';

module.exports = function(app) {
  require('./event')(app);
  require('./display')(app);
  require('./profile')(app);
  require('./nav')(app);
};
