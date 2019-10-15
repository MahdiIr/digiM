import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, View } from 'react-native';

import DM from './../images/DM.png';

export default class extends React.Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header style={{backgroundColor: '#3f51b5'}}>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        {/* <Appbar.Content
          title="DM"/> */}
        <View style={{flex: 1}}>
          <Image
            style={{ width: 32, height: 22 }}
            source={DM}
          />
        </View>
        <Appbar.Action icon="search" onPress={this._onSearch} />
        <Appbar.Action icon="more-vert" onPress={this._onMore} />
      </Appbar.Header>
    );
  }
}