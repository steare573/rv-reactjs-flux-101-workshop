# rv-reactjs-flux-101-workshop
Step by step project example and pptx for React 101 workshop at Red Ventures July 8, 2015

###Overview
Learn the basics of ReactJS and how it is used with the Flux framework and CommonJS libraries to piece together your own fully features framework.  We will first cover the basics of React and the few library specifc constructs you need to know to build a React view layer from scratch.  

We will then go into flux to show how this framework can help you organize your application and create a UI that is responsive to your changing data.  

Next we will walk through a sample project to show you how they work together in a small, controlled, but somewhat realistic application.  

Finally, we will cover why React and Flux worked well for our Reactor project, the benefits it provided, a few of the obstacles we encountered, and some mistakes we made in our first real React/Flux application.

###Presenters
* Sean Teare
* Michael Anderson

###Slides
You can find the slides in slides directory in this project, or you can view them [here]( http://slides.com/rift573/deck/fullscreen)
###Demo
![ScreenShot](https://cloud.githubusercontent.com/assets/898480/8462067/2de0b914-1fff-11e5-80b9-c64fe3b50f90.png)

#####Description
Simple tool which takes in a list of orders and allows you to edit them or clear them

#####Requirements
You must have nodejs and npm installed on your machine

#####Setup

1. npm install
2. grunt build (This will sit once done, running a watch on the code. Just leave it running.)
3. In a different console window, start up your node server by running: node server.js
4. In browser, go to http://localhost:7000/commonjs-demo.  This probably will not work in IE or Safari as I have not added the shims and the shams.

#####Troubleshooting
It is possible that you may need grunt and/or webpack installed globally.  If you run into any issues, try running
npm -g grunt webpack

###Resources


* [React](http://facebook.github.io/react/)
	* [React Rocks](http://react.rocks/)
	* [Awesome React](https://github.com/enaqx/awesome-react)
	* [Github](https://github.com/facebook/react)
	* [React Native - React for Native Android/ios Apps](https://facebook.github.io/react-native/)
	* [React Addons](https://facebook.github.io/react/docs/addons.html)
	* [React Test Utils](https://facebook.github.io/react/docs/test-utils.html)
	* [React Performance Tooling](https://facebook.github.io/react/docs/perf.html)
	* [React v0.13.0 Beta](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html)
		* Use ES6 (Native classes being the main focus relating to React)
* [Flux](https://facebook.github.io/flux/)
	* [Github](https://github.com/facebook/flux)
	* Other flux frameworks
		* [Fluxxor](http://fluxxor.com/)
			* [Github](https://github.com/BinaryMuse/fluxxor)
		* [Reflux](https://github.com/spoike/refluxjs)
		* [Flux framework comparison](https://github.com/voronianski/flux-comparison)
* [Webpack](http://webpack.github.io/)
* [Browserify](http://browserify.org/)
* [Mocha](http://mochajs.org/)
	* [Testing React Components w/ Mocha](http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/)
* Interesting React Projects
	* [Using React w/ Angular](https://github.com/davidchang/ngReact)
	* [ScalaJS w/ React](https://github.com/japgolly/scalajs-react) | [Example](https://japgolly.github.io/scalajs-react/#examples/animation)
	* [Elixir Server Side Rendering of React Components](https://github.com/awetzel/reaxt)
	* [React Components](https://github.com/dataminr/react-components)
	* [React Select](https://github.com/JedWatson/react-select)
	* [Joe Hudson React Libs](https://github.com/jhudson8/react-chartjs)
	* [D3 Data Visualization Component](https://github.com/esbullington/react-d3)
	
	
###Open Source Project?
I'm currently trying to come up with a relatively large-scale open source React based project idea that I would like to build.  If you have any interesting ideas that you might want help with (or want to help out on), get in touch with me.
