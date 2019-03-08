(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";var polymer_legacy=__webpack_require__(2),iron_form_element_behavior=__webpack_require__(53),iron_validatable_behavior=__webpack_require__(54);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronCheckedElementBehaviorImpl={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(_value){return this.disabled||!this.required||this.checked},_requiredChanged:function(){if(this.required){this.setAttribute("aria-required","true")}else{this.removeAttribute("aria-required")}},_checkedChanged:function(){this.active=this.checked;this.fire("iron-change")},_valueChanged:function(){if(this.value===void 0||null===this.value){this.value="on"}}},IronCheckedElementBehavior=[iron_form_element_behavior.a,iron_validatable_behavior.a,IronCheckedElementBehaviorImpl];var paper_inky_focus_behavior=__webpack_require__(52),paper_ripple_behavior=__webpack_require__(61);__webpack_require__.d(__webpack_exports__,"a",function(){return PaperCheckedElementBehavior});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperCheckedElementBehaviorImpl={_checkedChanged:function(){IronCheckedElementBehaviorImpl._checkedChanged.call(this);if(this.hasRipple()){if(this.checked){this._ripple.setAttribute("checked","")}else{this._ripple.removeAttribute("checked")}}},_buttonStateChanged:function(){paper_ripple_behavior.a._buttonStateChanged.call(this);if(this.disabled){return}if(this.isAttached){this.checked=this.active}}},PaperCheckedElementBehavior=[paper_inky_focus_behavior.a,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl]},143:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(141);const PaperSliderClass=customElements.get("paper-slider");class HaPaperSlider extends PaperSliderClass{static get template(){const tpl=document.createElement("template");tpl.innerHTML=PaperSliderClass.template.innerHTML;const styleEl=document.createElement("style");styleEl.innerHTML=`
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }
    `;tpl.content.appendChild(styleEl);return tpl}}customElements.define("ha-paper-slider",HaPaperSlider)},145:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(138),_polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(130),_polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96),_polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),_polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(127),_polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(129),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(143),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(81);class HaForm extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__.a`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-label="[[computeLabel]]"
            compute-error="[[computeError]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          ></paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `}static get properties(){return{data:{type:Object,notify:!0},schema:Object,error:Object,computeLabel:{type:Function,value:()=>schema=>schema&&schema.name},computeError:{type:Function,value:()=>(error,schema)=>error}}}_isArray(val){return Array.isArray(val)}_isRange(schema){return"valueMin"in schema&&"valueMax"in schema}_equals(a,b){return a===b}_includes(a,b){return 0<=a.indexOf(b)}_getValue(obj,item){if(obj){return obj[item.name]}return null}_valueChanged(ev){let value=ev.detail.value;if("integer"===ev.model.item.type){value=+ev.detail.value}this.set(["data",ev.model.item.name],value)}_passwordFieldType(unmaskedPassword){return unmaskedPassword?"text":"password"}_passwordFieldIcon(unmaskedPassword){return unmaskedPassword?"hass:eye-off":"hass:eye"}_optionValue(item){return Array.isArray(item)?item[0]:item}_optionLabel(item){return Array.isArray(item)?item[1]:item}}customElements.define("ha-form",HaForm)},173:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__),_paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(137),_paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(114);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>
  </div>
