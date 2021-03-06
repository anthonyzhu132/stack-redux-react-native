import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native;'
import CardItem from './common/CardItem';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  };

  renderDescription() {
    const { library, expanded } = this.props;

    if(expanded) {
      return (
        <CardItem>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardItem>        
      );
    }
  }

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

          {this.renderDescription}

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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);