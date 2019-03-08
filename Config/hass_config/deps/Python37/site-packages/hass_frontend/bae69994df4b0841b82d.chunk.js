(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{181:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){var classes="together layout ";return classes+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=(a,b)=>{if(a<b){return-1}if(a>b){return 1}return 0}},377:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return fetchAreaRegistry});__webpack_require__.d(__webpack_exports__,"a",function(){return createAreaRegistryEntry});__webpack_require__.d(__webpack_exports__,"d",function(){return updateAreaRegistryEntry});__webpack_require__.d(__webpack_exports__,"b",function(){return deleteAreaRegistryEntry});const fetchAreaRegistry=hass=>hass.callWS({type:"config/area_registry/list"}),createAreaRegistryEntry=(hass,values)=>hass.callWS(Object.assign({type:"config/area_registry/create"},values)),updateAreaRegistryEntry=(hass,areaId,updates)=>hass.callWS(Object.assign({type:"config/area_registry/update",area_id:areaId},updates)),deleteAreaRegistryEntry=(hass,areaId)=>hass.callWS({type:"config/area_registry/delete",area_id:areaId})},731:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),paper_item=__webpack_require__(127),paper_item_body=__webpack_require__(165),paper_card=__webpack_require__(160),paper_fab=__webpack_require__(227),area_registry=__webpack_require__(377),hass_subpage=__webpack_require__(139),hass_loading_screen=__webpack_require__(144),compare=__webpack_require__(237),ha_config_section=__webpack_require__(181),fire_event=__webpack_require__(44);const loadAreaRegistryDetailDialog=()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(99),__webpack_require__.e(12)]).then(__webpack_require__.bind(null,771)),showAreaRegistryDetailDialog=(element,systemLogDetailParams)=>{Object(fire_event.a)(element,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:loadAreaRegistryDetailDialog,dialogParams:systemLogDetailParams})};var class_map=__webpack_require__(63),compute_rtl=__webpack_require__(83);class ha_config_area_registry_HaConfigAreaRegistry extends lit_element.a{constructor(...args){super(...args);this.hass=void 0;this.isWide=void 0;this._items=void 0}static get properties(){return{hass:{},isWide:{},_items:{}}}render(){if(!this.hass||this._items===void 0){return lit_element.e`
        <hass-loading-screen></hass-loading-screen>
      `}return lit_element.e`
      <hass-subpage
        header="${this.hass.localize("ui.panel.config.area_registry.caption")}"
      >
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.hass.localize("ui.panel.config.area_registry.picker.header")}
          </span>
          <span slot="introduction">
            ${this.hass.localize("ui.panel.config.area_registry.picker.introduction")}
            <p>
              ${this.hass.localize("ui.panel.config.area_registry.picker.introduction2")}
            </p>
            <a href="/config/integrations">
              ${this.hass.localize("ui.panel.config.area_registry.picker.integrations_page")}
            </a>
          </span>
          <paper-card>
            ${this._items.map(entry=>{return lit_element.e`
                <paper-item @click=${this._openEditEntry} .entry=${entry}>
                  <paper-item-body>
                    ${entry.name}
                  </paper-item-body>
                </paper-item>
              `})}
            ${0===this._items.length?lit_element.e`
                  <div class="empty">
                    ${this.hass.localize("ui.panel.config.area_registry.picker.no_areas")}
                    <mwc-button @click=${this._createArea}>
                      ${this.hass.localize("ui.panel.config.area_registry.picker.create_area")}
                    </mwc-button>
                  </div>
                `:lit_element.e``}
          </paper-card>
        </ha-config-section>
      </hass-subpage>

      <paper-fab
        ?is-wide=${this.isWide}
        icon="hass:plus"
        title="${this.hass.localize("ui.panel.config.area_registry.picker.create_area")}"
        @click=${this._createArea}
        class="${Object(class_map.a)({rtl:Object(compute_rtl.a)(this.hass)})}"
      ></paper-fab>
    `}firstUpdated(changedProps){super.firstUpdated(changedProps);this._fetchData();loadAreaRegistryDetailDialog()}async _fetchData(){this._items=(await Object(area_registry.c)(this.hass)).sort((ent1,ent2)=>Object(compare.a)(ent1.name,ent2.name))}_createArea(){this._openDialog()}_openEditEntry(ev){const entry=ev.currentTarget.entry;this._openDialog(entry)}_openDialog(entry){showAreaRegistryDetailDialog(this,{entry,createEntry:async values=>{const created=await Object(area_registry.a)(this.hass,values);this._items=this._items.concat(created).sort((ent1,ent2)=>Object(compare.a)(ent1.name,ent2.name))},updateEntry:async values=>{const updated=await Object(area_registry.d)(this.hass,entry.area_id,values);this._items=this._items.map(ent=>ent===entry?updated:ent)},removeEntry:async()=>{if(!confirm(`Are you sure you want to delete this area?

All devices in this area will become unassigned.`)){return!1}try{await Object(area_registry.b)(this.hass,entry.area_id);this._items=this._items.filter(ent=>ent!==entry);return!0}catch(err){return!1}}})}static get styles(){return lit_element.c`
      a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
        max-width: 600px;
        margin: 16px auto;
      }
      .empty {
        text-align: center;
      }
      paper-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      paper-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }

      paper-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }

      paper-fab.rtl {
        right: auto;
        left: 16px;
      }

      paper-fab[is-wide].rtl {
        bottom: 24px;
        right: auto;
        left: 24px;
      }
    `}}customElements.define("ha-config-area-registry",ha_config_area_registry_HaConfigAreaRegistry)}}]);
//# sourceMappingURL=bae69994df4b0841b82d.chunk.js.map