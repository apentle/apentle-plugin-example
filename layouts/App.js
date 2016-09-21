/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 */

const React = require('react');
const {Modal, View, Text, TextInput, TouchableOpacity} = require('react-native');

function submit() {
  if (!this.state || this.state.text === undefined || this.state.text.trim().length === 0) {
    alert(__('example_plugin.empty_name'));
  } else {
    this.setState({modalVisible: false});
  }
}

<layout>
  <addChildren class="container">
    <Modal visible={this.state && this.state.modalVisible !== undefined ? this.state.modalVisible : true} transparent={true}>
      <View class="container example_popup">
        <TextInput class="example_input_name"
          onChangeText={(text) => this.setState({text})}
          onEndEditing={() => submit.apply(this)}
          autoCapitalize="words"
          placeholder={__('example_plugin.input_name')} />
        <TouchableOpacity class="button_container"
          onPress={() => submit.apply(this)}
          accessibilityTraits="button">
          <View class="button">
            <Text class="button_text">
              {__('example_plugin.enter').toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  </addChildren>
</layout>
