/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 */

module.exports = {
  willLoad: function() {
    // Run before load plugin

  },
  layouts: {
    containers: {
      app: require('./layouts/App.js'),
    },
  },
  styles: require('./styles'),
  i18n: require('./i18n'),
};
