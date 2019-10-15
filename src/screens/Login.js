import React, { Component } from "react";
import { Text, View, Linking } from "react-native";
import { Title, Portal, Dialog, Paragraph, Button } from "react-native-paper";
import { StackActions, NavigationActions } from "react-navigation";
import { observer } from "mobx-react";
import { observable } from "mobx";
import axios from "axios";

@observer
export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Title style={{ textAlign: "center" }}>
          login
        </Title>
      </View>
    );
  }
}