`;template.setAttribute("strip-whitespace","");Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__.a)({_template:template,is:"paper-spinner",behaviors:[_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__.a]})},175:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return PaperDialogBehaviorImpl});__webpack_require__.d(__webpack_exports__,"a",function(){return PaperDialogBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.__readied=!0},_modalChanged:function(modal,readied){if(!readied){return}if(modal){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.noCancelOnOutsideClick=!0;this.noCancelOnEscKey=!0;this.withBackdrop=!0}else{this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick;this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey;this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop}},_updateClosingReasonConfirmed:function(confirmed){this.closingReason=this.closingReason||{};this.closingReason.confirmed=confirmed},_onDialogClick:function(event){for(var path=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(event).path,i=0,l=path.indexOf(this),target;i<l;i++){target=path[i];if(target.hasAttribute&&(target.hasAttribute("dialog-dismiss")||target.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(target.hasAttribute("dialog-confirm"));this.close();event.stopPropagation();break}}}},PaperDialogBehavior=[_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__.a,PaperDialogBehaviorImpl]},183:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),_polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(98);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content)},185:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_dialog_behavior_paper_dialog_shared_styles_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(183),_polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(110),_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(175),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.a,_polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}})},192:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(175),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);/**
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
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget();this.classList.add("no-padding")},attached:function(){this._ensureTarget();requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",0<this.scrollTarget.scrollTop);this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight);this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement;if(this.dialogElement&&this.dialogElement.behaviors&&0<=this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.b)){this.dialogElement.sizingTarget=this.scrollTarget;this.scrollTarget.classList.remove("fit")}else if(this.dialogElement){this.scrollTarget.classList.add("fit")}}})},225:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(81);let loaded=null;const svgWhiteList=["svg","path"];class HaMarkdown extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.a){static get properties(){return{content:{type:String,observer:"_render"},allowSvg:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback();this._scriptLoaded=0;this._renderScheduled=!1;this._resize=()=>this.fire("iron-resize");if(!loaded){loaded=Promise.all([__webpack_require__.e(118),__webpack_require__.e(56)]).then(__webpack_require__.bind(null,279))}loaded.then(({marked,filterXSS})=>{this.marked=marked;this.filterXSS=filterXSS;this._scriptLoaded=1},()=>{this._scriptLoaded=2}).then(()=>this._render())}_render(){if(0===this._scriptLoaded||this._renderScheduled)return;this._renderScheduled=!0;Promise.resolve().then(()=>{this._renderScheduled=!1;if(1===this._scriptLoaded){this.innerHTML=this.filterXSS(this.marked(this.content,{gfm:!0,tables:!0,breaks:!0}),{onIgnoreTag:this.allowSvg?(tag,html)=>0<=svgWhiteList.indexOf(tag)?html:null:null});this._resize();const walker=document.createTreeWalker(this,1,null,!1);while(walker.nextNode()){const node=walker.currentNode;if("A"===node.tagName&&node.host!==document.location.host){node.target="_blank"}else if("IMG"===node.tagName){node.addEventListener("load",this._resize)}}}else if(2===this._scriptLoaded){this.innerText=this.content}})}}customElements.define("ha-markdown",HaMarkdown)},786:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),mwc_button=__webpack_require__(73),paper_dialog_scrollable=__webpack_require__(192),paper_tooltip=__webpack_require__(246),paper_spinner=__webpack_require__(173),paper_dialog=__webpack_require__(185),ha_form=__webpack_require__(145),ha_markdown=__webpack_require__(225),ha_style=__webpack_require__(101),resources_styles=__webpack_require__(56);const createConfigFlow=(hass,handler)=>hass.callApi("POST","config/config_entries/flow",{handler}),fetchConfigFlow=(hass,flowId)=>hass.callApi("GET",`config/config_entries/flow/${flowId}`),handleConfigFlowStep=(hass,flowId,data)=>hass.callApi("POST",`config/config_entries/flow/${flowId}`,data),deleteConfigFlow=(hass,flowId)=>hass.callApi("DELETE",`config/config_entries/flow/${flowId}`),applyPolymerEvent=(ev,curValue)=>{const{path,value}=ev.detail;if(!path){return value}const propName=path.split(".")[1];return Object.assign({},curValue,{[propName]:value})};function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins){for(var i=0;i<mixins.length;i++){api=mixins[i](api)}}var r=factory(function initialize(O){api.initializeInstanceElements(O,decorated.elements)},superClass),decorated=api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);api.initializeClassElements(r.F,decorated.elements);return api.runClassFinishers(r.F,decorated.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&"own"===element.placement){this.defineClassElement(O,element)}},this)},this)},initializeClassElements:function(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}},this)},this)},defineClassElement:function(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};elements.forEach(function(element){this.addElementPlacement(element,placements)},this);elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers)},this);if(!decorators){return{elements:newElements,finishers:finishers}}var result=this.decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result},addElementPlacement:function(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key)){throw new TypeError("Duplicated element ("+element.key+")")}keys.push(element.key)},decorateElement:function(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1,keys;0<=i;i--){keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;this.addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher)}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){this.addElementPlacement(newExtras[j],placements)}extras.push.apply(extras,newExtras)}}return{element:element,finishers:finishers,extras:extras}},decorateConstructor:function(elements,decorators){for(var finishers=[],i=decorators.length-1;0<=i;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==void 0){finishers.push(elementsAndFinisher.finisher)}if(elementsAndFinisher.elements!==void 0){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")")}}}}}return{elements:elements,finishers:finishers}},fromElementDescriptor:function(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);if("field"===element.kind)obj.initializer=element.initializer;return obj},toElementDescriptors:function(elementObjects){if(elementObjects===void 0)return;return _toArray(elementObjects).map(function(elementObject){var element=this.toElementDescriptor(elementObject);this.disallowProperty(elementObject,"finisher","An element descriptor");this.disallowProperty(elementObject,"extras","An element descriptor");return element},this)},toElementDescriptor:function(elementObject){var kind=elementObject.kind+"";if("method"!==kind&&"field"!==kind){throw new TypeError("An element descriptor's .kind property must be either \"method\" or"+" \"field\", but a decorator created an element descriptor with"+" .kind \""+kind+"\"")}var key=_toPropertyKey(elementObject.key),placement=elementObject.placement+"";if("static"!==placement&&"prototype"!==placement&&"own"!==placement){throw new TypeError("An element descriptor's .placement property must be one of \"static\","+" \"prototype\" or \"own\", but a decorator created an element descriptor"+" with .placement \""+placement+"\"")}var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:Object.assign({},descriptor)};if("field"!==kind){this.disallowProperty(elementObject,"initializer","A method descriptor")}else{this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor");this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer}return element},toElementFinisherExtras:function(elementObject){var element=this.toElementDescriptor(elementObject),finisher=_optionalCallableProperty(elementObject,"finisher"),extras=this.toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras}},fromClassDescriptor:function(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)},desc={value:"Descriptor",configurable:!0};Object.defineProperty(obj,Symbol.toStringTag,desc);return obj},toClassDescriptor:function(obj){var kind=obj.kind+"";if("class"!==kind){throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator"+" created a class descriptor with .kind \""+kind+"\"")}this.disallowProperty(obj,"key","A class descriptor");this.disallowProperty(obj,"placement","A class descriptor");this.disallowProperty(obj,"descriptor","A class descriptor");this.disallowProperty(obj,"initializer","A class descriptor");this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher"),elements=this.toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher}},runClassFinishers:function(constructor,finishers){for(var i=0,newConstructor;i<finishers.length;i++){newConstructor=(0,finishers[i])(constructor);if(newConstructor!==void 0){if("function"!==typeof newConstructor){throw new TypeError("Finishers must return a constructor.")}constructor=newConstructor}}return constructor},disallowProperty:function(obj,name,objectType){if(obj[name]!==void 0){throw new TypeError(objectType+" can't have a ."+name+" property.")}}};return api}function _createElementDescriptor(def){var key=_toPropertyKey(def.key),descriptor;if("method"===def.kind){descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}}else if("get"===def.kind){descriptor={get:def.value,configurable:!0,enumerable:!1}}else if("set"===def.kind){descriptor={set:def.value,configurable:!0,enumerable:!1}}else if("field"===def.kind){descriptor={configurable:!0,writable:!0,enumerable:!0}}var element={kind:"field"===def.kind?"field":"method",key:key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if("field"===def.kind)element.initializer=def.value;return element}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==void 0){other.descriptor.get=element.descriptor.get}else{other.descriptor.set=element.descriptor.set}}function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var element=elements[i],other;if("method"===element.kind&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.")}other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").")}other.decorators=element.decorators}_coalesceGetterSetter(element,other)}}else{newElements.push(element)}}return newElements}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return desc!==void 0&&!(desc.value===void 0&&desc.writable===void 0)}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==void 0&&"function"!==typeof value){throw new TypeError("Expected '"+name+"' to be a function")}return value}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"===typeof key?key:key+""}function _toPrimitive(input,hint){if("object"!==typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(prim!==void 0){var res=prim.call(input,hint||"default");if("object"!==typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _get(target,property,receiver){if("undefined"!==typeof Reflect&&Reflect.get){_get=Reflect.get}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver)}return desc.value}}return _get(target,property,receiver||target)}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(null===object)break}return object}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}let instance=0,dialog_config_flow_ConfigFlowDialog=_decorate([Object(lit_element.d)("dialog-config-flow")],function(_initialize,_LitElement){class ConfigFlowDialog extends _LitElement{constructor(...args){super(...args);_initialize(this)}}return{F:ConfigFlowDialog,d:[{kind:"field",decorators:[Object(lit_element.f)()],key:"_params",value:void 0},{kind:"field",decorators:[Object(lit_element.f)()],key:"_loading",value(){return!0}},{kind:"field",key:"_instance",value(){return instance}},{kind:"field",decorators:[Object(lit_element.f)()],key:"_step",value:void 0},{kind:"field",decorators:[Object(lit_element.f)()],key:"_stepData",value:void 0},{kind:"field",decorators:[Object(lit_element.f)()],key:"_errorMsg",value:void 0},{kind:"method",key:"showDialog",value:async function showDialog(params){this._params=params;this._loading=!0;this._instance=instance++;this._step=void 0;this._stepData={};this._errorMsg=void 0;const fetchStep=params.continueFlowId?fetchConfigFlow(params.hass,params.continueFlowId):params.newFlowForHandler?createConfigFlow(params.hass,params.newFlowForHandler):void 0;if(!fetchStep){throw new Error(`Pass in either continueFlowId or newFlorForHandler`)}const curInstance=this._instance;await this.updateComplete;const step=await fetchStep;if(curInstance!==this._instance){return}this._processStep(step);this._loading=!1;setTimeout(()=>this._dialog.center(),0)}},{kind:"method",key:"render",value:function render(){if(!this._params){return lit_element.e``}const localize=this._params.hass.localize,step=this._step;let headerContent,bodyContent,buttonContent,descriptionKey;if(!step){bodyContent=lit_element.e`
        <div class="init-spinner">
          <paper-spinner active></paper-spinner>
        </div>
      `}else if("abort"===step.type){descriptionKey=`component.${step.handler}.config.abort.${step.reason}`;headerContent="Aborted";bodyContent=lit_element.e``;buttonContent=lit_element.e`
        <mwc-button @click="${this._flowDone}">Close</mwc-button>
      `}else if("create_entry"===step.type){descriptionKey=`component.${step.handler}.config.create_entry.${step.description||"default"}`;headerContent="Success!";bodyContent=lit_element.e`
        <p>Created config for ${step.title}</p>
      `;buttonContent=lit_element.e`
        <mwc-button @click="${this._flowDone}">Close</mwc-button>
      `}else{descriptionKey=`component.${step.handler}.config.step.${step.step_id}.description`;headerContent=localize(`component.${step.handler}.config.step.${step.step_id}.title`);bodyContent=lit_element.e`
        <ha-form
          .data=${this._stepData}
          @data-changed=${this._stepDataChanged}
          .schema=${step.data_schema}
          .error=${step.errors}
          .computeLabel=${this._labelCallback}
          .computeError=${this._errorCallback}
        ></ha-form>
      `;const allRequiredInfoFilledIn=this._stepData&&step.data_schema.every(field=>field.optional||!["",void 0].includes(this._stepData[field.name]));buttonContent=this._loading?lit_element.e`
            <div class="submit-spinner">
              <paper-spinner active></paper-spinner>
            </div>
          `:lit_element.e`
            <div>
              <mwc-button
                @click=${this._submitStep}
                .disabled=${!allRequiredInfoFilledIn}
              >
                Submit
              </mwc-button>

              ${!allRequiredInfoFilledIn?lit_element.e`
                    <paper-tooltip position="left">
                      Not all required fields are filled in.
                    </paper-tooltip>
                  `:lit_element.e``}
            </div>
          `}let description;if(step&&descriptionKey){const args=[descriptionKey],placeholders=step.description_placeholders||{};Object.keys(placeholders).forEach(key=>{args.push(key);args.push(placeholders[key])});description=localize(...args)}return lit_element.e`
      <paper-dialog
        with-backdrop
        .opened=${!0}
        @opened-changed=${this._openedChanged}
      >
        <h2>
          ${headerContent}
        </h2>
        <paper-dialog-scrollable>
          ${this._errorMsg?lit_element.e`
                <div class="error">${this._errorMsg}</div>
              `:""}
          ${description?lit_element.e`
                <ha-markdown .content=${description} allow-svg></ha-markdown>
              `:""}
          ${bodyContent}
        </paper-dialog-scrollable>
        <div class="buttons">
          ${buttonContent}
        </div>
      </paper-dialog>
    `}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(ConfigFlowDialog.prototype),"firstUpdated",this).call(this,changedProps);this.addEventListener("keypress",ev=>{if(13===ev.keyCode){this._submitStep()}})}},{kind:"get",key:"_dialog",value:function _dialog(){return this.shadowRoot.querySelector("paper-dialog")}},{kind:"method",key:"_submitStep",value:async function _submitStep(){this._loading=!0;this._errorMsg=void 0;const curInstance=this._instance,stepData=this._stepData||{},toSendData={};Object.keys(stepData).forEach(key=>{const value=stepData[key],isEmpty=[void 0,""].includes(value);if(!isEmpty){toSendData[key]=value}});try{const step=await handleConfigFlowStep(this._params.hass,this._step.flow_id,toSendData);if(curInstance!==this._instance){return}this._processStep(step)}catch(err){this._errorMsg=err&&err.body&&err.body.message||"Unknown error occurred"}finally{this._loading=!1}}},{kind:"method",key:"_processStep",value:function _processStep(step){this._step=step;if("form"===step.type){if(!step.errors){step.errors={}}if(0===Object.keys(step.errors).length){const data={};step.data_schema.forEach(field=>{if("default"in field){data[field.name]=field.default}});this._stepData=data}}}},{kind:"method",key:"_flowDone",value:function _flowDone(){if(!this._params){return}const flowFinished=!!(this._step&&["success","abort"].includes(this._step.type));if(this._step&&!flowFinished&&this._params.newFlowForHandler){deleteConfigFlow(this._params.hass,this._step.flow_id)}this._params.dialogClosedCallback({flowFinished});this._errorMsg=void 0;this._step=void 0;this._stepData={};this._params=void 0}},{kind:"method",key:"_openedChanged",value:function _openedChanged(ev){if(this._step&&!ev.detail.value){this._flowDone()}}},{kind:"method",key:"_stepDataChanged",value:function _stepDataChanged(ev){this._stepData=applyPolymerEvent(ev,this._stepData)}},{kind:"field",key:"_labelCallback",value(){return schema=>{const step=this._step;return this._params.hass.localize(`component.${step.handler}.config.step.${step.step_id}.data.${schema.name}`)}}},{kind:"field",key:"_errorCallback",value(){return error=>this._params.hass.localize(`component.${this._step.handler}.config.error.${error}`)}},{kind:"get",static:!0,key:"styles",value:function styles(){return[resources_styles.b,lit_element.c`
        .error {
          color: red;
        }
        paper-dialog {
          max-width: 500px;
        }
        ha-markdown {
          word-break: break-word;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img:first-child:last-child {
          display: block;
          margin: 0 auto;
        }
        .init-spinner {
          padding: 10px 100px 34px;
          text-align: center;
        }
        .submit-spinner {
          margin-right: 16px;
        }
      `]}}]}},lit_element.a)}}]);
//# sourceMappingURL=140ffbccdceb970458b1.chunk.js.map