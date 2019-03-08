(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return isComponentLoaded});function isComponentLoaded(hass,component){return hass&&-1!==hass.config.components.indexOf(component)}},202:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_common_navigate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(117);__webpack_exports__.a=Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__.a)(superClass=>class extends superClass{navigate(...args){Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__.a)(this,...args)}})},733:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(142),_polymer_iron_media_query_iron_media_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(198),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(81),_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(202);class HaPanelConfig extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_6__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__.a`
      <app-route
        route="[[route]]"
        pattern="/:page"
        data="{{_routeData}}"
      ></app-route>

      <iron-media-query query="(min-width: 1040px)" query-matches="{{wide}}">
      </iron-media-query>
      <iron-media-query
        query="(min-width: 1296px)"
        query-matches="{{wideSidebar}}"
      >
      </iron-media-query>

      <template
        is="dom-if"
        if='[[_equals(_routeData.page, "area_registry")]]'
        restamp
      >
        <ha-config-area-registry
          page-name="area_registry"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-area-registry>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "core")]]' restamp>
        <ha-config-core
          page-name="core"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-core>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "cloud")]]' restamp>
        <ha-config-cloud
          page-name="cloud"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
          cloud-status="[[_cloudStatus]]"
        ></ha-config-cloud>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "dashboard")]]'>
        <ha-config-dashboard
          page-name="dashboard"
          hass="[[hass]]"
          is-wide="[[isWide]]"
          cloud-status="[[_cloudStatus]]"
          narrow="[[narrow]]"
          show-menu="[[showMenu]]"
        ></ha-config-dashboard>
      </template>

      <template
        is="dom-if"
        if='[[_equals(_routeData.page, "automation")]]'
        restamp
      >
        <ha-config-automation
          page-name="automation"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-automation>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "script")]]' restamp>
        <ha-config-script
          page-name="script"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-script>
      </template>

      <template
        is="dom-if"
        if='[[_equals(_routeData.page, "entity_registry")]]'
        restamp
      >
        <ha-config-entity-registry
          page-name="entity_registry"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-entity-registry>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "zha")]]' restamp>
        <ha-config-zha
          page-name="zha"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-zha>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "zwave")]]' restamp>
        <ha-config-zwave
          page-name="zwave"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-zwave>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "person")]]' restamp>
        <ha-config-person
          page-name="person"
          route="[[route]]"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-person>
      </template>

      <template
        is="dom-if"
        if='[[_equals(_routeData.page, "customize")]]'
        restamp
      >
        <ha-config-customize
          page-name="customize"
          hass="[[hass]]"
          is-wide="[[isWide]]"
        ></ha-config-customize>
      </template>

      <template
        is="dom-if"
        if='[[_equals(_routeData.page, "integrations")]]'
        restamp
      >
        <ha-config-entries
          route="[[route]]"
          page-name="integrations"
          hass="[[hass]]"
          is-wide="[[isWide]]"
          narrow="[[narrow]]"
        ></ha-config-entries>
      </template>

      <template is="dom-if" if='[[_equals(_routeData.page, "users")]]' restamp>
        <ha-config-users
          page-name="users"
          route="[[route]]"
          hass="[[hass]]"
        ></ha-config-users>
      </template>
    `}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,_cloudStatus:{type:Object,value:null},route:{type:Object,observer:"_routeChanged"},_routeData:Object,wide:Boolean,wideSidebar:Boolean,isWide:{type:Boolean,computed:"computeIsWide(showMenu, wideSidebar, wide)"}}}ready(){super.ready();if(Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__.a)(this.hass,"cloud")){this._updateCloudStatus()}this.addEventListener("ha-refresh-cloud-status",()=>this._updateCloudStatus());Promise.all([__webpack_require__.e(120),__webpack_require__.e(64)]).then(__webpack_require__.bind(null,731));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(3),__webpack_require__.e(65)]).then(__webpack_require__.bind(null,718));Promise.all([__webpack_require__.e(0),__webpack_require__.e(121),__webpack_require__.e(66)]).then(__webpack_require__.bind(null,719));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(4),__webpack_require__.e(5),__webpack_require__.e(67)]).then(__webpack_require__.bind(null,723));Promise.all([__webpack_require__.e(0),__webpack_require__.e(122),__webpack_require__.e(68)]).then(__webpack_require__.bind(null,728));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(4),__webpack_require__.e(5),__webpack_require__.e(69)]).then(__webpack_require__.bind(null,720));Promise.all([__webpack_require__.e(123),__webpack_require__.e(70)]).then(__webpack_require__.bind(null,729));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(3),__webpack_require__.e(73)]).then(__webpack_require__.bind(null,725));Promise.all([__webpack_require__.e(124),__webpack_require__.e(71)]).then(__webpack_require__.bind(null,730));Promise.all([__webpack_require__.e(9),__webpack_require__.e(74)]).then(__webpack_require__.bind(null,726));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(4),__webpack_require__.e(5),__webpack_require__.e(75)]).then(__webpack_require__.bind(null,721));Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(4),__webpack_require__.e(5),__webpack_require__.e(76)]).then(__webpack_require__.bind(null,722));Promise.all([__webpack_require__.e(9),__webpack_require__.e(72)]).then(__webpack_require__.bind(null,727))}async _updateCloudStatus(){this._cloudStatus=await this.hass.callWS({type:"cloud/status"});if("connecting"===this._cloudStatus.cloud){setTimeout(()=>this._updateCloudStatus(),5e3)}}computeIsWide(showMenu,wideSidebar,wide){return showMenu?wideSidebar:wide}_routeChanged(route){if(""===route.path&&"/config"===route.prefix){this.navigate("/config/dashboard",!0)}this.fire("iron-resize")}_equals(a,b){return a===b}}customElements.define("ha-panel-config",HaPanelConfig)}}]);
//# sourceMappingURL=bbe10db95d39115c0122.chunk.js.map