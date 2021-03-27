import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native;'
import CardItem from './common/CardItem';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    return (
      <CardItem>
        <Text style={styles.titleStyle}>
          {this.props.library.title}
        </Text>
      </CardItem>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(null, actions)(ListItem);