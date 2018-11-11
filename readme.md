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
	import Button from  'antd-mobile-rn/lib/button';  

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
