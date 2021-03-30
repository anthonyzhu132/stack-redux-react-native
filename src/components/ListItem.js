import React, { Component } from 'react';
import { connect, TouchableWithoutFeedback, View } from 'react-redux';
import { Text } from 'react-native;'
import CardItem from './common/CardItem';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { id, title } = this.props.library

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);