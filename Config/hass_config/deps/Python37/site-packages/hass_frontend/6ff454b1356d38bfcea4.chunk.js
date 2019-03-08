(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{773:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(185),_polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(192),_polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),_resources_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(56),_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(166),_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(159);class DialogEntityRegistryDetail extends lit_element__WEBPACK_IMPORTED_MODULE_0__.a{constructor(...args){super(...args);this.hass=void 0;this._name=void 0;this._entityId=void 0;this._error=void 0;this._params=void 0;this._submitting=void 0}static get properties(){return{_error:{},_name:{},_entityId:{},_params:{}}}async showDialog(params){this._params=params;this._error=void 0;this._name=this._params.entry.name||"";this._entityId=this._params.entry.entity_id;await this.updateComplete}render(){if(!this._params){return lit_element__WEBPACK_IMPORTED_MODULE_0__.e``}const entry=this._params.entry,stateObj=this.hass.states[entry.entity_id],invalidDomainUpdate=Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_5__.a)(this._entityId.trim())!==Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_5__.a)(this._params.entry.entity_id);return lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
      <paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>${entry.entity_id}</h2>
        <paper-dialog-scrollable>
          ${!stateObj?lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
                <div>
                  ${this.hass.localize("ui.panel.config.entity_registry.editor.unavailable")}
                </div>
              `:""}
          ${this._error?lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
                <div class="error">${this._error}</div>
              `:""}
          <div class="form">
            <paper-input
              .value=${this._name}
              @value-changed=${this._nameChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.name")}
              .placeholder=${stateObj?Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__.a)(stateObj):""}
              .disabled=${this._submitting}
            ></paper-input>
            <paper-input
              .value=${this._entityId}
              @value-changed=${this._entityIdChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.entity_id")}
              error-message="Domain needs to stay the same"
              .invalid=${invalidDomainUpdate}
              .disabled=${this._submitting}
            ></paper-input>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button
            class="warning"
            @click="${this._deleteEntry}"
            .disabled=${this._submitting}
          >
            ${this.hass.localize("ui.panel.config.entity_registry.editor.delete")}
          </mwc-button>
          <mwc-button
            @click="${this._updateEntry}"
            .disabled=${invalidDomainUpdate||this._submitting}
          >
            ${this.hass.localize("ui.panel.config.entity_registry.editor.update")}
          </mwc-button>
        </div>
      </paper-dialog>
    `}_nameChanged(ev){this._error=void 0;this._name=ev.detail.value}_entityIdChanged(ev){this._error=void 0;this._entityId=ev.detail.value}async _updateEntry(){this._submitting=!0;try{await this._params.updateEntry({name:this._name.trim()||null,new_entity_id:this._entityId.trim()});this._params=void 0}catch(err){this._error=err}finally{this._submitting=!1}}async _deleteEntry(){this._submitting=!0;try{if(await this._params.removeEntry()){this._params=void 0}}finally{this._submitting=!1}}_openedChanged(ev){if(!ev.detail.value){this._params=void 0}}static get styles(){return[_resources_styles__WEBPACK_IMPORTED_MODULE_4__.b,lit_element__WEBPACK_IMPORTED_MODULE_0__.c`
        paper-dialog {
          min-width: 400px;
        }
        .form {
          padding-bottom: 24px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        .error {
          color: var(--google-red-500);
        }
      `]}}customElements.define("dialog-entity-registry-detail",DialogEntityRegistryDetail)}}]);
//# sourceMappingURL=6ff454b1356d38bfcea4.chunk.js.map