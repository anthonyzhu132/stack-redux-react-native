import React, { Component } from 'react';
import { Text } from 'react-native;'
import CardItem from './common/CardItem';

class ListItem extends Component {
  render() {
    return (
      <CardIem>
        <Text style={styles.titleStyle}>
          {this.props.library.title}
        </Text>
      </CardIem>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;