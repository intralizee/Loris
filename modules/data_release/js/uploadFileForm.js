(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=27)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,ReactIs}else{module.exports=__webpack_require__(4)()}},18:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);var prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var ProgressBar=function(_Component){_inherits(ProgressBar,_Component);function ProgressBar(){_classCallCheck(this,ProgressBar);return _possibleConstructorReturn(this,_getPrototypeOf(ProgressBar).apply(this,arguments))}_createClass(ProgressBar,[{key:"render",value:function render(){var progressStyle={display:this.props.value<0?"none":"block",backgroundColor:"#d3d3d3",height:"30px",position:"relative"};var labelStyle={position:"absolute",top:0,left:0,zIndex:1e3,width:"100%",color:"#fff",textAlign:"center",lineHeight:"30px",fontWeight:"600"};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"progress",style:progressStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"progress-bar progress-bar-striped active",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.props.value,style:{width:this.props.value+"%"}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:labelStyle},this.props.value,"%"))}}]);return ProgressBar}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);ProgressBar.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};ProgressBar.defaultProps={value:0};__webpack_exports__["a"]=ProgressBar},27:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);var prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);var ProgressBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18);function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var UploadFileForm=function(_Component){_inherits(UploadFileForm,_Component);function UploadFileForm(props){var _this;_classCallCheck(this,UploadFileForm);_this=_possibleConstructorReturn(this,_getPrototypeOf(UploadFileForm).call(this,props));_this.state={data:{},formData:{},uploadResult:null,errorMessage:{},hasError:{},isLoaded:false,uploadProgress:-1};_this.updateFormElement=_this.updateFormElement.bind(_assertThisInitialized(_this));_this.validateAndSubmit=_this.validateAndSubmit.bind(_assertThisInitialized(_this));_this.uploadFile=_this.uploadFile.bind(_assertThisInitialized(_this));return _this}_createClass(UploadFileForm,[{key:"componentDidMount",value:function componentDidMount(){var self=this;fetch(this.props.DataURL,{credentials:"same-origin"}).then((function(resp){return resp.json()})).then((function(data){return self.setState({data,isLoaded:true})}))["catch"]((function(error){self.setState({error:"An error occurred when loading the form!"});console.error(error)}))}},{key:"render",value:function render(){if(this.state.error!==undefined){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"alert alert-danger text-center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,this.state.error))}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormElement,{name:"uploadfile",fileUpload:true,onSubmit:this.validateAndSubmit},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FileElement,{name:"file",label:"File to upload",onUserInput:this.updateFormElement,required:true,value:this.state.formData.file}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextboxElement,{name:"version",label:"Version",onUserInput:this.updateFormElement,required:false,value:this.state.formData.version}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonElement,{label:"Upload File"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-sm-9 col-sm-offset-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar__WEBPACK_IMPORTED_MODULE_2__["a"],{value:this.state.uploadProgress}))))}},{key:"updateFormElement",value:function updateFormElement(formElement,value){var formData=this.state.formData;if(value===""){formData[formElement]=null}else{formData[formElement]=value}this.setState({formData})}},{key:"validateAndSubmit",value:function validateAndSubmit(){var files=this.state.data.files?this.state.data.files:[];var formData=this.state.formData;var errorMessage={Filename:undefined,Filesize:undefined};var hasError={Filename:undefined,Filesize:undefined};if(!formData.file){errorMessage.Filename="You must select a file to upload";hasError.Filename=true;this.setState({errorMessage,hasError});return}var fileSize=formData.file?Math.round(formData.file.size/1024):null;var maxSizeAllowed=this.state.data.maxUploadSize;if(parseInt(fileSize,10)>parseInt(maxSizeAllowed,10)*1024){var msg="File size exceeds the maximum allowed ("+maxSizeAllowed+")";errorMessage["Filesize"]=msg;hasError["Filesize"]=true;swal({title:"Error",text:msg,type:"error",showCancelButton:true});this.setState({errorMessage,hasError});return}var fileName=formData.file?formData.file.name.replace(/\s+/g,"_"):null;var isDuplicate=files.indexOf(fileName);if(isDuplicate>=0){swal({title:"Are you sure?",text:"A file with this name already exists!\n Would you like to override existing file?",type:"warning",showCancelButton:true,confirmButtonText:"Yes, I am sure!",cancelButtonText:"No, cancel it!",closeOnConfirm:false},function(isConfirm){if(isConfirm){this.uploadFile()}else{swal("Cancelled","Your file is safe :)","error")}}.bind(this))}else{this.uploadFile()}}},{key:"uploadFile",value:function uploadFile(){var _this2=this;var formData=this.state.formData;var formObj=new FormData;for(var key in formData){if(formData[key]!==""){formObj.append(key,formData[key])}}fetch(this.props.action,{method:"post",body:formObj,cache:"no-cache"}).then((function(response){if(!response.ok){var msg=response.statusText?response.statusText:"Upload error!";_this2.setState({errorMessage:msg,uploadProgress:-1});swal(msg,"","error");console.error(msg)}else{var files=JSON.parse(JSON.stringify(_this2.state.data.files));files.push(formData.file.name);var event=new CustomEvent("update-datatable");window.dispatchEvent(event);_this2.setState({files,formData:{},uploadProgress:-1});swal({text:"Upload Successful!",title:"",type:"success"},(function(){window.location.assign("/data_release")}));_this2.props.fetchData()}}))["catch"]((function(error){var msg=error.message?error.message:"Upload error!";_this2.setState({errorMessage:msg,uploadProgress:-1});swal(msg,"","error");console.error(error)}))}}]);return UploadFileForm}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);UploadFileForm.propTypes={DataURL:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,action:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired};__webpack_exports__["default"]=UploadFileForm},4:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(5);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},5:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret}});
//# sourceMappingURL=uploadFileForm.js.map