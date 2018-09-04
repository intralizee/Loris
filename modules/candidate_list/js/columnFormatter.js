(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=32)})({32:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function formatColumn(column,cell,rowData){if(column==="PSCID"){var url=loris.BaseURL+"/"+rowData[1]+"/";return React.createElement("td",null,React.createElement("a",{href:url},cell))}if(column==="Feedback"){switch(cell){case"1":return React.createElement("td",{style:{background:"#E4A09E"}},"opened");case"2":return React.createElement("td",{style:{background:"#EEEEAA"}},"answered");case"3":return React.createElement("td",{style:{background:"#99CC99"}},"closed");case"4":return React.createElement("td",{style:{background:"#99CCFF"}},"comment");default:return React.createElement("td",null,"None")}}if(column==="Scan Done"&&cell==="Y"){return React.createElement("td",{className:"scanDoneLink"},React.createElement("a",{href:"#",onClick:loris.loadFilteredMenuClickHandler("imaging_browser/",{pscid:rowData[2]})},cell))}return React.createElement("td",null,cell)}window.formatColumn=formatColumn;exports.default=formatColumn}});
//# sourceMappingURL=columnFormatter.js.map