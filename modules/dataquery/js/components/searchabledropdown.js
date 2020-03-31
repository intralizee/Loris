window["lorisjs"]=window["lorisjs"]||{};window["lorisjs"]["dataquery"]=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=8)}([function(module,exports){(function(){module.exports=window["React"]})()},function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,ReactIs}else{module.exports=__webpack_require__(2)()}},function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);var prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var SearchableDropdown=function SearchableDropdown(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),_useState2=_slicedToArray(_useState,2),currentInput=_useState2[0],setCurrentInput=_useState2[1];var getKeyFromValue=function getKeyFromValue(value){var options=props.options;return Object.keys(options).find((function(o){return options[o]===value}))};var handleChange=function handleChange(e){var value=getKeyFromValue(e.target.value);if(!props.strictSearch&&value===undefined){value=e.target.value}setCurrentInput(e.target.value);props.onUserInput(props.name,value)};var handleBlur=function handleBlur(e){if(props.strictSearch){var _value=e.target.value;var _options=props.options;if(Object.values(_options).indexOf(_value)===-1){setCurrentInput("");props.onUserInput(props.name,"")}}};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){}));var required=props.required?"required":null;var disabled=props.disabled?"disabled":null;var sortByValue=props.sortByValue;var options=props.options;var strictMessage="Entry must be included in provided list of options.";var errorMessage=null;var requiredHTML=null;var elementClass="row form-group";if(required){requiredHTML=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"text-danger"},"*")}if(props.errorMessage){errorMessage=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,props.errorMessage);elementClass="row form-group has-error"}else if(props.required&&props.value===""){var msg="This field is required!";msg+=props.strictSearch?" "+strictMessage:"";errorMessage=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,msg);elementClass="row form-group has-error"}else if(props.strictSearch&&props.value===""){errorMessage=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,strictMessage);elementClass="row form-group has-error"}var value="";if(props.value!==undefined&&Object.keys(options).indexOf(props.value)>-1){value=options[props.value]}else if(currentInput){value=currentInput}var newOptions={};var optionList=[];if(sortByValue){for(var key in options){if(options.hasOwnProperty(key)){newOptions[options[key]]=key}}optionList=Object.keys(newOptions).sort().map((function(option){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:option,key:newOptions[option]})}))}else{optionList=Object.keys(options).map((function(option){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:options[option],key:option})}))}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container-fluid",style:{margin:"0 auto",maxWidth:"900px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group has-feedback"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"input-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"input-group-addon",style:{height:"50px",backgroundColor:"#FFFFFF",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"glyphicon glyphicon-hand-right"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:props.name+"_input",value,id:props.id,list:props.name+"_list",className:"form-control",disabled,placeholder:props.placeHolder,onChange:handleChange,onBlur:handleBlur,required,autoComplete:"off",style:{height:"50px",borderLeft:"0",fontSize:"16pt",borderTopRightRadius:"25px",borderBottomRightRadius:"25px"}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("datalist",{id:props.name+"_list"},optionList),errorMessage))};SearchableDropdown.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,strictSearch:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,label:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,value:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),class:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,errorMessage:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,placeHolder:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,onUserInput:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};SearchableDropdown.defaultProps={name:"",options:{},strictSearch:true,label:"",value:undefined,id:null,class:"",disabled:false,required:false,sortByValue:true,errorMessage:"",placeHolder:"",onUserInput:function onUserInput(){console.warn("onUserInput() callback is not set")}};__webpack_exports__["default"]=SearchableDropdown}]);
//# sourceMappingURL=searchabledropdown.js.map