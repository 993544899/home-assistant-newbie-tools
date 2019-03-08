(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},221:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97),_ha_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164);class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__.a{connectedCallback(){this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left";super.connectedCallback()}}customElements.define("ha-icon-next",HaIconNext)},334:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return fetchUsers});const fetchUsers=async hass=>hass.callWS({type:"config/auth/list"})},726:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(142),utils_async=__webpack_require__(11),debounce=__webpack_require__(19),html_tag=__webpack_require__(3),polymer_element=__webpack_require__(20),navigate_mixin=__webpack_require__(202),paper_fab=__webpack_require__(227),paper_item=__webpack_require__(127),paper_card=__webpack_require__(160),paper_item_body=__webpack_require__(165),hass_subpage=__webpack_require__(139),ha_icon_next=__webpack_require__(221),localize_mixin=__webpack_require__(107),events_mixin=__webpack_require__(81),compute_rtl=__webpack_require__(83);let registeredDialog=!1;class ha_config_user_picker_HaUserPicker extends Object(events_mixin.a)(Object(navigate_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
      <style>
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
        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }
        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        paper-card {
          display: block;
          max-width: 600px;
          margin: 16px auto;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
        <paper-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[user.id]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      - System Generated
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </paper-card>

        <paper-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></paper-fab>
      </hass-subpage>
    `}static get properties(){return{hass:Object,users:Array,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([__webpack_require__.e(1),__webpack_require__.e(22)]).then(__webpack_require__.bind(null,774))})}}_withDefault(value,defaultValue){return value||defaultValue}_computeUrl(user){return`/config/users/${user.id}`}_computeRTL(hass){return Object(compute_rtl.a)(hass)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId})=>{this.fire("reload-users");if(userId)this.navigate(`/config/users/${userId}`)}})}}customElements.define("ha-config-user-picker",ha_config_user_picker_HaUserPicker);var mwc_button=__webpack_require__(73);class ha_user_editor_HaUserEditor extends Object(events_mixin.a)(Object(navigate_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
      <style include="ha-style">
        paper-card {
          display: block;
          max-width: 600px;
          margin: 0 auto 16px;
        }
        paper-card:first-child {
          margin-top: 16px;
        }
        paper-card:last-child {
          margin-bottom: 16px;
        }
        hass-subpage paper-card:first-of-type {
          direction: ltr;
        }
      </style>

      <hass-subpage
        header="[[localize('ui.panel.config.users.editor.caption')]]"
      >
        <paper-card heading="[[_computeName(user)]]">
          <table class="card-content">
            <tr>
              <td>ID</td>
              <td>[[user.id]]</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>[[user.is_owner]]</td>
            </tr>
            <tr>
              <td>Active</td>
              <td>[[user.is_active]]</td>
            </tr>
            <tr>
              <td>System generated</td>
              <td>[[user.system_generated]]</td>
            </tr>
          </table>
        </paper-card>
        <paper-card>
          <div class="card-actions">
            <mwc-button
              class="warning"
              on-click="_deleteUser"
              disabled="[[user.system_generated]]"
            >
              [[localize('ui.panel.config.users.editor.delete_user')]]
            </mwc-button>
            <template is="dom-if" if="[[user.system_generated]]">
              Unable to remove system generated users.
            </template>
          </div>
        </paper-card>
      </hass-subpage>
    `}static get properties(){return{hass:Object,user:Object}}_computeName(user){return user&&(user.name||"Unnamed user")}async _deleteUser(ev){if(!confirm(`Are you sure you want to delete ${this._computeName(this.user)}`)){ev.target.blur();return}try{await this.hass.callWS({type:"config/auth/delete",user_id:this.user.id})}catch(err){alert(err.code);return}this.fire("reload-users");this.navigate("/config/users")}}customElements.define("ha-user-editor",ha_user_editor_HaUserEditor);var fire_event=__webpack_require__(44),auth=__webpack_require__(334);class ha_config_users_HaConfigUsers extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <app-route
        route="[[route]]"
        pattern="/users/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
        ></ha-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <ha-user-editor
          hass="[[hass]]"
          user="[[_computeUser(_users, _routeData.user)]]"
        ></ha-user-editor>
      </template>
    `}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready();this._loadData();this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(ev){this._user=ev.detail.user}_checkRoute(route){if(!route||"/users"!==route.path.substr(0,6))return;Object(fire_event.a)(this,"iron-resize");this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(0),()=>{if("/users"===route.path){this.navigate("/config/users/picker",!0)}})}_computeUser(users,userId){return users&&users.filter(u=>u.id===userId)[0]}_equals(a,b){return a===b}async _loadData(){this._users=await Object(auth.a)(this.hass)}}customElements.define("ha-config-users",ha_config_users_HaConfigUsers)}}]);
//# sourceMappingURL=16e97bac12a4ec4cf549.chunk.js.map