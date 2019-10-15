import React, { Component } from "react";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as StoreProvider } from "mobx-react";
// import customerStore from "./stores/CustomerStore";

global.serverIP = "anasystem.ir";
global.token = "";
global.branchId = 0;
global.branches = [];
global.mainURL = "/service/mobile/parya";
global.version = 0.1;

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Welcome,
  },
  Login: {
    screen: Login
  }
}));

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: "IRANSans",
    medium: "IRANSans",
    light: "Roboto Light",
    thin: "Roboto Thin"
  }
};

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <StoreProvider>
          <AppNavigator/>
        </StoreProvider>
      </PaperProvider>
    );
  }
}

export default App;
