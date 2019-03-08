(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{383:function(module,__webpack_exports__,__webpack_require__){"use strict";var codemirror__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(384),codemirror__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__),codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(447),codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(448),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__),_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(44),_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(83);class HuiYamlEditor extends HTMLElement{constructor(){super();this._hass=void 0;this.codemirror=void 0;this._value=void 0;codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.commands.save=cm=>{Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.a)(cm.getWrapperElement(),"yaml-save")};this._value="";const shadowRoot=this.attachShadow({mode:"open"});shadowRoot.innerHTML=`
            <style>
              ${codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2___default.a}
              .CodeMirror {
                height: var(--code-mirror-height, auto);
                direction: var(--code-mirror-direction, ltr);
              }
              .CodeMirror-scroll {
                max-height: var(--code-mirror-max-height, --code-mirror-height);
              }
              .CodeMirror-gutters {
                border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
                background-color: var(--paper-dialog-background-color, var(--primary-background-color));
                transition: 0.2s ease border-right;
              }
              .CodeMirror-focused .CodeMirror-gutters {
                border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));;
              }
              .CodeMirror-linenumber {
                color: var(--paper-dialog-color, var(--primary-text-color));
              }
              .rtl .CodeMirror-vscrollbar {
                right: auto;
                left: 0px;
              }
              .rtl-gutter {
                width: 20px;
              }
            </style>`}set hass(hass){this._hass=hass;if(this._hass){this.setScrollBarDirection()}}set value(value){if(this.codemirror){if(value!==this.codemirror.getValue()){this.codemirror.setValue(value)}}this._value=value}get value(){return this.codemirror.getValue()}get hasComments(){return this.shadowRoot.querySelector("span.cm-comment")?!0:!1}connectedCallback(){if(!this.codemirror){this.codemirror=codemirror__WEBPACK_IMPORTED_MODULE_0___default()(this.shadowRoot,{value:this._value,lineNumbers:!0,mode:"yaml",tabSize:2,autofocus:!0,viewportMargin:Infinity,gutters:this._hass&&Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__.a)(this._hass)?["rtl-gutter","CodeMirror-linenumbers"]:[]});this.setScrollBarDirection();this.codemirror.on("changes",()=>this._onChange())}else{this.codemirror.refresh()}}_onChange(){Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.a)(this,"yaml-changed",{value:this.codemirror.getValue()})}setScrollBarDirection(){if(!this.codemirror){return}this.codemirror.getWrapperElement().classList.toggle("rtl",Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__.a)(this._hass))}}window.customElements.define("hui-yaml-editor",HuiYamlEditor)},724:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),class_map=__webpack_require__(63),js_yaml=__webpack_require__(444),js_yaml_default=__webpack_require__.n(js_yaml),styles=__webpack_require__(56),paper_spinner=__webpack_require__(173),paper_dialog=__webpack_require__(185),mwc_button=__webpack_require__(73),paper_dialog_scrollable=__webpack_require__(192),fire_event=__webpack_require__(44),hui_yaml_editor=__webpack_require__(383),paper_textarea=__webpack_require__(199),deep_clone_simple=__webpack_require__(315),create_card_element=__webpack_require__(338);const CUSTOM_TYPE_PREFIX="custom:";function getCardElementTag(type){return type.startsWith(CUSTOM_TYPE_PREFIX)?type.substr(CUSTOM_TYPE_PREFIX.length):`hui-${type}-card`}var hui_error_card=__webpack_require__(283),compute_rtl=__webpack_require__(83);class hui_card_preview_HuiCardPreview extends HTMLElement{constructor(...args){super(...args);this._hass=void 0;this._element=void 0}set hass(hass){if(!this._hass||this._hass.language!==hass.language){this.style.direction=Object(compute_rtl.a)(hass)?"rtl":"ltr"}this._hass=hass;if(this._element){this._element.hass=hass}}set error(error){const configValue=Object(hui_error_card.a)(`${error.type}: ${error.message}`,void 0);this._createCard(configValue)}set config(configValue){if(!configValue){return}if(!this._element){this._createCard(configValue);return}const tag=getCardElementTag(configValue.type);if(tag.toUpperCase()===this._element.tagName){try{this._element.setConfig(Object(deep_clone_simple.a)(configValue))}catch(err){this._createCard(Object(hui_error_card.a)(err.message,configValue))}}else{this._createCard(configValue)}}_createCard(configValue){if(this._element){this.removeChild(this._element)}this._element=Object(create_card_element.a)(configValue);if(this._hass){this._element.hass=this._hass}this.appendChild(this._element)}}customElements.define("hui-card-preview",hui_card_preview_HuiCardPreview);var config_util=__webpack_require__(271),render_status=__webpack_require__(395);class hui_edit_card_HuiEditCard extends lit_element.a{static get properties(){return{hass:{},cardConfig:{},viewIndex:{},_cardIndex:{},_configElement:{},_configValue:{},_configState:{},_errorMsg:{},_uiEditor:{},_saving:{},_loading:{}}}get _dialog(){return this.shadowRoot.querySelector("paper-dialog")}get _previewEl(){return this.shadowRoot.querySelector("hui-card-preview")}constructor(){super();this.hass=void 0;this.lovelace=void 0;this.path=void 0;this.cardConfig=void 0;this.closeDialog=void 0;this._configElement=void 0;this._uiEditor=void 0;this._configValue=void 0;this._configState=void 0;this._loading=void 0;this._saving=void 0;this._errorMsg=void 0;this._cardType=void 0;this._saving=!1}updated(changedProperties){super.updated(changedProperties);if(!changedProperties.has("cardConfig")){return}this._configValue={format:"yaml",value:void 0};this._configState="OK";this._uiEditor=!0;this._errorMsg=void 0;this._configElement=void 0;this._loading=!0;this._loadConfigElement(this.cardConfig)}render(){let content,preview;if(this._configElement!==void 0){content=lit_element.e`
        <div class="element-editor">
          ${this._uiEditor?this._configElement:lit_element.e`
                <hui-yaml-editor
                  .hass="${this.hass}"
                  .value="${this._configValue.value}"
                  @yaml-changed="${this._handleYamlChanged}"
                  @yaml-save="${this._save}"
                ></hui-yaml-editor>
              `}
        </div>
      `;preview=lit_element.e`
        <hui-card-preview .hass="${this.hass}"> </hui-card-preview>
      `}return lit_element.e`
      <paper-dialog
        with-backdrop
        opened
        modal
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_card.header")}
        </h2>
        <paper-spinner
          ?active="${this._loading}"
          alt="Loading"
          class="center margin-bot"
        ></paper-spinner>
        <paper-dialog-scrollable
          class="${Object(class_map.a)({hidden:this._loading})}"
        >
          ${this._errorMsg?lit_element.e`
                <div class="error">${this._errorMsg}</div>
              `:""}
          <div class="content">${content}${preview}</div>
        </paper-dialog-scrollable>
        ${!this._loading?lit_element.e`
              <div class="paper-dialog-buttons">
                <mwc-button
                  class="toggle-button"
                  ?hidden="${!this._configValue||!this._configValue.value}"
                  ?disabled="${null===this._configElement||"OK"!==this._configState}"
                  @click="${this._toggleEditor}"
                  >${this.hass.localize("ui.panel.lovelace.editor.edit_card.toggle_editor")}</mwc-button
                >
                <mwc-button @click="${this.closeDialog}"
                  >${this.hass.localize("ui.common.cancel")}</mwc-button
                >
                <mwc-button
                  ?hidden="${!this._configValue||!this._configValue.value}"
                  ?disabled="${this._saving||"OK"!==this._configState}"
                  @click="${this._save}"
                >
                  <paper-spinner
                    ?active="${this._saving}"
                    alt="Saving"
                  ></paper-spinner>
                  ${this.hass.localize("ui.common.save")}
                </mwc-button>
              </div>
            `:""}
      </paper-dialog>
    `}async _loadedDialog(){await this.updateComplete;this._loading=!1;this._resizeDialog();if(!this._uiEditor){Object(render_status.a)(()=>{this.yamlEditor.codemirror.refresh();this._resizeDialog();this.yamlEditor.codemirror.focus()})}}async _resizeDialog(){await this.updateComplete;Object(fire_event.a)(this._dialog,"iron-resize")}async _save(){if(!this._isConfigValid()){alert("Your config is not valid, please fix your config before saving.");return}if(!this._isConfigChanged()){this.closeDialog();return}this._saving=!0;const cardConf="yaml"===this._configValue.format?js_yaml_default.a.safeLoad(this._configValue.value):this._configValue.value;try{const lovelace=this.lovelace;await lovelace.saveConfig(this._creatingCard?Object(config_util.a)(lovelace.config,this.path,cardConf):Object(config_util.f)(lovelace.config,this.path,cardConf));this.closeDialog()}catch(err){alert(`Saving failed: ${err.message}`)}finally{this._saving=!1}}_handleYamlChanged(ev){this._configValue={format:"yaml",value:ev.detail.value};try{const config=js_yaml_default.a.safeLoad(this._configValue.value);this._updatePreview(config);this._configState="OK"}catch(err){this._configState="YAML_ERROR";this._setPreviewError({type:"YAML Error",message:err})}}_handleUIConfigChanged(value){this._configValue={format:"json",value};this._updatePreview(value)}async _updatePreview(config){await this.updateComplete;if(!this._previewEl){return}this._previewEl.config=config;if(this._loading){this._loadedDialog()}else{this._resizeDialog()}}_setPreviewError(error){if(!this._previewEl){return}this._previewEl.error=error;this._resizeDialog()}async _toggleEditor(){if(this._uiEditor&&"json"===this._configValue.format){this._configValue={format:"yaml",value:js_yaml_default.a.safeDump(this._configValue.value)};this._uiEditor=!this._uiEditor}else if(this._configElement&&"yaml"===this._configValue.format){const yamlConfig=this._configValue.value,cardConfig=js_yaml_default.a.safeLoad(yamlConfig);this._uiEditor=!this._uiEditor;if(cardConfig.type!==this._cardType){const succes=await this._loadConfigElement(cardConfig);if(!succes){this._loadedDialog()}this._cardType=cardConfig.type}else{this._configValue={format:"json",value:cardConfig};this._configElement.setConfig(cardConfig)}}this._resizeDialog()}_isConfigValid(){if(!this._configValue||!this._configValue.value){return!1}if("OK"===this._configState){return!0}else{return!1}}_isConfigChanged(){if(this._creatingCard){return!0}const configValue="yaml"===this._configValue.format?js_yaml_default.a.safeLoad(this._configValue.value):this._configValue.value;return JSON.stringify(configValue)!==JSON.stringify(this.cardConfig)}async _loadConfigElement(conf){if(!conf){return!1}this._errorMsg=void 0;this._loading=!0;this._configElement=void 0;const tag=getCardElementTag(conf.type),elClass=customElements.get(tag);let configElement;if(elClass&&elClass.getConfigElement){configElement=await elClass.getConfigElement()}else{this._configValue={format:"yaml",value:js_yaml_default.a.safeDump(conf)};this._updatePreview(conf);this._uiEditor=!1;this._configElement=null;return!1}try{configElement.setConfig(conf)}catch(err){this._errorMsg=lit_element.e`
        Your config is not supported by the UI editor:<br /><b>${err.message}</b
        ><br />Falling back to YAML editor.
      `;this._configValue={format:"yaml",value:js_yaml_default.a.safeDump(conf)};this._updatePreview(conf);this._uiEditor=!1;this._configElement=null;return!1}configElement.hass=this.hass;configElement.addEventListener("config-changed",ev=>this._handleUIConfigChanged(ev.detail.config));this._configValue={format:"json",value:conf};this._configElement=configElement;await this.updateComplete;this._updatePreview(conf);return!0}get _creatingCard(){return 1===this.path.length}_openedChanged(ev){if(!ev.detail.value){this.closeDialog()}}get yamlEditor(){return this.shadowRoot.querySelector("hui-yaml-editor")}static get styles(){return[styles.b,lit_element.c`
        :host {
          --code-mirror-max-height: calc(100vh - 176px);
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 660px) {
          paper-dialog {
            width: 650px;
          }
        }

        paper-dialog {
          max-width: 650px;
        }

        .center {
          margin-left: auto;
          margin-right: auto;
        }

        .content {
          display: flex;
          flex-direction: column;
          margin: 0 -10px;
        }
        .content hui-card-preview {
          margin-top: 16px;
          margin: 0 10px;
        }
        .content .element-editor {
          margin: 0 10px;
        }

        @media (min-width: 1200px) {
          paper-dialog {
            max-width: none;
            width: 1000px;
          }

          .content {
            flex-direction: row;
          }
          .content > * {
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 1;
            min-width: 0;
          }
          .content hui-card-preview {
            margin: 0 10px;
            max-width: 490px;
          }
        }

        .margin-bot {
          margin-bottom: 24px;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .hidden {
          display: none;
        }
        .element-editor {
          margin-bottom: 8px;
        }
        .error {
          color: #ef5350;
          border-bottom: 1px solid #ef5350;
        }
        hui-card-preview {
          padding-top: 8px;
          margin-bottom: 4px;
          display: block;
        }
        .toggle-button {
          margin-right: auto;
        }
      `]}}customElements.define("hui-edit-card",hui_edit_card_HuiEditCard);const cards=[{name:"Alarm panel",type:"alarm-panel"},{name:"Conditional",type:"conditional"},{name:"Entities",type:"entities"},{name:"Entity Button",type:"entity-button"},{name:"Entity Filter",type:"entity-filter"},{name:"Gauge",type:"gauge"},{name:"Glance",type:"glance"},{name:"History Graph",type:"history-graph"},{name:"Horizontal Stack",type:"horizontal-stack"},{name:"iFrame",type:"iframe"},{name:"Light",type:"light"},{name:"Map",type:"map"},{name:"Markdown",type:"markdown"},{name:"Media Control",type:"media-control"},{name:"Picture",type:"picture"},{name:"Picture Elements",type:"picture-elements"},{name:"Picture Entity",type:"picture-entity"},{name:"Picture Glance",type:"picture-glance"},{name:"Plant Status",type:"plant-status"},{name:"Sensor",type:"sensor"},{name:"Shopping List",type:"shopping-list"},{name:"Thermostat",type:"thermostat"},{name:"Vertical Stack",type:"vertical-stack"},{name:"Weather Forecast",type:"weather-forecast"}];class hui_card_picker_HuiCardPicker extends lit_element.a{constructor(...args){super(...args);this.hass=void 0;this.cardPicked=void 0}render(){return lit_element.e`
      <h3>
        ${this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card")}
      </h3>
      <div class="cards-container">
        ${cards.map(card=>{return lit_element.e`
            <mwc-button @click="${this._cardPicked}" .type="${card.type}">
              ${card.name}
            </mwc-button>
          `})}
      </div>
    `}static get styles(){return[lit_element.c`
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .cards-container mwc-button {
          flex: 1 0 25%;
          margin: 4px;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .cards-container mwc-button {
            flex: 1 0 33%;
          }
        }
      `]}_cardPicked(ev){const type=ev.currentTarget.type,tag=getCardElementTag(type),elClass=customElements.get(tag);let config={type};if(elClass&&elClass.getStubConfig){const cardConfig=elClass.getStubConfig(this.hass);config=Object.assign({},config,cardConfig)}this.cardPicked(config)}}customElements.define("hui-card-picker",hui_card_picker_HuiCardPicker);class hui_dialog_pick_card_HuiDialogPickCard extends lit_element.a{constructor(...args){super(...args);this.hass=void 0;this.cardPicked=void 0;this.closeDialog=void 0}static get properties(){return{}}render(){return lit_element.e`
      <paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_card.header")}
        </h2>
        <paper-dialog-scrollable>
          <hui-card-picker
            .hass="${this.hass}"
            .cardPicked="${this.cardPicked}"
          ></hui-card-picker>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._skipPick}">MANUAL CARD</mwc-button>
        </div>
      </paper-dialog>
    `}_openedChanged(ev){if(!ev.detail.value){this.closeDialog()}}_skipPick(){this.cardPicked({type:""})}static get styles(){return[styles.b,lit_element.c`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 660px) {
          paper-dialog {
            width: 650px;
          }
        }

        paper-dialog {
          max-width: 650px;
        }
      `]}}customElements.define("hui-dialog-pick-card",hui_dialog_pick_card_HuiDialogPickCard);__webpack_require__.d(__webpack_exports__,"HuiDialogEditCard",function(){return hui_dialog_edit_card_HuiDialogEditCard});class hui_dialog_edit_card_HuiDialogEditCard extends lit_element.a{static get properties(){return{hass:{},_params:{},_cardConfig:{}}}constructor(){super();this.hass=void 0;this._params=void 0;this._cardConfig=void 0;this._cardPicked=this._cardPicked.bind(this);this._cancel=this._cancel.bind(this)}async showDialog(params){this._params=params;this._cardConfig=2===params.path.length?this._cardConfig=params.lovelace.config.views[params.path[0]].cards[params.path[1]]:void 0}render(){if(!this._params){return lit_element.e``}if(!this._cardConfig){return lit_element.e`
        <hui-dialog-pick-card
          .hass="${this.hass}"
          .cardPicked="${this._cardPicked}"
          .closeDialog="${this._cancel}"
        ></hui-dialog-pick-card>
      `}return lit_element.e`
      <hui-edit-card
        .hass="${this.hass}"
        .lovelace="${this._params.lovelace}"
        .path="${this._params.path}"
        .cardConfig="${this._cardConfig}"
        .closeDialog="${this._cancel}"
      >
      </hui-edit-card>
    `}_cardPicked(cardConf){this._cardConfig=cardConf}_cancel(){this._params=void 0;this._cardConfig=void 0}}customElements.define("hui-dialog-edit-card",hui_dialog_edit_card_HuiDialogEditCard)}}]);
//# sourceMappingURL=80c651598b20ad71d56f.chunk.js.map