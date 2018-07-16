!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),NewProfileApp=function(_React$Component){function NewProfileApp(props){_classCallCheck(this,NewProfileApp);var _this=_possibleConstructorReturn(this,(NewProfileApp.__proto__||Object.getPrototypeOf(NewProfileApp)).call(this,props));return _this.state={isLoaded:!0,dates:{dob1:"",dob2:""},gender:"Female",options:{gender:{Male:"Male",Female:"Female",Other:"Other",Unknown:"Unknown"}}},_this.fetchData=_this.fetchData.bind(_this),_this.handleDateChange=_this.handleDateChange.bind(_this),_this.handleDateConfirmChange=_this.handleDateConfirmChange.bind(_this),_this.handleGenderChange=_this.handleGenderChange.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this}return _inherits(NewProfileApp,_React$Component),_createClass(NewProfileApp,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){}},{key:"handleDateChange",value:function(name,value){this.setState({dates:{dob1:value,dob2:this.state.dates.dob2}}),console.log(value)}},{key:"handleDateConfirmChange",value:function(name,value){console.log("date selected"),this.setState({dates:{dob1:this.state.dates.dob1,dob2:value}})}},{key:"handleGenderChange",value:function(name,value){this.setState({gender:value}),console.log(value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("hello")}},{key:"render",value:function(){return this.state.isLoaded?React.createElement("div",null,React.createElement("div",{id:"lorisworkspace"},React.createElement(FormElement,{name:"new_profile",id:"new_profile",method:"POST",class:"form-inline"},React.createElement(DateElement,{id:"dob1",name:"dob1",min:"2007-01-01",max:"2020-12-31",label:"Date of Birth",onUserInput:this.handleDateChange,value:this.state.dates.dob1}),React.createElement(DateElement,{id:"dob2",name:"dob2",label:"Confirm Date of Birth",onUserInput:this.handleDateConfirmChange,value:this.state.dates.dob2}),React.createElement(SelectElement,{id:"gender",name:"gender",label:"Gender",class:"form-control input-sm",options:this.state.options.gender,required:!0,hasError:!1,value:this.state.gender,emptyOption:!1,onUserInput:this.handleGenderChange}),React.createElement(ButtonElement,{name:"fire_away",label:"Create",type:"submit",onUserInput:this.handleSubmit})))):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}))}}]),NewProfileApp}(React.Component);NewProfileApp.propTypes={module:React.PropTypes.string.isRequired,user:React.PropTypes.object.isRequired},NewProfileApp.defaultProps={module:"",user:{data:{server:{dob1:"",dob2:"",gender:""},client:{}}}},window.onload=function(){var newProfile=React.createElement(NewProfileApp,{module:"newProfile"}),NewProfileAppDOM=document.createElement("div");NewProfileAppDOM.id="newProfile";var rootDOM=document.getElementById("lorisworkspace");rootDOM.appendChild(NewProfileAppDOM),ReactDOM.render(newProfile,document.getElementById("newProfile"))}}]);
//# sourceMappingURL=react.new_profile.js.map