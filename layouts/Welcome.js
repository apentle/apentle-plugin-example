/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 */

const React = require('react');
const {Modal, View, Text, TextInput, TouchableOpacity} = require('react-native');

<layout>
  <addChildren _top class="container">
    <Text class="welcome">
      {this.props.name ? __('example_plugin.welcome', {name: this.props.name}) : null}
    </Text>
  </addChildren>
</layout>
