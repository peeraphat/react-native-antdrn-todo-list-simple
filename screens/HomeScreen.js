import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Button, InputItem, List, Modal } from 'antd-mobile-rn'
// const operation = Modal.operation
const { operation, prompt } = Modal

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: []  // [{ todo: String, status: Boolean }]
    }
  }

  static navigationOptions = {
    // header: null,
    title: 'My Todo-list'
  };
  _handleText(e) {
    this.setState({
      text: e
    })
  }

  _handleAdd() {
    const text = this.state.text
    const list = this.state.list
    list.push({
      todo: text,
      status: false
    })
    this.setState({
      text: '',
      list: list
    })
  }

  _handleEdit(index) {
    setTimeout(() => {
      return prompt('Edit', this.state.list[index].todo, [
        { text: 'Cancel' },
        { text: 'Submit', onPress: (e) => {
          let list = this.state.list
          list[index].todo = e
          this.setState({
            list: list
          })
        }}
      ], 'default', this.state.list[index].todo)
    }, 1000)
  }

  _handleDelete(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  _handleFinish(index) {
    let list = this.state.list
    list[index].status = true
    this.setState({
      list: list
    })
  }
  
  _countDone() {
    return this.state.list.filter(data => data.status === true).length
  }

  _countActive() {
    return this.state.list.filter(data => data.status === false).length
  }

  _handleButton() {
    return this.state.text===""?true:false
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <InputItem 
          onChange={(e) => this._handleText(e)}
          value={this.state.text}
          placeholder='What do you want to do'
        >
            Todo
        </InputItem>
        <Button type="primary" onClick={() => this._handleAdd()} disabled={this._handleButton()}>Add</Button>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        {this._countActive()!==0?
        <List renderHeader={() => 'Active'}>
          {this.state.list.map((data, index) => {
            return (
              data.status===false?
                <List.Item
                  key={index}
                  onClick={() => operation([
                    { text: 'Finish job.', onPress: () => this._handleFinish(index), style: {color: 'blue'}},
                    { text: 'Edit', onPress: () => this._handleEdit(index), style: {color: 'orange'}},
                    { text: 'Delete', onPress: () => this._handleDelete(index), style: {color: 'red'}}
                  ])}
                  arrow={"horizontal"}
                >
                    <Text>
                      {data.todo}
                    </Text>
                </List.Item>
              :null
            )
          })}
          </List>
          :null
        }


          {this._countDone()!==0?
            <List renderHeader={() => 'Finished'}>
              {this.state.list
                .filter(data => data.status===true)
                .map((data, index) => {
                  return (
                    <List.Item key={index}>
                      {data.todo}
                    </List.Item>
                  )
              })}
            </List>
          :null}
        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
