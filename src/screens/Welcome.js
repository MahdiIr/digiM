import React, { Component } from "react";
import { View, Image, ScrollView, Text } from "react-native";
import { Title, Portal, Dialog, Paragraph, Button } from "react-native-paper";
import { StackActions, NavigationActions } from "react-navigation";
import Header from './../components/header';
import BottomNav from './../components/bottomNav';

import Logo from './../images/logo-full-red.png';
import Green from './../images/green.png';
export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <>
        <Header />
        <ScrollView style={{ marginBottom: 57 }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 32 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ width: 256, height: 44, marginBottom: 8 }}
                source={Logo}
              />
              <Image
                style={{ width: 100, height: 80, marginBottom: 8 }}
                source={Green}
              />
              <Text>
                ورژن 0.0.1
              </Text>
            </View>
          </View>
        </ScrollView>
        <BottomNav />
      </>
    );
  }
}
