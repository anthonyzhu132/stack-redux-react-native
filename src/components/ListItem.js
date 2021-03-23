import React, { Component } from 'react';
import { Text } from 'react-native;'
import CardItem from './common/CardItem';

class ListItem extends Component {
  render() {
    return (
      <CardIem>
        <Text>
          {this.props.library.title}
        </Text>
      </CardIem>
    )
  }
}


export default ListItem;