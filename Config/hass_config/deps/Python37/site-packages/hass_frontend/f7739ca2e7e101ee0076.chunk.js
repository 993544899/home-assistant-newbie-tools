(window.webpackJsonp=window.webpackJsonp||[]).push([[67,123,124],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PaperItemBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32);/**
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
</dom-module>`;document.head.appendChild($_documentContainer.content)},130:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(97),_polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),_polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(133),_polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(100),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41),_paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(131),_paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(132),_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(50),_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(32),_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(53),_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(54),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(4),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(0),_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(33),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__.a`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__.a,_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__.a,_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__.a,_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var contentElement=this.contentElement;if(contentElement&&contentElement.selectedItem){this._setSelectedItem(contentElement.selectedItem)}},get contentElement(){for(var nodes=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__.b)(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(event){this._setSelectedItem(event.detail.item)},_onIronDeselect:function(event){this._setSelectedItem(null)},_onTap:function(event){if(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__.c(event)===this){this.open()}},_selectedItemChanged:function(selectedItem){var value="";if(!selectedItem){value=""}else{value=selectedItem.label||selectedItem.getAttribute("label")||selectedItem.textContent.trim()}this.value=value;this._setSelectedItemLabel(value)},_computeMenuVerticalOffset:function(noLabelFloat,opt_verticalOffset){if(opt_verticalOffset){return opt_verticalOffset}return noLabelFloat?-4:8},_getValidity:function(_value){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var openState=this.opened?"true":"false",e=this.contentElement;if(e){e.setAttribute("aria-expanded",openState)}}})},131:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(75);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer.content)},132:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content)},159:function(module,__webpack_exports__,__webpack_require__){"use strict";var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(177);__webpack_exports__.a=stateObj=>stateObj.attributes.friendly_name===void 0?Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__.a)(stateObj.entity_id).replace(/_/g," "):stateObj.attributes.friendly_name||""},160:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(171),_polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(168),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(41),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__.a`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(image){return image?"false":"true"},_headingChanged:function(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function(image){return image?" over-image":""},_computeAnimated:function(animatedShadow){return animatedShadow}})},161:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__.a`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;template.setAttribute("style","display: none;");document.head.appendChild(template.content)},162:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeStateDomain});var _compute_domain__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(166);function computeStateDomain(stateObj){return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__.a)(stateObj.entity_id)}},163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return domainIcon});var _const__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109);const fixedIcons={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function domainIcon(domain,state){if(domain in fixedIcons){return fixedIcons[domain]}switch(domain){case"alarm_control_panel":switch(state){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell";}case"binary_sensor":return state&&"off"===state?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===state?"hass:window-closed":"hass:window-open";case"lock":return state&&"unlocked"===state?"hass:lock-open":"hass:lock";case"media_player":return state&&"off"!==state&&"idle"!==state?"hass:cast-connected":"hass:cast";case"zwave":switch(state){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave";}default:console.warn("Unable to find icon for domain "+domain+" ("+state+")");return _const__WEBPACK_IMPORTED_MODULE_0__.a;}}},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},165:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeDomain});function computeDomain(entityId){return entityId.substr(0,entityId.indexOf("."))}},168:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_shadow_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(98),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__.a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content)},169:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),_paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(128),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(108);/**
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
`,is:"paper-icon-item",behaviors:[_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__.a]})},170:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_ha_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164),_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(162),_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(178);function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins){for(var i=0;i<mixins.length;i++){api=mixins[i](api)}}var r=factory(function initialize(O){api.initializeInstanceElements(O,decorated.elements)},superClass),decorated=api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);api.initializeClassElements(r.F,decorated.elements);return api.runClassFinishers(r.F,decorated.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&"own"===element.placement){this.defineClassElement(O,element)}},this)},this)},initializeClassElements:function(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}},this)},this)},defineClassElement:function(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};elements.forEach(function(element){this.addElementPlacement(element,placements)},this);elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers)},this);if(!decorators){return{elements:newElements,finishers:finishers}}var result=this.decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result},addElementPlacement:function(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key)){throw new TypeError("Duplicated element ("+element.key+")")}keys.push(element.key)},decorateElement:function(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1,keys;0<=i;i--){keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;this.addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher)}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){this.addElementPlacement(newExtras[j],placements)}extras.push.apply(extras,newExtras)}}return{element:element,finishers:finishers,extras:extras}},decorateConstructor:function(elements,decorators){for(var finishers=[],i=decorators.length-1;0<=i;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==void 0){finishers.push(elementsAndFinisher.finisher)}if(elementsAndFinisher.elements!==void 0){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")")}}}}}return{elements:elements,finishers:finishers}},fromElementDescriptor:function(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);if("field"===element.kind)obj.initializer=element.initializer;return obj},toElementDescriptors:function(elementObjects){if(elementObjects===void 0)return;return _toArray(elementObjects).map(function(elementObject){var element=this.toElementDescriptor(elementObject);this.disallowProperty(elementObject,"finisher","An element descriptor");this.disallowProperty(elementObject,"extras","An element descriptor");return element},this)},toElementDescriptor:function(elementObject){var kind=elementObject.kind+"";if("method"!==kind&&"field"!==kind){throw new TypeError("An element descriptor's .kind property must be either \"method\" or"+" \"field\", but a decorator created an element descriptor with"+" .kind \""+kind+"\"")}var key=_toPropertyKey(elementObject.key),placement=elementObject.placement+"";if("static"!==placement&&"prototype"!==placement&&"own"!==placement){throw new TypeError("An element descriptor's .placement property must be one of \"static\","+" \"prototype\" or \"own\", but a decorator created an element descriptor"+" with .placement \""+placement+"\"")}var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:Object.assign({},descriptor)};if("field"!==kind){this.disallowProperty(elementObject,"initializer","A method descriptor")}else{this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer}return element},toElementFinisherExtras:function(elementObject){var element=this.toElementDescriptor(elementObject),finisher=_optionalCallableProperty(elementObject,"finisher"),extras=this.toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras}},fromClassDescriptor:function(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);return obj},toClassDescriptor:function(obj){var kind=obj.kind+"";if("class"!==kind){throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator"+" created a class descriptor with .kind \""+kind+"\"")}this.disallowProperty(obj,"key","A class descriptor");this.disallowProperty(obj,"placement","A class descriptor");this.disallowProperty(obj,"descriptor","A class descriptor");this.disallowProperty(obj,"initializer","A class descriptor");this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher"),elements=this.toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher}},runClassFinishers:function(constructor,finishers){for(var i=0,newConstructor;i<finishers.length;i++){newConstructor=(0,finishers[i])(constructor);if(newConstructor!==void 0){if("function"!==typeof newConstructor){throw new TypeError("Finishers must return a constructor.")}constructor=newConstructor}}return constructor},disallowProperty:function(obj,name,objectType){if(obj[name]!==void 0){throw new TypeError(objectType+" can't have a ."+name+" property.")}}};return api}function _createElementDescriptor(def){var key=_toPropertyKey(def.key),descriptor;if("method"===def.kind){descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}}else if("get"===def.kind){descriptor={get:def.value,configurable:!0,enumerable:!1}}else if("set"===def.kind){descriptor={set:def.value,configurable:!0,enumerable:!1}}else if("field"===def.kind){descriptor={configurable:!0,writable:!0,enumerable:!0}}var element={kind:"field"===def.kind?"field":"method",key:key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if("field"===def.kind)element.initializer=def.value;return element}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==void 0){other.descriptor.get=element.descriptor.get}else{other.descriptor.set=element.descriptor.set}}function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var element=elements[i],other;if("method"===element.kind&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.")}other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").")}other.decorators=element.decorators}_coalesceGetterSetter(element,other)}}else{newElements.push(element)}}return newElements}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return desc!==void 0&&!(desc.value===void 0&&desc.writable===void 0)}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==void 0&&"function"!==typeof value){throw new TypeError("Expected '"+name+"' to be a function")}return value}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"===typeof key?key:key+""}function _toPrimitive(input,hint){if("object"!==typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(prim!==void 0){var res=prim.call(input,hint||"default");if("object"!==typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}let StateBadge=_decorate(null,function(_initialize,_LitElement){class StateBadge extends _LitElement{constructor(...args){super(...args);_initialize(this)}}return{F:StateBadge,d:[{kind:"field",decorators:[Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.f)()],key:"stateObj",value:void 0},{kind:"field",decorators:[Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.f)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.g)("ha-icon")],key:"_icon",value:void 0},{kind:"method",key:"render",value:function render(){const stateObj=this.stateObj;if(!stateObj){return lit_element__WEBPACK_IMPORTED_MODULE_0__.e``}return lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
      <ha-icon
        id="icon"
        data-domain=${Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__.a)(stateObj)}
        data-state=${stateObj.state}
        .icon=${this.overrideIcon||Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__.a)(stateObj)}
      ></ha-icon>
    `}},{kind:"method",key:"updated",value:function updated(changedProps){if(!changedProps.has("stateObj")){return}const stateObj=this.stateObj,iconStyle={color:"",filter:""},hostStyle={backgroundImage:""};if(stateObj){if(stateObj.attributes.entity_picture){hostStyle.backgroundImage="url("+stateObj.attributes.entity_picture+")";iconStyle.display="none"}else{if(stateObj.attributes.hs_color){const hue=stateObj.attributes.hs_color[0],sat=stateObj.attributes.hs_color[1];if(10<sat){iconStyle.color=`hsl(${hue}, 100%, ${100-sat/2}%)`}}if(stateObj.attributes.brightness){const brightness=stateObj.attributes.brightness;if("number"!==typeof brightness){const errorMessage=`Type error: state-badge expected number, but type of ${stateObj.entity_id}.attributes.brightness is ${typeof brightness} (${brightness})`;console.warn(errorMessage)}iconStyle.filter=`brightness(${(brightness+245)/5}%)`}}}Object.assign(this._icon.style,iconStyle);Object.assign(this.style,hostStyle)}},{kind:"get",static:!0,key:"styles",value:function styles(){return lit_element__WEBPACK_IMPORTED_MODULE_0__.c`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}}]}},lit_element__WEBPACK_IMPORTED_MODULE_0__.a);customElements.define("state-badge",StateBadge)},171:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden\$="[[_computeImgDivHidden(sizing)]]" aria-hidden\$="[[_computeImgDivARIAHidden(alt)]]" aria-label\$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt\$="[[alt]]" hidden\$="[[_computeImgHidden(sizing)]]" crossorigin\$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden\$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class\$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt){return this.alt}if(""===this.src){return""}var resolved=this._resolveSrc(this.src);return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(testSrc){var resolved=Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__.c)(testSrc,this.$.baseURIAnchor.href);if("/"===resolved[0]){resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}})},177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeObjectId});function computeObjectId(entityId){return entityId.substr(entityId.indexOf(".")+1)}},178:function(module,__webpack_exports__,__webpack_require__){"use strict";var common_const=__webpack_require__(109),compute_domain=__webpack_require__(166),domain_icon=__webpack_require__(163);function binarySensorIcon(state){const activated=state.state&&"off"===state.state;switch(state.attributes.device_class){case"battery":return activated?"hass:battery":"hass:battery-outline";case"cold":return activated?"hass:thermometer":"hass:snowflake";case"connectivity":return activated?"hass:server-network-off":"hass:server-network";case"door":return activated?"hass:door-closed":"hass:door-open";case"garage_door":return activated?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return activated?"hass:shield-check":"hass:alert";case"heat":return activated?"hass:thermometer":"hass:fire";case"light":return activated?"hass:brightness-5":"hass:brightness-7";case"lock":return activated?"hass:lock":"hass:lock-open";case"moisture":return activated?"hass:water-off":"hass:water";case"motion":return activated?"hass:walk":"hass:run";case"occupancy":return activated?"hass:home-outline":"hass:home";case"opening":return activated?"hass:square":"hass:square-outline";case"plug":return activated?"hass:power-plug-off":"hass:power-plug";case"presence":return activated?"hass:home-outline":"hass:home";case"sound":return activated?"hass:music-note-off":"hass:music-note";case"vibration":return activated?"hass:crop-portrait":"hass:vibrate";case"window":return activated?"hass:window-closed":"hass:window-open";default:return activated?"hass:radiobox-blank":"hass:checkbox-marked-circle";}}function coverIcon(state){const open="closed"!==state.state;switch(state.attributes.device_class){case"garage":return open?"hass:garage-open":"hass:garage";default:return Object(domain_icon.a)("cover",state.state);}}const fixedDeviceClassIcons={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge"};function sensorIcon(state){const dclass=state.attributes.device_class;if(dclass&&dclass in fixedDeviceClassIcons){return fixedDeviceClassIcons[dclass]}if("battery"===dclass){const battery=+state.state;if(isNaN(battery)){return"hass:battery-unknown"}const batteryRound=10*Math.round(battery/10);if(100<=batteryRound){return"hass:battery"}if(0>=batteryRound){return"hass:battery-alert"}return`${"hass"}:battery-${batteryRound}`}const unit=state.attributes.unit_of_measurement;if(unit===common_const.j||unit===common_const.k){return"hass:thermometer"}return Object(domain_icon.a)("sensor")}function inputDateTimeIcon(state){if(!state.attributes.has_date){return"hass:clock"}if(!state.attributes.has_time){return"hass:calendar"}return Object(domain_icon.a)("input_datetime")}__webpack_require__.d(__webpack_exports__,"a",function(){return stateIcon});const domainIcons={binary_sensor:binarySensorIcon,cover:coverIcon,sensor:sensorIcon,input_datetime:inputDateTimeIcon};function stateIcon(state){if(!state){return common_const.a}if(state.attributes.icon){return state.attributes.icon}const domain=Object(compute_domain.a)(state.entity_id);if(domain in domainIcons){return domainIcons[domain](state)}return Object(domain_icon.a)(domain,state.state)}},181:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){var classes="together layout ";return classes+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},221:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97),_ha_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164);class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__.a{connectedCallback(){this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left";super.connectedCallback()}}customElements.define("ha-icon-next",HaIconNext)},237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=(a,b)=>{if(a<b){return-1}if(a>b){return 1}return 0}},246:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__.a`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var parentNode=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).parentNode,ownerRoot=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).getOwnerRoot(),target;if(this.for){target=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if("entry"===type){this.show()}else if("exit"===type){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(""===Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).textContent.trim()){for(var allChildrenEmpty=!0,effectiveChildren=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).getEffectiveChildNodes(),i=0;i<effectiveChildren.length;i++){if(""!==effectiveChildren[i].textContent.trim()){allChildrenEmpty=!1;break}}if(allChildrenEmpty){return}}this._showing=!0;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=!0;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=!1;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=!1;this._animationPlaying=!0},updatePosition:function(){var _Mathmax=Math.max;if(!this._target||!this.offsetParent)return;var offset=this.offset;if(14!=this.marginTop&&14==this.offset)offset=this.marginTop;var parentRect=this.offsetParent.getBoundingClientRect(),targetRect=this._target.getBoundingClientRect(),thisRect=this.getBoundingClientRect(),horizontalCenterOffset=(targetRect.width-thisRect.width)/2,verticalCenterOffset=(targetRect.height-thisRect.height)/2,targetLeft=targetRect.left-parentRect.left,targetTop=targetRect.top-parentRect.top,tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break;}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=_Mathmax(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=_Mathmax(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(500!==newValue){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=!1;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if("entry"===type&&""!==this.animationEntry){return this.animationEntry}if("exit"===type&&""!==this.animationExit){return this.animationExit}if(this.animationConfig[type]&&"string"===typeof this.animationConfig[type][0].name){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&0!==this.animationConfig[type][0].timing.delay){var timingDelay=this.animationConfig[type][0].timing.delay;if("entry"===type){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if("exit"===type){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")}})},305:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeEntityRegistryName});__webpack_require__.d(__webpack_exports__,"b",function(){return fetchEntityRegistry});__webpack_require__.d(__webpack_exports__,"d",function(){return updateEntityRegistryEntry});__webpack_require__.d(__webpack_exports__,"c",function(){return removeEntityRegistryEntry});var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(159);const computeEntityRegistryName=(hass,entry)=>{if(entry.name){return entry.name}const state=hass.states[entry.entity_id];return state?Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__.a)(state):null},fetchEntityRegistry=hass=>hass.callWS({type:"config/entity_registry/list"}),updateEntityRegistryEntry=(hass,entityId,updates)=>hass.callWS(Object.assign({type:"config/entity_registry/update",entity_id:entityId},updates)),removeEntityRegistryEntry=(hass,entityId)=>hass.callWS({type:"config/entity_registry/remove",entity_id:entityId})},377:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return fetchAreaRegistry});__webpack_require__.d(__webpack_exports__,"a",function(){return createAreaRegistryEntry});__webpack_require__.d(__webpack_exports__,"d",function(){return updateAreaRegistryEntry});__webpack_require__.d(__webpack_exports__,"b",function(){return deleteAreaRegistryEntry});const fetchAreaRegistry=hass=>hass.callWS({type:"config/area_registry/list"}),createAreaRegistryEntry=(hass,values)=>hass.callWS(Object.assign({type:"config/area_registry/create"},values)),updateAreaRegistryEntry=(hass,areaId,updates)=>hass.callWS(Object.assign({type:"config/area_registry/update",area_id:areaId},updates)),deleteAreaRegistryEntry=(hass,areaId)=>hass.callWS({type:"config/area_registry/delete",area_id:areaId})},379:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_ha_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(164),_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(178);class HaStateIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
      <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>
    `}static get properties(){return{stateObj:{type:Object}}}computeIcon(stateObj){return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__.a)(stateObj)}}customElements.define("ha-state-icon",HaStateIcon)},723:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(142),html_tag=__webpack_require__(3),polymer_element=__webpack_require__(20),debounce=__webpack_require__(19),utils_async=__webpack_require__(11),iron_flex_layout_classes=__webpack_require__(161),paper_tooltip=__webpack_require__(246),mwc_button=__webpack_require__(73),paper_card=__webpack_require__(160),iron_icon=__webpack_require__(97),paper_item=__webpack_require__(127),paper_item_body=__webpack_require__(165),ha_state_icon=__webpack_require__(379),hass_subpage=__webpack_require__(139),ha_style=__webpack_require__(101),ha_icon_next=__webpack_require__(221),ha_config_section=__webpack_require__(181),events_mixin=__webpack_require__(81),localize_mixin=__webpack_require__(107),compute_state_name=__webpack_require__(159),fire_event=__webpack_require__(44);const loadConfigFlowDialog=()=>Promise.all([__webpack_require__.e(6),__webpack_require__.e(19)]).then(__webpack_require__.bind(null,786)),showConfigFlowDialog=(element,dialogParams)=>{Object(fire_event.a)(element,"show-dialog",{dialogTag:"dialog-config-flow",dialogImport:loadConfigFlowDialog,dialogParams})};class ha_config_entries_dashboard_HaConfigManagerDashboard extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style include="iron-flex ha-style">
        mwc-button {
          top: 3px;
          margin-right: -0.57em;
        }
        paper-card:last-child {
          margin-top: 12px;
        }
        .config-entry-row {
          display: flex;
          padding: 0 16px;
        }
        ha-state-icon {
          cursor: pointer;
        }
        .configured a {
          color: var(--primary-text-color);
          text-decoration: none;
        }
      </style>

      <hass-subpage
        header="[[localize('ui.panel.config.integrations.caption')]]"
      >
        <template is="dom-if" if="[[progress.length]]">
          <ha-config-section>
            <span slot="header"
              >[[localize('ui.panel.config.integrations.discovered')]]</span
            >
            <paper-card>
              <template is="dom-repeat" items="[[progress]]">
                <div class="config-entry-row">
                  <paper-item-body>
                    [[_computeIntegrationTitle(localize, item.handler)]]
                  </paper-item-body>
                  <mwc-button on-click="_continueFlow"
                    >[[localize('ui.panel.config.integrations.configure')]]</mwc-button
                  >
                </div>
              </template>
            </paper-card>
          </ha-config-section>
        </template>

        <ha-config-section class="configured">
          <span slot="header"
            >[[localize('ui.panel.config.integrations.configured')]]</span
          >
          <paper-card>
            <template is="dom-if" if="[[!entries.length]]">
              <div class="config-entry-row">
                <paper-item-body two-line>
                  <div>[[localize('ui.panel.config.integrations.none')]]</div>
                </paper-item-body>
              </div>
            </template>
            <template is="dom-repeat" items="[[entries]]">
              <a href="/config/integrations/[[item.entry_id]]">
                <paper-item>
                  <paper-item-body two-line>
                    <div>
                      [[_computeIntegrationTitle(localize, item.domain)]]:
                      [[item.title]]
                    </div>
                    <div secondary>
                      <template
                        is="dom-repeat"
                        items="[[_computeConfigEntryEntities(hass, item, entities)]]"
                      >
                        <span>
                          <ha-state-icon
                            state-obj="[[item]]"
                            on-click="_handleMoreInfo"
                          ></ha-state-icon>
                          <paper-tooltip position="bottom"
                            >[[_computeStateName(item)]]</paper-tooltip
                          >
                        </span>
                      </template>
                    </div>
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-item>
              </a>
            </template>
          </paper-card>
        </ha-config-section>

        <ha-config-section>
          <span slot="header"
            >[[localize('ui.panel.config.integrations.new')]]</span
          >
          <paper-card>
            <template is="dom-repeat" items="[[handlers]]">
              <div class="config-entry-row">
                <paper-item-body>
                  [[_computeIntegrationTitle(localize, item)]]
                </paper-item-body>
                <mwc-button on-click="_createFlow"
                  >[[localize('ui.panel.config.integrations.configure')]]</mwc-button
                >
              </div>
            </template>
          </paper-card>
        </ha-config-section>
      </hass-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean,entries:Array,entities:Array,progress:Array,handlers:Array}}connectedCallback(){super.connectedCallback();loadConfigFlowDialog()}_createFlow(ev){showConfigFlowDialog(this,{hass:this.hass,newFlowForHandler:ev.model.item,dialogClosedCallback:()=>this.fire("hass-reload-entries")})}_continueFlow(ev){showConfigFlowDialog(this,{hass:this.hass,continueFlowId:ev.model.item.flow_id,dialogClosedCallback:()=>this.fire("hass-reload-entries")})}_computeIntegrationTitle(localize,integration){return localize(`component.${integration}.config.title`)}_computeConfigEntryEntities(hass,configEntry,entities){if(!entities){return[]}const states=[];entities.forEach(entity=>{if(entity.config_entry_id===configEntry.entry_id&&entity.entity_id in hass.states){states.push(hass.states[entity.entity_id])}});return states}_computeStateName(stateObj){return Object(compute_state_name.a)(stateObj)}_handleMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.item.entity_id})}}customElements.define("ha-config-entries-dashboard",ha_config_entries_dashboard_HaConfigManagerDashboard);var state_badge=__webpack_require__(170),compare=__webpack_require__(237),paper_icon_item=__webpack_require__(169),paper_dropdown_menu=__webpack_require__(130),paper_listbox=__webpack_require__(129);const fetchDeviceRegistry=hass=>hass.callWS({type:"config/device_registry/list"}),updateDeviceRegistryEntry=(hass,deviceId,updates)=>hass.callWS(Object.assign({type:"config/device_registry/update",device_id:deviceId},updates));function computeEntityName(hass,entity){if(entity.name)return entity.name;const state=hass.states[entity.entity_id];return state?Object(compute_state_name.a)(state):null}class ha_device_card_HaDeviceCard extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style>
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow: auto;
        }
        paper-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 0;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .model,
        .device .manuf {
          color: var(--secondary-text-color);
        }
        .extra-info {
          margin-top: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .manuf,
        .entity-id {
          color: var(--secondary-text-color);
        }
      </style>
      <paper-card heading="[[device.name]]">
        <div class="card-content">
          <!--
            <h1>[[configEntry.title]] ([[_computeIntegrationTitle(localize, configEntry.domain)]])</h1>
          -->
          <div class="info">
            <div class="model">[[device.model]]</div>
            <div class="manuf">
              [[localize('ui.panel.config.integrations.config_entry.manuf',
              'manufacturer', device.manufacturer)]]
            </div>
            <div class="area">
              <paper-dropdown-menu
                selected-item-label="{{selectedArea}}"
                label="Area"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[_computeSelectedArea(areas, device)]]"
                >
                  <paper-item>
                    [[localize('ui.panel.config.integrations.config_entry.no_area')]]
                  </paper-item>
                  <template is="dom-repeat" items="[[areas]]">
                    <paper-item area="[[item]]">[[item.name]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </div>
          <template is="dom-if" if="[[device.hub_device_id]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.hub')]]
              <span class="hub"
                >[[_computeDeviceName(devices, device.hub_device_id)]]</span
              >
            </div>
          </template>
          <template is="dom-if" if="[[device.sw_version]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.firmware',
              'version', device.sw_version)]]
            </div>
          </template>
        </div>

        <div class="device-entities">
          <template
            is="dom-repeat"
            items="[[_computeDeviceEntities(hass, device, entities)]]"
            as="entity"
          >
            <paper-icon-item on-click="_openMoreInfo">
              <state-badge
                state-obj="[[_computeStateObj(entity, hass)]]"
                slot="item-icon"
              ></state-badge>
              <paper-item-body>
                <div class="name">[[_computeEntityName(entity, hass)]]</div>
                <div class="secondary entity-id">[[entity.entity_id]]</div>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </div>
      </paper-card>
    `}static get properties(){return{device:Object,devices:Array,areas:Array,entities:Array,hass:Object,narrow:{type:Boolean,reflectToAttribute:!0},_childDevices:{type:Array,computed:"_computeChildDevices(device, devices)"},selectedArea:{type:String,observer:"_selectedAreaChanged"}}}_computeSelectedArea(areas,device){if(!areas||!device||!device.area_id){return 0}return areas.findIndex(area=>area.area_id===device.area_id)+1}async _selectedAreaChanged(option){if(""===option||!this.device||!this.areas){return}const area="No Area"===option?void 0:this.areas.find(ar=>ar.name===option);if(!area&&!this.device.area_id||area&&area.area_id===this.device.area_id){return}await updateDeviceRegistryEntry(this.hass,this.device.id,{area_id:area?area.area_id:null})}_computeChildDevices(device,devices){return devices.filter(dev=>dev.hub_device_id===device.id).sort((dev1,dev2)=>Object(compare.a)(dev1.name,dev2.name))}_computeDeviceEntities(hass,device,entities){return entities.filter(entity=>entity.device_id===device.id).sort((ent1,ent2)=>Object(compare.a)(computeEntityName(hass,ent1)||`zzz${ent1.entity_id}`,computeEntityName(hass,ent2)||`zzz${ent2.entity_id}`))}_computeStateObj(entity,hass){return hass.states[entity.entity_id]}_computeEntityName(entity,hass){return computeEntityName(hass,entity)||`(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`}_computeDeviceName(devices,deviceId){const device=devices.find(dev=>dev.id===deviceId);return device?device.name:`(${this.localize("ui.panel.config.integrations.config_entry.device_unavailable")})`}_openMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.entity.entity_id})}}customElements.define("ha-device-card",ha_device_card_HaDeviceCard);var entity_registry=__webpack_require__(305);class ha_ce_entities_card_HaCeEntitiesCard extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style>
        paper-card {
          flex: 1 0 100%;
          padding-bottom: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      </style>
      <paper-card heading="[[heading]]">
        <template is="dom-repeat" items="[[entities]]" as="entity">
          <paper-icon-item on-click="_openMoreInfo">
            <state-badge
              state-obj="[[_computeStateObj(entity, hass)]]"
              slot="item-icon"
            ></state-badge>
            <paper-item-body>
              <div class="name">[[_computeEntityName(entity, hass)]]</div>
              <div class="secondary entity-id">[[entity.entity_id]]</div>
            </paper-item-body>
          </paper-icon-item>
        </template>
      </paper-card>
    `}static get properties(){return{heading:String,entities:Array,hass:Object}}_computeStateObj(entity,hass){return hass.states[entity.entity_id]}_computeEntityName(entity,hass){return Object(entity_registry.a)(hass,entity)||`(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`}_openMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.entity.entity_id})}}customElements.define("ha-ce-entities-card",ha_ce_entities_card_HaCeEntitiesCard);var navigate_mixin=__webpack_require__(202);class ha_config_entry_page_HaConfigEntryPage extends Object(navigate_mixin.a)(Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
      <style>
        .content {
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: center;
        }
        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 500px;
          padding: 8px;
        }
      </style>
      <hass-subpage header="[[configEntry.title]]">
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:delete"
          on-click="_removeEntry"
        ></paper-icon-button>
        <div class="content">
          <template
            is="dom-if"
            if="[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]"
          >
            <p>
              [[localize('ui.panel.config.integrations.config_entry.no_devices')]]
            </p>
          </template>
          <template is="dom-repeat" items="[[_configEntryDevices]]" as="device">
            <ha-device-card
              class="card"
              hass="[[hass]]"
              areas="[[areas]]"
              devices="[[devices]]"
              device="[[device]]"
              entities="[[entities]]"
              narrow="[[narrow]]"
            ></ha-device-card>
          </template>
          <template is="dom-if" if="[[_noDeviceEntities.length]]">
            <ha-ce-entities-card
              class="card"
              heading="[[localize('ui.panel.config.integrations.config_entry.no_device')]]"
              entities="[[_noDeviceEntities]]"
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-ce-entities-card>
          </template>
        </div>
      </hass-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean,narrow:Boolean,configEntry:{type:Object,value:null},_configEntryDevices:{type:Array,computed:"_computeConfigEntryDevices(configEntry, devices)"},_noDeviceEntities:{type:Array,computed:"_computeNoDeviceEntities(configEntry, entities)"},areas:Array,devices:Array,entries:Array,entities:Array}}_computeConfigEntryDevices(configEntry,devices){if(!devices)return[];return devices.filter(device=>device.config_entries.includes(configEntry.entry_id)).sort((dev1,dev2)=>!!dev1.hub_device_id-!!dev2.hub_device_id||Object(compare.a)(dev1.name,dev2.name))}_computeNoDeviceEntities(configEntry,entities){if(!entities)return[];return entities.filter(ent=>!ent.device_id&&ent.config_entry_id===configEntry.entry_id)}_computeIsEmpty(configEntryDevices,noDeviceEntities){return 0===configEntryDevices.length&&0===noDeviceEntities.length}_removeEntry(){if(!confirm(this.localize("ui.panel.config.integrations.config_entry.delete_confirm")))return;const entryId=this.configEntry.entry_id;this.hass.callApi("delete",`config/config_entries/entry/${entryId}`).then(result=>{this.fire("hass-reload-entries");if(result.require_restart){alert(this.localize("ui.panel.config.integrations.config_entry.restart_confirm"))}this.navigate("/config/integrations/dashboard",!0)})}}customElements.define("ha-config-entry-page",ha_config_entry_page_HaConfigEntryPage);var area_registry=__webpack_require__(377);class ha_config_entries_HaConfigEntries extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <app-route
        route="[[route]]"
        pattern="/integrations/:page"
        data="{{_routeData}}"
        tail="{{_routeTail}}"
      ></app-route>

      <template is="dom-if" if="[[_configEntry]]">
        <ha-config-entry-page
          hass="[[hass]]"
          config-entry="[[_configEntry]]"
          areas="[[_areas]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          devices="[[_devices]]"
          narrow="[[narrow]]"
        ></ha-config-entry-page>
      </template>
      <template is="dom-if" if="[[!_configEntry]]">
        <ha-config-entries-dashboard
          hass="[[hass]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          handlers="[[_handlers]]"
          progress="[[_progress]]"
        ></ha-config-entries-dashboard>
      </template>
    `}static get properties(){return{hass:Object,isWide:Boolean,narrow:Boolean,route:Object,_configEntry:{type:Object,computed:"_computeConfigEntry(_routeData, _entries)"},_entries:Array,_entities:Array,_devices:Array,_areas:Array,_progress:Array,_handlers:Array,_routeData:Object,_routeTail:Object}}ready(){super.ready();this._loadData();this.addEventListener("hass-reload-entries",()=>this._loadData())}connectedCallback(){super.connectedCallback();this.hass.connection.subscribeEvents(()=>{this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(500),()=>this._loadData())},"config_entry_discovered").then(unsub=>{this._unsubEvents=unsub})}disconnectedCallback(){super.disconnectedCallback();if(this._unsubEvents)this._unsubEvents()}_loadData(){this.hass.callApi("get","config/config_entries/entry").then(entries=>{this._entries=entries.sort((conf1,conf2)=>Object(compare.a)(conf1.title,conf2.title))});this.hass.callApi("get","config/config_entries/flow").then(progress=>{this._progress=progress});this.hass.callApi("get","config/config_entries/flow_handlers").then(handlers=>{this._handlers=handlers});this.hass.callWS({type:"config/entity_registry/list"}).then(entities=>{this._entities=entities});this.hass.callWS({type:"config/device_registry/list"}).then(devices=>{this._devices=devices});Object(area_registry.c)(this.hass).then(areas=>{this._areas=areas.sort((a,b)=>Object(compare.a)(a.name,b.name))})}_computeConfigEntry(routeData,entries){return!!entries&&!!routeData&&entries.find(ent=>ent.entry_id===routeData.page)}}customElements.define("ha-config-entries",ha_config_entries_HaConfigEntries)}}]);
//# sourceMappingURL=f7739ca2e7e101ee0076.chunk.js.map