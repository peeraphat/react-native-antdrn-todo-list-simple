
# react-native with antd-mobile-rn

> Simple Todo-list

### Setup project

1. expo-cli installation
`$ npm install -g expo-cli`

2. Create project
- `$ mkdir my-native-app`
- `$ expo-cli init my-native-app`

3. Open project with Visual Studio Code
- `$ code my-native-app`

4. Let start your project
- `$ expo start`
    
###  Setup [Ant Design Mobile RN](https://rn.mobile.ant.design)
> [antd-mobile Documentation](https://mobile.ant.design/docs/react/introduce)

1. installation

	`$ npm  install antd-mobile-rn --save`
	
2. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

	`$ npm install babel-plugin-import --save-dev`
```json
	// Create file .babelrc
	{
		"plugins": [
			["import", { "libraryName": "antd-mobile-rn" }]
		]
	}
```
3. Usage
```javascript
	import React,  { Component }  from  'react';  
	import  { AppRegistry }  from  'react-native'; 
	import { Button } from 'antd-mobile-rn' 

	class  HelloWorldApp  extends  Component  {  
		render()  {  
			return  <Button>Start</Button>;  
		} 
	} 

	AppRegistry.registerComponent('HelloWorldApp',  ()  => HelloWorldApp);
```

### JavaScript
* [filter](https://www.w3schools.com/jsref/jsref_filter.asp)
```javascript
	Array.filter(_function(currentValue, index, arr), thisValue_)
```
* [map](https://www.w3schools.com/jsref/jsref_map.asp)
```javascript
	Array.map(_function(currentValue, index, arr), thisValue_)
```

* [push](https://www.w3schools.com/jsref/jsref_push.asp)
```javascript
	Array.push(_item1_, _item2_, ..., _itemX_)
```
* [splice](https://www.w3schools.com/jsref/jsref_splice.asp)
```javascript
	Array.splice(_index_, _howmany_, _item1_, ....., _itemX_)
```

### Publish your project
1. run your project
2. run this command 

	`$ expo publish [project-dir]`

### Building Standalone Apps

1. Add json into app.json
```json
	"ios": {
		"bundleIdentifier": "com.yourcompany.yourappname"
	},
	"android": {
		"package": "com.yourcompany.yourappname"
	}
```

2. run command
   > Android

   `$ expo build:android [project-dir]`

   > ios

   `$ expo build:ios [project-dir]`
  
 ## How to use Video component
> Reference [Video](https://docs.expo.io/versions/latest/sdk/video.html)
```javascript
import  React  from  'react'
import { Video } from 'expo'

class HowToVideo extends React.Component {
	render() {
		return (
			<Video
				  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // source={require('./path/to/file')} for a video file asset in the source code directory.
				  rate={1.0}
				  volume={1.0}
				  isMuted={false}
				  resizeMode="cover"
				  shouldPlay
				  isLooping
				  style={{ width: 300, height: 300 }}
			/>
		)
	}
}

export default HowToVideo
	
```

## How to add screens

1. Add new router
```jsx
import { createSwitchNavigator, createStackNavigator } from  'react-navigation'
import NewScreen from './path/of/screen/'

// edit in /navigation/AppNavigator.js
export  default createStackNavigator({
	Main:  createSwitchNavigator({
		Main:  MainTabNavigator,
	}),
	Page2:  NewScreen,	// import your new screen 
})

// Page2 is name of router
// NewScreen is your component
```
2. Use router
```jsx
handleRouter() {
	this.props.navigation.navigate('Page2')	// Page2 is a name of router
}

render() {
	return(
		<Button onClick={() => this.handleRouter()}>Go to Page2</Button>
	)
}
```
 ## Start example project
 1. Click `Clone or download`
 2. Click `Download ZIP`
 3. Extrack zip file and open project with Text editor
 4. Run command `$ npm install`
 5. Finaly, start project with expo
 	`$ expo start`
 6. Let hack !
