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
    events.addListener('containers_app', (state, store) => {
      // Modify mapStateToProps for component containers_app
      state.name = store.name;
    });
  },
  layouts: {
    components: {
      welcome: require('./layouts/Welcome'),
    },
    containers: {
      app: require('./layouts/App'),
    },
  },
  actions: require('./actions'),
  reducers: require('./reducers'),
  styles: require('./styles'),
  i18n: require('./i18n'),
};
