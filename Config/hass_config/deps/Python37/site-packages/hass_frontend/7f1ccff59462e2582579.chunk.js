(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{159:function(module,__webpack_exports__,__webpack_require__){"use strict";var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(177);__webpack_exports__.a=stateObj=>stateObj.attributes.friendly_name===void 0?Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__.a)(stateObj.entity_id).replace(/_/g," "):stateObj.attributes.friendly_name||""},163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return domainIcon});var _const__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109);const fixedIcons={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function domainIcon(domain,state){if(domain in fixedIcons){return fixedIcons[domain]}switch(domain){case"alarm_control_panel":switch(state){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell";}case"binary_sensor":return state&&"off"===state?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===state?"hass:window-closed":"hass:window-open";case"lock":return state&&"unlocked"===state?"hass:lock-open":"hass:lock";case"media_player":return state&&"off"!==state&&"idle"!==state?"hass:cast-connected":"hass:cast";case"zwave":switch(state){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave";}default:console.warn("Unable to find icon for domain "+domain+" ("+state+")");return _const__WEBPACK_IMPORTED_MODULE_0__.a;}}},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeDomain});function computeDomain(entityId){return entityId.substr(0,entityId.indexOf("."))}},177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeObjectId});function computeObjectId(entityId){return entityId.substr(entityId.indexOf(".")+1)}},178:function(module,__webpack_exports__,__webpack_require__){"use strict";var common_const=__webpack_require__(109),compute_domain=__webpack_require__(166),domain_icon=__webpack_require__(163);function binarySensorIcon(state){const activated=state.state&&"off"===state.state;switch(state.attributes.device_class){case"battery":return activated?"hass:battery":"hass:battery-outline";case"cold":return activated?"hass:thermometer":"hass:snowflake";case"connectivity":return activated?"hass:server-network-off":"hass:server-network";case"door":return activated?"hass:door-closed":"hass:door-open";case"garage_door":return activated?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return activated?"hass:shield-check":"hass:alert";case"heat":return activated?"hass:thermometer":"hass:fire";case"light":return activated?"hass:brightness-5":"hass:brightness-7";case"lock":return activated?"hass:lock":"hass:lock-open";case"moisture":return activated?"hass:water-off":"hass:water";case"motion":return activated?"hass:walk":"hass:run";case"occupancy":return activated?"hass:home-outline":"hass:home";case"opening":return activated?"hass:square":"hass:square-outline";case"plug":return activated?"hass:power-plug-off":"hass:power-plug";case"presence":return activated?"hass:home-outline":"hass:home";case"sound":return activated?"hass:music-note-off":"hass:music-note";case"vibration":return activated?"hass:crop-portrait":"hass:vibrate";case"window":return activated?"hass:window-closed":"hass:window-open";default:return activated?"hass:radiobox-blank":"hass:checkbox-marked-circle";}}function coverIcon(state){const open="closed"!==state.state;switch(state.attributes.device_class){case"garage":return open?"hass:garage-open":"hass:garage";default:return Object(domain_icon.a)("cover",state.state);}}const fixedDeviceClassIcons={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge"};function sensorIcon(state){const dclass=state.attributes.device_class;if(dclass&&dclass in fixedDeviceClassIcons){return fixedDeviceClassIcons[dclass]}if("battery"===dclass){const battery=+state.state;if(isNaN(battery)){return"hass:battery-unknown"}const batteryRound=10*Math.round(battery/10);if(100<=batteryRound){return"hass:battery"}if(0>=batteryRound){return"hass:battery-alert"}return`${"hass"}:battery-${batteryRound}`}const unit=state.attributes.unit_of_measurement;if(unit===common_const.j||unit===common_const.k){return"hass:thermometer"}return Object(domain_icon.a)("sensor")}function inputDateTimeIcon(state){if(!state.attributes.has_date){return"hass:clock"}if(!state.attributes.has_time){return"hass:calendar"}return Object(domain_icon.a)("input_datetime")}__webpack_require__.d(__webpack_exports__,"a",function(){return stateIcon});const domainIcons={binary_sensor:binarySensorIcon,cover:coverIcon,sensor:sensorIcon,input_datetime:inputDateTimeIcon};function stateIcon(state){if(!state){return common_const.a}if(state.attributes.icon){return state.attributes.icon}const domain=Object(compute_domain.a)(state.entity_id);if(domain in domainIcons){return domainIcons[domain](state)}return Object(domain_icon.a)(domain,state.state)}},181:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){var classes="together layout ";return classes+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=(a,b)=>{if(a<b){return-1}if(a>b){return 1}return 0}},305:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeEntityRegistryName});__webpack_require__.d(__webpack_exports__,"b",function(){return fetchEntityRegistry});__webpack_require__.d(__webpack_exports__,"d",function(){return updateEntityRegistryEntry});__webpack_require__.d(__webpack_exports__,"c",function(){return removeEntityRegistryEntry});var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(159);const computeEntityRegistryName=(hass,entry)=>{if(entry.name){return entry.name}const state=hass.states[entry.entity_id];return state?Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__.a)(state):null},fetchEntityRegistry=hass=>hass.callWS({type:"config/entity_registry/list"}),updateEntityRegistryEntry=(hass,entityId,updates)=>hass.callWS(Object.assign({type:"config/entity_registry/update",entity_id:entityId},updates)),removeEntityRegistryEntry=(hass,entityId)=>hass.callWS({type:"config/entity_registry/remove",entity_id:entityId})},730:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),paper_icon_item=__webpack_require__(169),paper_item_body=__webpack_require__(165),paper_card=__webpack_require__(160),entity_registry=__webpack_require__(305),hass_subpage=__webpack_require__(139),hass_loading_screen=__webpack_require__(144),ha_icon=__webpack_require__(164),compare=__webpack_require__(237),domain_icon=__webpack_require__(163),state_icon=__webpack_require__(178),compute_domain=__webpack_require__(166),ha_config_section=__webpack_require__(181),fire_event=__webpack_require__(44);const loadEntityRegistryDetailDialog=()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(100),__webpack_require__.e(20)]).then(__webpack_require__.bind(null,773)),showEntityRegistryDetailDialog=(element,systemLogDetailParams)=>{Object(fire_event.a)(element,"show-dialog",{dialogTag:"dialog-entity-registry-detail",dialogImport:loadEntityRegistryDetailDialog,dialogParams:systemLogDetailParams})};class ha_config_entity_registry_HaConfigEntityRegistry extends lit_element.a{constructor(...args){super(...args);this.hass=void 0;this.isWide=void 0;this._items=void 0}static get properties(){return{hass:{},isWide:{},_items:{}}}render(){if(!this.hass||this._items===void 0){return lit_element.e`
        <hass-loading-screen></hass-loading-screen>
      `}return lit_element.e`
      <hass-subpage
        header="${this.hass.localize("ui.panel.config.entity_registry.caption")}"
      >
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.hass.localize("ui.panel.config.entity_registry.picker.header")}
          </span>
          <span slot="introduction">
            ${this.hass.localize("ui.panel.config.entity_registry.picker.introduction")}
            <p>
              ${this.hass.localize("ui.panel.config.entity_registry.picker.introduction2")}
            </p>
            <a href="/config/integrations">
              ${this.hass.localize("ui.panel.config.entity_registry.picker.integrations_page")}
            </a>
          </span>
          <paper-card>
            ${this._items.map(entry=>{const state=this.hass.states[entry.entity_id];return lit_element.e`
                <paper-icon-item @click=${this._openEditEntry} .entry=${entry}>
                  <ha-icon
                    slot="item-icon"
                    .icon=${state?Object(state_icon.a)(state):Object(domain_icon.a)(Object(compute_domain.a)(entry.entity_id))}
                  ></ha-icon>
                  <paper-item-body two-line>
                    <div class="name">
                      ${Object(entity_registry.a)(this.hass,entry)||this.hass.localize("ui.panel.config.entity_registry.picker.unavailable")}
                    </div>
                    <div class="secondary entity-id">
                      ${entry.entity_id}
                    </div>
                  </paper-item-body>
                  <div class="platform">${entry.platform}</div>
                </paper-icon-item>
              `})}
          </paper-card>
        </ha-config-section>
      </hass-subpage>
    `}firstUpdated(changedProps){super.firstUpdated(changedProps);this._fetchData();loadEntityRegistryDetailDialog()}async _fetchData(){this._items=(await Object(entity_registry.b)(this.hass)).sort((ent1,ent2)=>Object(compare.a)(ent1.entity_id,ent2.entity_id))}_openEditEntry(ev){const entry=ev.currentTarget.entry;showEntityRegistryDetailDialog(this,{entry,updateEntry:async updates=>{const updated=await Object(entity_registry.d)(this.hass,entry.entity_id,updates);this._items=this._items.map(ent=>ent===entry?updated:ent)},removeEntry:async()=>{if(!confirm(`Are you sure you want to delete this entry?

Deleting an entry will not remove the entity from Home Assistant. To do this, you will need to remove the integration "${entry.platform}" from Home Assistant.`)){return!1}try{await Object(entity_registry.c)(this.hass,entry.entity_id);this._items=this._items.filter(ent=>ent!==entry);return!0}catch(err){return!1}}})}static get styles(){return lit_element.c`
      a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
        direction: ltr;
      }
      paper-icon-item {
        cursor: pointer;
      }
      ha-icon {
        margin-left: 8px;
      }
    `}}customElements.define("ha-config-entity-registry",ha_config_entity_registry_HaConfigEntityRegistry)}}]);
//# sourceMappingURL=7f1ccff59462e2582579.chunk.js.map