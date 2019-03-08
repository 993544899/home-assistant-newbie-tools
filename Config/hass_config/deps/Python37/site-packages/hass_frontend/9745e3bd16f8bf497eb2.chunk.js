(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PaperItemBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}},PaperItemBehavior=[_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__.a,_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__.a,PaperItemBehaviorImpl]},127:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(128),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(108);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__.a]})},128:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content)},129:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(113),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],hostAttributes:{role:"listbox"}})},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},169:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),_paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(128),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(108);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__.a]})},198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return isComponentLoaded});function isComponentLoaded(hass,component){return hass&&-1!==hass.config.components.indexOf(component)}},790:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),app_toolbar=__webpack_require__(111),paper_icon_button=__webpack_require__(96),paper_icon_item=__webpack_require__(169),paper_item=__webpack_require__(127),paper_listbox=__webpack_require__(129),ha_icon=__webpack_require__(164),class_map=__webpack_require__(63);function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins){for(var i=0;i<mixins.length;i++){api=mixins[i](api)}}var r=factory(function initialize(O){api.initializeInstanceElements(O,decorated.elements)},superClass),decorated=api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);api.initializeClassElements(r.F,decorated.elements);return api.runClassFinishers(r.F,decorated.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&"own"===element.placement){this.defineClassElement(O,element)}},this)},this)},initializeClassElements:function(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}},this)},this)},defineClassElement:function(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};elements.forEach(function(element){this.addElementPlacement(element,placements)},this);elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers)},this);if(!decorators){return{elements:newElements,finishers:finishers}}var result=this.decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result},addElementPlacement:function(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key)){throw new TypeError("Duplicated element ("+element.key+")")}keys.push(element.key)},decorateElement:function(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1,keys;0<=i;i--){keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;this.addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher)}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){this.addElementPlacement(newExtras[j],placements)}extras.push.apply(extras,newExtras)}}return{element:element,finishers:finishers,extras:extras}},decorateConstructor:function(elements,decorators){for(var finishers=[],i=decorators.length-1;0<=i;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==void 0){finishers.push(elementsAndFinisher.finisher)}if(elementsAndFinisher.elements!==void 0){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")")}}}}}return{elements:elements,finishers:finishers}},fromElementDescriptor:function(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);if("field"===element.kind)obj.initializer=element.initializer;return obj},toElementDescriptors:function(elementObjects){if(elementObjects===void 0)return;return _toArray(elementObjects).map(function(elementObject){var element=this.toElementDescriptor(elementObject);this.disallowProperty(elementObject,"finisher","An element descriptor");this.disallowProperty(elementObject,"extras","An element descriptor");return element},this)},toElementDescriptor:function(elementObject){var kind=elementObject.kind+"";if("method"!==kind&&"field"!==kind){throw new TypeError("An element descriptor's .kind property must be either \"method\" or"+" \"field\", but a decorator created an element descriptor with"+" .kind \""+kind+"\"")}var key=_toPropertyKey(elementObject.key),placement=elementObject.placement+"";if("static"!==placement&&"prototype"!==placement&&"own"!==placement){throw new TypeError("An element descriptor's .placement property must be one of \"static\","+" \"prototype\" or \"own\", but a decorator created an element descriptor"+" with .placement \""+placement+"\"")}var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:Object.assign({},descriptor)};if("field"!==kind){this.disallowProperty(elementObject,"initializer","A method descriptor")}else{this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer}return element},toElementFinisherExtras:function(elementObject){var element=this.toElementDescriptor(elementObject),finisher=_optionalCallableProperty(elementObject,"finisher"),extras=this.toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras}},fromClassDescriptor:function(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);return obj},toClassDescriptor:function(obj){var kind=obj.kind+"";if("class"!==kind){throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator"+" created a class descriptor with .kind \""+kind+"\"")}this.disallowProperty(obj,"key","A class descriptor");this.disallowProperty(obj,"placement","A class descriptor");this.disallowProperty(obj,"descriptor","A class descriptor");this.disallowProperty(obj,"initializer","A class descriptor");this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher"),elements=this.toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher}},runClassFinishers:function(constructor,finishers){for(var i=0,newConstructor;i<finishers.length;i++){newConstructor=(0,finishers[i])(constructor);if(newConstructor!==void 0){if("function"!==typeof newConstructor){throw new TypeError("Finishers must return a constructor.")}constructor=newConstructor}}return constructor},disallowProperty:function(obj,name,objectType){if(obj[name]!==void 0){throw new TypeError(objectType+" can't have a ."+name+" property.")}}};return api}function _createElementDescriptor(def){var key=_toPropertyKey(def.key),descriptor;if("method"===def.kind){descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}}else if("get"===def.kind){descriptor={get:def.value,configurable:!0,enumerable:!1}}else if("set"===def.kind){descriptor={set:def.value,configurable:!0,enumerable:!1}}else if("field"===def.kind){descriptor={configurable:!0,writable:!0,enumerable:!0}}var element={kind:"field"===def.kind?"field":"method",key:key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if("field"===def.kind)element.initializer=def.value;return element}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==void 0){other.descriptor.get=element.descriptor.get}else{other.descriptor.set=element.descriptor.set}}function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var element=elements[i],other;if("method"===element.kind&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.")}other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").")}other.decorators=element.decorators}_coalesceGetterSetter(element,other)}}else{newElements.push(element)}}return newElements}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return desc!==void 0&&!(desc.value===void 0&&desc.writable===void 0)}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==void 0&&"function"!==typeof value){throw new TypeError("Expected '"+name+"' to be a function")}return value}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"===typeof key?key:key+""}function _toPrimitive(input,hint){if("object"!==typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(prim!==void 0){var res=prim.call(input,hint||"default");if("object"!==typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}const computeInitials=name=>{if(!name){return"user"}return name.trim().split(" ").slice(0,3).map(s=>s.substr(0,1)).join("")};let ha_user_badge_StateBadge=_decorate([Object(lit_element.d)("ha-user-badge")],function(_initialize,_LitElement){class StateBadge extends _LitElement{constructor(...args){super(...args);_initialize(this)}}return{F:StateBadge,d:[{kind:"field",decorators:[Object(lit_element.f)()],key:"user",value:void 0},{kind:"method",key:"render",value:function render(){const user=this.user,initials=user?computeInitials(user.name):"?";return lit_element.e`
      <div
        class="${Object(class_map.a)({"profile-badge":!0,long:2<initials.length})}"
      >
        ${initials}
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function styles(){return lit_element.c`
      .profile-badge {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
        overflow: hidden;
      }

      .profile-badge.long {
        font-size: 80%;
      }
    `}}]}},lit_element.a);var is_component_loaded=__webpack_require__(198),fire_event=__webpack_require__(44),common_const=__webpack_require__(109);function ha_sidebar_decorate(decorators,factory,superClass,mixins){var api=ha_sidebar_getDecoratorsApi();if(mixins){for(var i=0;i<mixins.length;i++){api=mixins[i](api)}}var r=factory(function initialize(O){api.initializeInstanceElements(O,decorated.elements)},superClass),decorated=api.decorateClass(ha_sidebar_coalesceClassElements(r.d.map(ha_sidebar_createElementDescriptor)),decorators);api.initializeClassElements(r.F,decorated.elements);return api.runClassFinishers(r.F,decorated.finishers)}function ha_sidebar_getDecoratorsApi(){ha_sidebar_getDecoratorsApi=function(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&"own"===element.placement){this.defineClassElement(O,element)}},this)},this)},initializeClassElements:function(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}},this)},this)},defineClassElement:function(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};elements.forEach(function(element){this.addElementPlacement(element,placements)},this);elements.forEach(function(element){if(!ha_sidebar_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers)},this);if(!decorators){return{elements:newElements,finishers:finishers}}var result=this.decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result},addElementPlacement:function(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key)){throw new TypeError("Duplicated element ("+element.key+")")}keys.push(element.key)},decorateElement:function(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1,keys;0<=i;i--){keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;this.addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher)}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){this.addElementPlacement(newExtras[j],placements)}extras.push.apply(extras,newExtras)}}return{element:element,finishers:finishers,extras:extras}},decorateConstructor:function(elements,decorators){for(var finishers=[],i=decorators.length-1;0<=i;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==void 0){finishers.push(elementsAndFinisher.finisher)}if(elementsAndFinisher.elements!==void 0){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")")}}}}}return{elements:elements,finishers:finishers}},fromElementDescriptor:function(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);if("field"===element.kind)obj.initializer=element.initializer;return obj},toElementDescriptors:function(elementObjects){if(elementObjects===void 0)return;return ha_sidebar_toArray(elementObjects).map(function(elementObject){var element=this.toElementDescriptor(elementObject);this.disallowProperty(elementObject,"finisher","An element descriptor");this.disallowProperty(elementObject,"extras","An element descriptor");return element},this)},toElementDescriptor:function(elementObject){var kind=elementObject.kind+"";if("method"!==kind&&"field"!==kind){throw new TypeError("An element descriptor's .kind property must be either \"method\" or"+" \"field\", but a decorator created an element descriptor with"+" .kind \""+kind+"\"")}var key=ha_sidebar_toPropertyKey(elementObject.key),placement=elementObject.placement+"";if("static"!==placement&&"prototype"!==placement&&"own"!==placement){throw new TypeError("An element descriptor's .placement property must be one of \"static\","+" \"prototype\" or \"own\", but a decorator created an element descriptor"+" with .placement \""+placement+"\"")}var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:Object.assign({},descriptor)};if("field"!==kind){this.disallowProperty(elementObject,"initializer","A method descriptor")}else{this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer}return element},toElementFinisherExtras:function(elementObject){var element=this.toElementDescriptor(elementObject),finisher=ha_sidebar_optionalCallableProperty(elementObject,"finisher"),extras=this.toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras}},fromClassDescriptor:function(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);return obj},toClassDescriptor:function(obj){var kind=obj.kind+"";if("class"!==kind){throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator"+" created a class descriptor with .kind \""+kind+"\"")}this.disallowProperty(obj,"key","A class descriptor");this.disallowProperty(obj,"placement","A class descriptor");this.disallowProperty(obj,"descriptor","A class descriptor");this.disallowProperty(obj,"initializer","A class descriptor");this.disallowProperty(obj,"extras","A class descriptor");var finisher=ha_sidebar_optionalCallableProperty(obj,"finisher"),elements=this.toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher}},runClassFinishers:function(constructor,finishers){for(var i=0,newConstructor;i<finishers.length;i++){newConstructor=(0,finishers[i])(constructor);if(newConstructor!==void 0){if("function"!==typeof newConstructor){throw new TypeError("Finishers must return a constructor.")}constructor=newConstructor}}return constructor},disallowProperty:function(obj,name,objectType){if(obj[name]!==void 0){throw new TypeError(objectType+" can't have a ."+name+" property.")}}};return api}function ha_sidebar_createElementDescriptor(def){var key=ha_sidebar_toPropertyKey(def.key),descriptor;if("method"===def.kind){descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}}else if("get"===def.kind){descriptor={get:def.value,configurable:!0,enumerable:!1}}else if("set"===def.kind){descriptor={set:def.value,configurable:!0,enumerable:!1}}else if("field"===def.kind){descriptor={configurable:!0,writable:!0,enumerable:!0}}var element={kind:"field"===def.kind?"field":"method",key:key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if("field"===def.kind)element.initializer=def.value;return element}function ha_sidebar_coalesceGetterSetter(element,other){if(element.descriptor.get!==void 0){other.descriptor.get=element.descriptor.get}else{other.descriptor.set=element.descriptor.set}}function ha_sidebar_coalesceClassElements(elements){for(var newElements=[],isSameElement=function(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var element=elements[i],other;if("method"===element.kind&&(other=newElements.find(isSameElement))){if(ha_sidebar_isDataDescriptor(element.descriptor)||ha_sidebar_isDataDescriptor(other.descriptor)){if(ha_sidebar_hasDecorators(element)||ha_sidebar_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.")}other.descriptor=element.descriptor}else{if(ha_sidebar_hasDecorators(element)){if(ha_sidebar_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").")}other.decorators=element.decorators}ha_sidebar_coalesceGetterSetter(element,other)}}else{newElements.push(element)}}return newElements}function ha_sidebar_hasDecorators(element){return element.decorators&&element.decorators.length}function ha_sidebar_isDataDescriptor(desc){return desc!==void 0&&!(desc.value===void 0&&desc.writable===void 0)}function ha_sidebar_optionalCallableProperty(obj,name){var value=obj[name];if(value!==void 0&&"function"!==typeof value){throw new TypeError("Expected '"+name+"' to be a function")}return value}function ha_sidebar_toPropertyKey(arg){var key=ha_sidebar_toPrimitive(arg,"string");return"symbol"===typeof key?key:key+""}function ha_sidebar_toPrimitive(input,hint){if("object"!==typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(prim!==void 0){var res=prim.call(input,hint||"default");if("object"!==typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function ha_sidebar_toArray(arr){return ha_sidebar_arrayWithHoles(arr)||ha_sidebar_iterableToArray(arr)||ha_sidebar_nonIterableRest()}function ha_sidebar_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function ha_sidebar_iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function ha_sidebar_arrayWithHoles(arr){if(Array.isArray(arr))return arr}const computeUrl=urlPath=>`/${urlPath}`,computePanels=hass=>{const panels=hass.panels,sortValue={map:1,logbook:2,history:3},result=[];Object.keys(panels).forEach(key=>{if(panels[key].title){result.push(panels[key])}});result.sort((a,b)=>{const aBuiltIn=a.component_name in sortValue,bBuiltIn=b.component_name in sortValue;if(aBuiltIn&&bBuiltIn){return sortValue[a.component_name]-sortValue[b.component_name]}if(aBuiltIn){return-1}if(bBuiltIn){return 1}if(a.title<b.title){return-1}if(a.title>b.title){return 1}return 0});return result};let ha_sidebar_HaSidebar=ha_sidebar_decorate(null,function(_initialize,_LitElement){class HaSidebar extends _LitElement{constructor(...args){super(...args);_initialize(this)}}return{F:HaSidebar,d:[{kind:"field",decorators:[Object(lit_element.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(lit_element.f)()],key:"_defaultPage",value(){return localStorage.defaultPage||common_const.b}},{kind:"method",key:"render",value:function render(){const hass=this.hass;if(!hass){return lit_element.e``}return lit_element.e`
      <app-toolbar>
        <div main-title>Home Assistant</div>
        ${hass.user?lit_element.e`
              <a href="/profile">
                <ha-user-badge .user=${hass.user}></ha-user-badge>
              </a>
            `:""}
      </app-toolbar>

      <paper-listbox attr-for-selected="data-panel" .selected=${hass.panelUrl}>
        <a
          href="${computeUrl(this._defaultPage)}"
          data-panel=${this._defaultPage}
          tabindex="-1"
        >
          <paper-icon-item>
            <ha-icon slot="item-icon" icon="hass:apps"></ha-icon>
            <span class="item-text">${hass.localize("panel.states")}</span>
          </paper-icon-item>
        </a>

        ${computePanels(hass).map(panel=>lit_element.e`
            <a
              href="${computeUrl(panel.url_path)}"
              data-panel="${panel.url_path}"
              tabindex="-1"
            >
              <paper-icon-item>
                <ha-icon slot="item-icon" .icon="${panel.icon}"></ha-icon>
                <span class="item-text"
                  >${hass.localize(`panel.${panel.title}`)||panel.title}</span
                >
              </paper-icon-item>
            </a>
          `)}
        ${!hass.user?lit_element.e`
              <paper-icon-item @click=${this._handleLogOut} class="logout">
                <ha-icon slot="item-icon" icon="hass:exit-to-app"></ha-icon>
                <span class="item-text"
                  >${hass.localize("ui.sidebar.log_out")}</span
                >
              </paper-icon-item>
            `:lit_element.e``}
      </paper-listbox>

      <div>
        <div class="divider"></div>

        <div class="subheader">
          ${hass.localize("ui.sidebar.developer_tools")}
        </div>

        <div class="dev-tools">
          <a href="/dev-service" tabindex="-1">
            <paper-icon-button
              icon="hass:remote"
              alt="${hass.localize("panel.dev-services")}"
              title="${hass.localize("panel.dev-services")}"
            ></paper-icon-button>
          </a>
          <a href="/dev-state" tabindex="-1">
            <paper-icon-button
              icon="hass:code-tags"
              alt="${hass.localize("panel.dev-states")}"
              title="${hass.localize("panel.dev-states")}"
            ></paper-icon-button>
          </a>
          <a href="/dev-event" tabindex="-1">
            <paper-icon-button
              icon="hass:radio-tower"
              alt="${hass.localize("panel.dev-events")}"
              title="${hass.localize("panel.dev-events")}"
            ></paper-icon-button>
          </a>
          <a href="/dev-template" tabindex="-1">
            <paper-icon-button
              icon="hass:file-xml"
              alt="${hass.localize("panel.dev-templates")}"
              title="${hass.localize("panel.dev-templates")}"
            ></paper-icon-button>
          </a>
          ${Object(is_component_loaded.a)(hass,"mqtt")?lit_element.e`
                <a href="/dev-mqtt" tabindex="-1">
                  <paper-icon-button
                    icon="hass:altimeter"
                    alt="${hass.localize("panel.dev-mqtt")}"
                    title="${hass.localize("panel.dev-mqtt")}"
                  ></paper-icon-button>
                </a>
              `:lit_element.e``}
          <a href="/dev-info" tabindex="-1">
            <paper-icon-button
              icon="hass:information-outline"
              alt="${hass.localize("panel.dev-info")}"
              title="${hass.localize("panel.dev-info")}"
            ></paper-icon-button>
          </a>
        </div>
      </div>
    `}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){if(!this.hass||!changedProps.has("hass")){return!1}const oldHass=changedProps.get("hass");if(!oldHass){return!0}const hass=this.hass;return hass.panels!==oldHass.panels||hass.panelUrl!==oldHass.panelUrl||hass.config.components!==oldHass.config.components||hass.user!==oldHass.user||hass.localize!==oldHass.localize}},{kind:"method",key:"_handleLogOut",value:function _handleLogOut(){Object(fire_event.a)(this,"hass-logout")}},{kind:"get",static:!0,key:"styles",value:function styles(){return lit_element.c`
      :host {
        height: 100%;
        display: block;
        overflow: auto;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(
          --sidebar-background-color,
          var(--primary-background-color)
        );
      }

      app-toolbar {
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
      }

      app-toolbar a {
        color: var(--primary-text-color);
      }

      paper-listbox {
        padding: 0;
      }

      paper-listbox > a {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
      }

      paper-icon-item {
        margin: 8px;
        padding-left: 9px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
      }

      a ha-icon {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item:before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
        transition: opacity 15ms linear;
        will-change: opacity;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item ha-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item.logout {
        margin-top: 16px;
      }

      .divider {
        height: 1px;
        background-color: var(--divider-color);
        margin: 4px 0;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }
    `}}]}},lit_element.a);customElements.define("ha-sidebar",ha_sidebar_HaSidebar)}}]);
//# sourceMappingURL=9745e3bd16f8bf497eb2.chunk.js.map