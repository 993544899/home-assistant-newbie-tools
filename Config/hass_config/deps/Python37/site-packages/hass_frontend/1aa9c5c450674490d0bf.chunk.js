(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{227:function(module,__webpack_exports__,__webpack_require__){"use strict";var polymer_legacy=__webpack_require__(2),iron_flex_layout=__webpack_require__(40),iron_icon=__webpack_require__(97),paper_material_styles=__webpack_require__(168),empty=__webpack_require__(60),default_theme=__webpack_require__(41),iron_button_state=__webpack_require__(50),iron_control_state=__webpack_require__(32),paper_ripple_behavior=__webpack_require__(61);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},_spaceKeyDownHandler:function(event){iron_button_state.b._spaceKeyDownHandler.call(this,event);if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},_spaceKeyUpHandler:function(event){iron_button_state.b._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}},PaperButtonBehavior=[iron_button_state.a,iron_control_state.a,paper_ripple_behavior.a,PaperButtonBehaviorImpl];var polymer_fn=__webpack_require__(4),html_tag=__webpack_require__(3);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html_tag.a`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
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

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;template.setAttribute("strip-whitespace","");Object(polymer_fn.a)({_template:template,is:"paper-fab",behaviors:[PaperButtonBehavior],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(icon,src){return 0<icon.length||0<src.length}})},781:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var paper_fab=__webpack_require__(227),lit_element=__webpack_require__(5),mwc_button=__webpack_require__(73),paper_menu_button=__webpack_require__(133),paper_icon_button=__webpack_require__(96),paper_listbox=__webpack_require__(129),show_edit_card_dialog=__webpack_require__(394),config_util=__webpack_require__(271);async function confDeleteCard(lovelace,path){if(!confirm("Are you sure you want to delete this card?")){return}try{await lovelace.saveConfig(Object(config_util.c)(lovelace.config,path))}catch(err){alert(`Deleting failed: ${err.message}`)}}var fire_event=__webpack_require__(44);let registeredDialog=!1;const registerEditCardDialog=element=>Object(fire_event.a)(element,"register-dialog",{dialogShowEvent:"show-move-card-view",dialogTag:"hui-dialog-move-card-view",dialogImport:()=>__webpack_require__.e(33).then(__webpack_require__.bind(null,776))}),showMoveCardViewDialog=(element,moveCardViewDialogParams)=>{if(!registeredDialog){registeredDialog=!0;registerEditCardDialog(element)}Object(fire_event.a)(element,"show-move-card-view",moveCardViewDialogParams)};class hui_card_options_HuiCardOptions extends lit_element.a{constructor(...args){super(...args);this.cardConfig=void 0;this.hass=void 0;this.lovelace=void 0;this.path=void 0}static get properties(){return{hass:{},lovelace:{},path:{}}}render(){return lit_element.e`
      <style>
        div.options {
          border-top: 1px solid #e8e8e8;
          padding: 5px 8px;
          background: var(--paper-card-background-color, white);
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
            rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
          display: flex;
        }

        div.options .primary-actions {
          flex: 1;
          margin: auto;
        }

        div.options .secondary-actions {
          flex: 4;
          text-align: right;
        }

        paper-icon-button {
          color: var(--primary-text-color);
        }

        paper-icon-button.move-arrow[disabled] {
          color: var(--disabled-text-color);
        }

        paper-menu-button {
          color: var(--secondary-text-color);
          padding: 0;
        }

        paper-item.header {
          color: var(--primary-text-color);
          text-transform: uppercase;
          font-weight: 500;
          font-size: 14px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>
      <slot></slot>
      <div class="options">
        <div class="primary-actions">
          <mwc-button @click="${this._editCard}"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
          >
        </div>
        <div class="secondary-actions">
          <paper-icon-button
            title="Move card down"
            class="move-arrow"
            icon="hass:arrow-down"
            @click="${this._cardDown}"
            ?disabled="${this.lovelace.config.views[this.path[0]].cards.length===this.path[1]+1}"
          ></paper-icon-button>
          <paper-icon-button
            title="Move card up"
            class="move-arrow"
            icon="hass:arrow-up"
            @click="${this._cardUp}"
            ?disabled="${0===this.path[1]}"
          ></paper-icon-button>
          <paper-menu-button
            horizontal-align="right"
            vertical-align="bottom"
            vertical-offset="40"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item @click="${this._moveCard}"
                >${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</paper-item
              >
              <paper-item @click="${this._deleteCard}"
                >${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</paper-item
              >
            </paper-listbox>
          </paper-menu-button>
        </div>
      </div>
    `}_editCard(){Object(show_edit_card_dialog.a)(this,{lovelace:this.lovelace,path:this.path})}_cardUp(){const lovelace=this.lovelace,path=this.path;lovelace.saveConfig(Object(config_util.h)(lovelace.config,path,[path[0],path[1]-1]))}_cardDown(){const lovelace=this.lovelace,path=this.path;lovelace.saveConfig(Object(config_util.h)(lovelace.config,path,[path[0],path[1]+1]))}_moveCard(){showMoveCardViewDialog(this,{path:this.path,lovelace:this.lovelace})}_deleteCard(){confDeleteCard(this.lovelace,this.path)}}customElements.define("hui-card-options",hui_card_options_HuiCardOptions)}}]);
//# sourceMappingURL=1aa9c5c450674490d0bf.chunk.js.map