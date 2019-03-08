(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{771:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(185),_polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(192),_polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),_resources_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(56);class DialogAreaDetail extends lit_element__WEBPACK_IMPORTED_MODULE_0__.a{constructor(...args){super(...args);this.hass=void 0;this._name=void 0;this._error=void 0;this._params=void 0;this._submitting=void 0}static get properties(){return{_error:{},_name:{},_params:{}}}async showDialog(params){this._params=params;this._error=void 0;this._name=this._params.entry?this._params.entry.name:"";await this.updateComplete}render(){if(!this._params){return lit_element__WEBPACK_IMPORTED_MODULE_0__.e``}const nameInvalid=""===this._name.trim();return lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
      <paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${this._params.entry?this._params.entry.name:this.hass.localize("ui.panel.config.area_registry.editor.default_name")}
        </h2>
        <paper-dialog-scrollable>
          ${this._error?lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
                <div class="error">${this._error}</div>
              `:""}
          <div class="form">
            <paper-input
              .value=${this._name}
              @value-changed=${this._nameChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.name")}
              error-message="Name is required"
              .invalid=${nameInvalid}
            ></paper-input>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${this._params.entry?lit_element__WEBPACK_IMPORTED_MODULE_0__.e`
                <mwc-button
                  class="warning"
                  @click="${this._deleteEntry}"
                  .disabled=${this._submitting}
                >
                  ${this.hass.localize("ui.panel.config.area_registry.editor.delete")}
                </mwc-button>
              `:lit_element__WEBPACK_IMPORTED_MODULE_0__.e``}
          <mwc-button
            @click="${this._updateEntry}"
            .disabled=${nameInvalid||this._submitting}
          >
            ${this._params.entry?this.hass.localize("ui.panel.config.area_registry.editor.update"):this.hass.localize("ui.panel.config.area_registry.editor.create")}
          </mwc-button>
        </div>
      </paper-dialog>
    `}_nameChanged(ev){this._error=void 0;this._name=ev.detail.value}async _updateEntry(){this._submitting=!0;try{const values={name:this._name.trim()};if(this._params.entry){await this._params.updateEntry(values)}else{await this._params.createEntry(values)}this._params=void 0}catch(err){this._error=err}finally{this._submitting=!1}}async _deleteEntry(){this._submitting=!0;try{if(await this._params.removeEntry()){this._params=void 0}}finally{this._submitting=!1}}_openedChanged(ev){if(!ev.detail.value){this._params=void 0}}static get styles(){return[_resources_styles__WEBPACK_IMPORTED_MODULE_4__.b,lit_element__WEBPACK_IMPORTED_MODULE_0__.c`
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
      `]}}customElements.define("dialog-area-registry-detail",DialogAreaDetail)}}]);
//# sourceMappingURL=c0441202086d2ca364a8.chunk.js.map