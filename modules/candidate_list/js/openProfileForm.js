(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=20)})({0:function(module,exports){module.exports=React},20:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var OpenProfileForm=function(_Component){_inherits(OpenProfileForm,_Component);function OpenProfileForm(props){_classCallCheck(this,OpenProfileForm);var _this=_possibleConstructorReturn(this,(OpenProfileForm.__proto__||Object.getPrototypeOf(OpenProfileForm)).call(this,props));_this.state={error:{message:"",className:"alert alert-danger text-center"},PSCID:"",CandID:""};_this.updateFormElement=_this.updateFormElement.bind(_this);_this.validateAndSubmit=_this.validateAndSubmit.bind(_this);return _this}_createClass(OpenProfileForm,[{key:"updateFormElement",value:function updateFormElement(formElement,value){var state=this.state;state[formElement]=value;this.setState(state)}},{key:"validateAndSubmit",value:function validateAndSubmit(){var state=this.state;if(this.state.CandID===""){state.error={message:"You must enter a DCCID!",className:"alert alert-danger text-center"};this.setState(state);return}if(this.state.PSCID===""){state.error={message:"You must enter a PSCID!",className:"alert alert-danger text-center"};this.setState(state);return}state.error={message:"Validating...",className:"alert alert-info text-center"};this.setState(state);$.get(loris.BaseURL+"/candidate_list/validateIDs",{CandID:state.CandID,PSCID:state.PSCID},function(data){if(data==="1"){state.error={message:"Opening profile...",className:"alert alert-info text-center"};window.location.href=loris.BaseURL+"/"+state.CandID}else{state.error={message:"DCCID or PSCID is not valid",className:"alert alert-danger text-center"}}this.setState(state)}.bind(this))}},{key:"render",value:function render(){var warning=void 0;if(this.state.error.message!==""){warning=_react2.default.createElement("div",{className:this.state.error.className},this.state.error.message)}return _react2.default.createElement(FormElement,{name:"openprofile",onSubmit:this.validateAndSubmit},_react2.default.createElement(TextboxElement,{name:"CandID",label:"DCCID",value:this.state.CandID,onUserInput:this.updateFormElement}),_react2.default.createElement(TextboxElement,{name:"PSCID",label:"PSCID",value:this.state.PSCID,onUserInput:this.updateFormElement}),warning,_react2.default.createElement(ButtonElement,{name:"Open Profile",label:"Open Profile",onUserInput:this.validateAndSubmit}))}}]);return OpenProfileForm}(_react.Component);exports.default=OpenProfileForm}});
//# sourceMappingURL=openProfileForm.js.map