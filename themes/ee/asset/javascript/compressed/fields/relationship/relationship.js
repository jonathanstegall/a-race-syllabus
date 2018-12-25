"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
var FilterableSelectList=makeFilterableComponent(SelectList),Relationship=function(e){function t(e){var i;return _classCallCheck(this,t),i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e)),_defineProperty(_assertThisInitialized(_assertThisInitialized(i)),"selectedItemsChanged",function(e){i.setState({selectedVisible:e})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(i)),"selectionChanged",function(e){i.setState({selected:e,selectedVisible:e})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(i)),"handleRemove",function(e,t){i.selectionChanged(i.state.selected.filter(function(e){return e.value!=t.value})),e.preventDefault()}),i.state={selected:SelectList.formatItems(e.selected)},i.state.selectedVisible=i.state.selected,i}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){var e=this;new MutableRelationshipField($(this.container),{success:function(t,i){var n=e.state.selected;e.props.multi?n.push(t.item):n=[t.item],e.selectionChanged(n),e.entryList.forceAjaxRefresh(),i.trigger("modal:close")}})}},{key:"render",value:function(){var e=this,t=makeFilterableComponent(SelectList);return React.createElement("div",{className:"fields-relate"+(this.props.multi?" fields-relate-multi":""),ref:function(t){e.container=t}},React.createElement(FilterableSelectList,{items:this.props.items,name:this.props.name,limit:this.props.limit,multi:this.props.multi,selected:this.state.selected,selectionChanged:this.selectionChanged,selectionRemovable:!0,selectionShouldRetainItemOrder:!1,noResults:this.props.no_results,filterable:!0,tooMany:!0,filters:this.props.select_filters,filterUrl:this.props.filter_url,toggleAll:!!(this.props.multi&&this.props.items.length>SelectList.defaultProps.toggleAllLimit)||null,ref:function(t){e.entryList=t}}),this.props.multi&&React.createElement(t,{items:this.state.selectedVisible,selected:[],filterable:!0,tooMany:!0,selectable:!1,reorderable:!0,removable:!0,handleRemove:function(t,i){return e.handleRemove(t,i)},itemsChanged:this.selectionChanged,selectionChanged:this.selectionChanged,noResults:this.props.no_related,toggleAll:!(this.props.items.length>SelectList.defaultProps.toggleAllLimit)&&null}))}}],[{key:"renderFields",value:function(e){$("div[data-relationship-react]",e).each(function(){var e=JSON.parse(window.atob($(this).data("relationshipReact")));e.name=$(this).data("inputValue"),ReactDOM.render(React.createElement(t,e,null),this)}),$.fuzzyFilter()}}]),t}(React.Component);$(document).ready(function(){Relationship.renderFields()}),Grid.bind("relationship","display",function(e){Relationship.renderFields(e)}),FluidField.on("relationship","add",function(e){Relationship.renderFields(e)});