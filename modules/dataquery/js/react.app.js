(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=37)})({37:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
 *  The following file contains the base component for the data query react app.
 *  It also contains the component for the saved queries dropdown.
 *
 *  @author   Jordan Stirling <jstirling91@gmail.com>
 *  @author   Dave MacFarlane <david.macfarlane2@mcgill.ca>
 *  @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 *  @link     https://github.com/mohadesz/Loris-Trunk
 */var SavedQueriesList=React.createClass({displayName:"SavedQueriesList",getDefaultProps:function getDefaultProps(){queriesLoaded:false},componentDidMount:function componentDidMount(){},loadQuery:function loadQuery(queryName){this.props.onSelectQuery(this.props.queryDetails[queryName].Fields,this.props.queryDetails[queryName].Conditions)},render:function render(){var userSaved=[];var globalSaved=[];var queryName,curQuery;if(this.props.queriesLoaded===false){return React.createElement("div",null)}for(var i=0;i<this.props.userQueries.length;i+=1){curQuery=this.props.queryDetails[this.props.userQueries[i]];console.log(curQuery.Meta);if(curQuery.Meta&&curQuery.Meta.name){queryName=curQuery.Meta.name}else{queryName=this.props.userQueries[i]}userSaved.push(React.createElement("li",{key:this.props.userQueries[i]},React.createElement("a",{href:"#",onClick:this.loadQuery.bind(this,this.props.userQueries[i])},queryName)))}for(var i=0;i<this.props.globalQueries.length;i+=1){curQuery=this.props.queryDetails[this.props.globalQueries[i]];console.log(curQuery.Meta);if(curQuery.Meta&&curQuery.Meta.name){queryName=curQuery.Meta.name}else{queryName=this.props.globalQueries[i]}globalSaved.push(React.createElement("li",{key:this.props.globalQueries[i]},React.createElement("a",{href:"#",onClick:this.loadQuery.bind(this,this.props.globalQueries[i])},queryName)))}return React.createElement("ul",{className:"nav nav-tabs navbar-right"},React.createElement("li",{className:"dropdown"},React.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-expanded":"false"},"Load Saved Query ",React.createElement("span",{className:"caret"})),React.createElement("ul",{className:"dropdown-menu",role:"menu"},React.createElement("li",{role:"presentation",className:"dropdown-header"},"User Saved Queries"),userSaved,React.createElement("li",{role:"presentation",className:"dropdown-header"},"Shared Saved Queries"),globalSaved)),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#SavedQueriesTab","data-toggle":"tab"},"Manage Saved Queries")))}});var DataQueryApp=React.createClass({displayName:"DataQueryApp",componentDidMount:function componentDidMount(){var domNode=this;$(domNode).find('a[data-toggle="tab"]').on("shown.bs.tab",function(e){$(domNode).find("li").removeClass("active");if(e.target){e.target.classList.add("active");if(e.target.parentNode){e.target.parentNode.classList.add("active")}}});var promises=[];var that=this;for(var key in this.state.queryIDs){console.log(this.state.queryIDs[key][0]);for(var i=0;i<this.state.queryIDs[key].length;i+=1){var curRequest;curRequest=Promise.resolve($.ajax(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=GetDoc.php&DocID="+that.state.queryIDs[key][i]),{data:{DocID:that.state.queryIDs[key][i]},dataType:"json"}).then(function(value){var queries=that.state.savedQueries;queries[value._id]=value;that.setState({savedQueries:queries})});promises.push(curRequest)}}var allDone=Promise.all(promises).then(function(value){that.setState({queriesLoaded:true})});var component=this;$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){component.setState({ActiveTab:e.target.getAttribute("href").substr(1)})})},saveFilterRule:function saveFilterRule(rule){var savedRule={field:rule.field,operator:rule.operator,value:rule.value,instrument:rule.instrument,visit:rule.visit};return savedRule},saveFilterGroup:function saveFilterGroup(group){var savedFilter={activeOperator:group.activeOperator,children:[]};for(var i=0;i<group.children.length;i++){if(group.children[i].type==="rule"){savedFilter.children.push(this.saveFilterRule(group.children[i]))}else if(group.children[i].type==="group"){savedFilter.children.push(this.saveFilterGroup(group.children[i]))}}return savedFilter},saveCurrentQuery:function saveCurrentQuery(name,shared,override){var that=this,filter=this.saveFilterGroup(this.state.filter);$.post(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=saveQuery.php",{Fields:this.state.selectedFields,Filters:filter,QueryName:name,SharedQuery:shared,OverwriteQuery:override},function(data){var id=JSON.parse(data).id,queryIDs=that.state.queryIDs;if(!override){if(shared===true){queryIDs.Shared.push(id)}else{queryIDs.User.push(id)}}$.get(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=GetDoc.php&DocID="+id,function(value){var queries=that.state.savedQueries;queries[value._id]=value;that.setState({savedQueries:queries,queryIDs,alertLoaded:false,alertSaved:true,alertConflict:{show:false}})})}).fail(function(data){if(data.status===409){that.setState({alertConflict:{show:true,QueryName:name,SharedQuery:shared}})}})},overrideQuery:function overrideQuery(){this.saveCurrentQuery(this.state.alertConflict.QueryName,this.state.alertConflict.SharedQuery,true)},getInitialState:function getInitialState(){return{displayType:"Cross-sectional",fields:[],criteria:{},sessiondata:{},grouplevel:0,queryIDs:this.props.SavedQueries,savedQueries:{},queriesLoaded:false,alertLoaded:false,alertSaved:false,alertConflict:{show:false},ActiveTab:"Info",rowData:{},filter:{type:"group",activeOperator:0,children:[{type:"rule"}],session:this.props.AllSessions},selectedFields:{},downloadableFields:{},loading:false}},loadFilterRule:function loadFilterRule(rule){var script;if(!rule.type){rule.type="rule"}$.ajax({url:loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=datadictionary.php",success:function success(data){rule.fields=data},async:false,data:{category:rule.instrument},dataType:"json"});for(var i=0;i<rule.fields.length;i++){if(rule.fields[i].key[1]===rule.field){rule.fieldType=rule.fields[i].value.Type;break}}switch(rule.operator){case"equal":case"isNull":script="queryEqual.php";break;case"notEqual":case"isNotNull":script="queryNotEqual.php";break;case"lessThanEqual":script="queryLessThanEqual.php";break;case"greaterThanEqual":script="queryGreaterThanEqual.php";break;case"startsWith":script="queryStartsWith.php";break;case"contains":script="queryContains.php";break;default:break}$.ajax({url:loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script="+script,success:function success(data){var i,allSessions={},allCandiates={};for(i=0;i<data.length;i++){if(!allSessions[data[i][1]]){allSessions[data[i][1]]=[]}allSessions[data[i][1]].push(data[i][0]);if(!allCandiates[data[i][0]]){allCandiates[data[i][0]]=[]}allCandiates[data[i][0]].push(data[i][1])}rule.candidates={allCandiates,allSessions};if(rule.visit=="All"){rule.session=Object.keys(allCandiates)}else{if(allSessions[rule.visit]){rule.session=allSessions[rule.visit]}else{rule.session=[]}}},async:false,data:{category:rule.instrument,field:rule.field,value:rule.value},dataType:"json"});return rule},loadFilterGroup:function loadFilterGroup(group){for(var i=0;i<group.children.length;i++){if(group.children[i].activeOperator){if(!group.children[i].type){group.children[i].type="group"}group.children[i]=this.loadFilterGroup(group.children[i])}else{group.children[i]=this.loadFilterRule(group.children[i])}}group.session=getSessions(group);return group},loadSavedQuery:function loadSavedQuery(fields,criteria){var filterState={},selectedFields={},fieldsList=[];this.setState({loading:true});if(Array.isArray(criteria)){filterState={type:"group",activeOperator:0,children:[]};filterState.children=criteria.map(function(item){var fieldInfo=item.Field.split(",");rule={instrument:fieldInfo[0],field:fieldInfo[1],value:item.Value,type:"rule",visit:"All"};switch(item.Operator){case"=":rule.operator="equal";break;case"!=":rule.operator="notEqual";break;case"<=":rule.operator="lessThanEqual";break;case">=":rule.operator="greaterThanEqual";break;default:rule.operator=item.Operator;break}return rule});var fieldSplit;fieldsList=fields;for(var i=0;i<fields.length;i++){fieldSplit=fields[i].split(",");if(!selectedFields[fieldSplit[0]]){selectedFields[fieldSplit[0]]={};selectedFields[fieldSplit[0]][fieldSplit[1]]={};selectedFields[fieldSplit[0]].allVisits={};for(var key in this.props.Visits){selectedFields[fieldSplit[0]].allVisits[key]=1;selectedFields[fieldSplit[0]][fieldSplit[1]][key]=[key]}}else{selectedFields[fieldSplit[0]][fieldSplit[1]]={};for(var key in this.props.Visits){selectedFields[fieldSplit[0]].allVisits[key]++;selectedFields[fieldSplit[0]][fieldSplit[1]][key]=[key]}}}}else{filterState=criteria;selectedFields=fields;for(var instrument in fields){for(var field in fields[instrument]){if(field==="allVisits"){continue}else{fieldsList.push(instrument+","+field)}}}}if(filterState.children&&filterState.children.length>0){filterState=this.loadFilterGroup(filterState)}else{filterState.children=[{type:"rule"}];filterState.session=this.props.AllSessions}this.setState(function(state){return{fields:fieldsList,selectedFields,filter:filterState,alertLoaded:true,alertSaved:false,loading:false}});for(var i=0;i<fieldsList.length;i++){var that=this;$.ajax({url:loris.BaseURL+"/dataquery/ajax/datadictionary.php",success:function success(data){if(data[0].value.IsFile){that.setState(function(state){var key=data[0].key[0]+","+data[0].key[1];var downloadable=state.downloadableFields;downloadable[key]=true;return{downloadableFields:downloadable}})}},data:{key:fieldsList[i]},dataType:"json"})}},fieldVisitSelect:function fieldVisitSelect(action,visit,field){this.setState(function(state){var temp=state.selectedFields[field.instrument];if(action==="check"){temp[field.field][visit]=visit;if(temp.allVisits[visit]){temp.allVisits[visit]++}else{temp.allVisits[visit]=1}}else{delete temp[field.field][visit];if(temp.allVisits[visit]===1){delete temp.allVisits[visit]}else{temp.allVisits[visit]--}}return temp})},fieldChange:function fieldChange(fieldName,category,downloadable){var that=this;this.setState(function(state){var selectedFields=state.selectedFields,fields=state.fields.slice(0);if(!selectedFields[category]){selectedFields[category]={};selectedFields[category][fieldName]=JSON.parse(JSON.stringify(that.props.Visits));selectedFields[category].allVisits={};for(var key in that.props.Visits){selectedFields[category].allVisits[key]=1}fields.push(category+","+fieldName);if(downloadable){state.downloadableFields[category+","+fieldName]=true}}else if(selectedFields[category][fieldName]){for(var key in selectedFields[category][fieldName]){if(selectedFields[category].allVisits[key]===1){delete selectedFields[category].allVisits[key]}else{selectedFields[category].allVisits[key]--}}delete selectedFields[category][fieldName];var idx=fields.indexOf(category+","+fieldName);fields.splice(idx,1);if(Object.keys(selectedFields[category]).length===1){delete selectedFields[category]}if(downloadable){delete state.downloadableFields[category+","+fieldName]}}else{if(!selectedFields[category][fieldName]){selectedFields[category][fieldName]={}}for(var key in selectedFields[category].allVisits){if(key=="allVisits"){continue}selectedFields[category].allVisits[key]++;selectedFields[category][fieldName][key]=key}fields.push(category+","+fieldName);if(downloadable){state.downloadableFields[category+","+fieldName]=true}}return{selectedFields,fields}})},getSessions:function getSessions(){if(this.state.filter.children.length>0){return this.state.filter.session}else{return this.props.AllSessions}},runQuery:function runQuery(fields,sessions){var DocTypes=[],that=this,semaphore=0,sectionedSessions,ajaxComplete=function ajaxComplete(){if(semaphore==0){var rowdata=that.getRowData(that.state.grouplevel);that.setState({rowData:rowdata,loading:false})}};this.setState({rowData:{},sessiondata:{},loading:true});for(var i=0;i<fields.length;i+=1){var field_split=fields[i].split(",");var category=field_split[0];if(DocTypes.indexOf(category)===-1){var sessionInfo=[];for(var j=0;j<this.state.filter.session.length;j++){if(Array.isArray(this.state.filter.session[j])){if(this.state.selectedFields[category].allVisits[this.state.filter.session[j][1]]){sessionInfo.push(this.state.filter.session[j])}}else{for(var key in this.state.selectedFields[category].allVisits){var temp=[];temp.push(this.state.filter.session[j]);temp.push(key);sessionInfo.push(temp)}}}DocTypes.push(category);semaphore++;sectionedSessions=JSON.stringify(sessionInfo);$.ajax({type:"POST",url:loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=retrieveCategoryDocs.php",data:{DocType:category,Sessions:sectionedSessions},dataType:"text",success:function success(data){if(data){var i,row,rows,identifier,sessiondata=that.state.sessiondata;data=JSON.parse(data);rows=data.rows;for(i=0;i<rows.length;i+=1){row=rows[i];identifier=row.value;if(!sessiondata.hasOwnProperty(identifier)){sessiondata[identifier]={}}sessiondata[identifier][row.key[0]]=row.doc}that.setState({sessiondata})}console.log("Received data");semaphore--;ajaxComplete()}})}}},getRowData:function getRowData(displayID){var sessiondata=this.state.sessiondata;var sessions=this.getSessions();var fields=this.state.fields.sort();var downloadableFields=this.state.downloadableFields;var i,j;var rowdata=[];var currow=[];var Identifiers=[];var RowHeaders=[];var fileData=[];var href;if(displayID===0){for(i=0;fields&&i<fields.length;i+=1){RowHeaders.push(fields[i])}for(var session in sessiondata){currow=[];for(i=0;fields&&i<fields.length;i+=1){var fieldSplit=fields[i].split(",");currow[i]=".";var sd=sessiondata[session];if(sd[fieldSplit[0]]&&sd[fieldSplit[0]].data[fieldSplit[1]]&&downloadableFields[fields[i]]){href=loris.BaseURL+"/mri/jiv/get_file.php?file="+sd[fieldSplit[0]].data[fieldSplit[1]];currow[i]=React.createElement("a",{href},sd[fieldSplit[0]].data[fieldSplit[1]]);fileData.push("file/"+sd[fieldSplit[0]]._id+"/"+encodeURIComponent(sd[fieldSplit[0]].data[fieldSplit[1]]))}else if(sd[fieldSplit[0]]){currow[i]=sd[fieldSplit[0]].data[fieldSplit[1]]}}rowdata.push(currow);Identifiers.push(session)}}else{var Visits={},visit,identifier,temp,colHeader,index,instrument,fieldSplit;for(var session in sessiondata){temp=session.split(",");visit=temp[1];if(!Visits[visit]){Visits[visit]=true}identifier=temp[0];if(Identifiers.indexOf(identifier)===-1){Identifiers.push(identifier)}}for(i=0;fields&&i<fields.length;i+=1){for(visit in Visits){temp=fields[i].split(",");instrument=this.state.selectedFields[temp[0]];if(instrument&&instrument[temp[1]]&&instrument[temp[1]][visit]){RowHeaders.push(visit+" "+fields[i])}}}for(identifier in Identifiers){currow=[];for(colHeader in RowHeaders){temp=Identifiers[identifier]+","+RowHeaders[colHeader].split(" ")[0];index=sessiondata[temp];if(!index){currow.push(".")}else{temp=index[RowHeaders[colHeader].split(",")[0].split(" ")[1]];fieldSplit=RowHeaders[colHeader].split(" ")[1].split(",");if(temp){if(temp.data[RowHeaders[colHeader].split(",")[1]]&&downloadableFields[fieldSplit[0]+","+fieldSplit[1]]){href=loris.BaseURL+"/mri/jiv/get_file.php?file="+temp.data[RowHeaders[colHeader].split(",")[1]];temp=React.createElement("a",{href},temp.data[RowHeaders[colHeader].split(",")[1]])}else{temp=temp.data[RowHeaders[colHeader].split(",")[1]]}}else{temp="."}currow.push(temp)}}rowdata.push(currow)}}return{rowdata,Identifiers,RowHeaders,fileData}},dismissAlert:function dismissAlert(){this.setState({alertLoaded:false,alertSaved:false,alertConflict:{show:false}})},resetQuery:function resetQuery(){this.setState({fields:[],criteria:{},selectedFields:{}})},changeDataDisplay:function changeDataDisplay(displayID){var rowdata=this.getRowData(displayID);this.setState({grouplevel:displayID,rowData:rowdata})},updateFilter:function updateFilter(filter){var that=this;this.setState(function(state){if(filter.children.length===0){filter.session=that.props.AllSessions}return{filter}})},render:function render(){var tabs=[],tabsNav=[],alert=React.createElement("div",null);tabs.push(React.createElement(InfoTabPane,{TabId:"Info",UpdatedTime:this.props.UpdatedTime,Loading:this.state.loading}));tabs.push(React.createElement(FieldSelectTabPane,{TabId:"DefineFields",categories:this.props.categories,onFieldChange:this.fieldChange,selectedFields:this.state.selectedFields,Visits:this.props.Visits,fieldVisitSelect:this.fieldVisitSelect,Loading:this.state.loading}));tabs.push(React.createElement(FilterSelectTabPane,{TabId:"DefineFilters",categories:this.props.categories,filter:this.state.filter,updateFilter:this.updateFilter,Visits:this.props.Visits,Loading:this.state.loading}));var displayType=this.state.grouplevel===0?"Cross-sectional":"Longitudinal";tabs.push(React.createElement(ViewDataTabPane,{TabId:"ViewData",Fields:this.state.fields,Criteria:this.state.criteria,Sessions:this.getSessions(),Data:this.state.rowData.rowdata,RowInfo:this.state.rowData.Identifiers,RowHeaders:this.state.rowData.RowHeaders,FileData:this.state.rowData.fileData,onRunQueryClicked:this.runQuery,displayType,changeDataDisplay:this.changeDataDisplay,Loading:this.state.loading}));tabs.push(React.createElement(StatsVisualizationTabPane,{TabId:"Statistics",Fields:this.state.rowData.RowHeaders,Data:this.state.rowData.rowdata,Loading:this.state.loading}));tabs.push(React.createElement(ManageSavedQueriesTabPane,{TabId:"SavedQueriesTab",userQueries:this.state.queryIDs.User,globalQueries:this.state.queryIDs.Shared,onSaveQuery:this.saveCurrentQuery,queryDetails:this.state.savedQueries,queriesLoaded:this.state.queriesLoaded,Loading:this.state.loading}));if(this.state.alertLoaded){alert=React.createElement("div",{className:"alert alert-success",role:"alert"},React.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.dismissAlert},React.createElement("span",{"aria-hidden":"true"},"×")),React.createElement("strong",null,"Success")," Query Loaded.")}if(this.state.alertSaved){alert=React.createElement("div",{className:"alert alert-success",role:"alert"},React.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.dismissAlert},React.createElement("span",{"aria-hidden":"true"},"×")),React.createElement("strong",null,"Success")," Query Saved.")}if(this.state.alertConflict.show){alert=React.createElement("div",{className:"alert alert-warning",role:"alert"},React.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.dismissAlert},React.createElement("span",{"aria-hidden":"true"},"×")),React.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.dismissAlert},React.createElement("span",{"aria-hidden":"true"},"Override")),React.createElement("strong",null,"Error")," Query with the same name already exists.",React.createElement("a",{href:"#",class:"alert-link",onClick:this.overrideQuery},"Click here to override"))}var widthClass="col-md-12";var sideBar=React.createElement("div",null);if(this.state.fields.length>0&&this.state.ActiveTab!=="ViewData"&&this.state.ActiveTab!=="Statistics"&&this.state.ActiveTab!=="Info"){widthClass="col-md-10";sideBar=React.createElement("div",{className:"col-md-2"},React.createElement(FieldsSidebar,{Fields:this.state.fields,Criteria:this.state.criteria,resetQuery:this.resetQuery}))}return React.createElement("div",null,alert,React.createElement("div",{className:widthClass},React.createElement("nav",{className:"nav nav-tabs"},React.createElement("ul",{className:"nav nav-tabs navbar-left","data-tabs":"tabs"},React.createElement("li",{role:"presentation",className:"active"},React.createElement("a",{href:"#Info","data-toggle":"tab"},"Info")),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#DefineFields","data-toggle":"tab"},"Define Fields")),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#DefineFilters","data-toggle":"tab"},"Define Filters")),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#ViewData","data-toggle":"tab"},"View Data")),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#Statistics","data-toggle":"tab"},"Statistical Analysis"))),React.createElement(SavedQueriesList,{userQueries:this.state.queryIDs.User,globalQueries:this.state.queryIDs.Shared,queryDetails:this.state.savedQueries,queriesLoaded:this.state.queriesLoaded,onSelectQuery:this.loadSavedQuery,loadedQuery:this.state.loadedQuery})),React.createElement("div",{className:"tab-content"},tabs)),sideBar)}});window.SavedQueriesList=SavedQueriesList;window.DataQueryApp=DataQueryApp;window.RDataQueryApp=React.createFactory(DataQueryApp);exports.default=DataQueryApp}});
//# sourceMappingURL=react.app.js.map