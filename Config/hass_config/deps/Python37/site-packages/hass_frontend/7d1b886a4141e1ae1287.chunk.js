(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},181:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){var classes="together layout ";return classes+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},221:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97),_ha_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164);class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__.a{connectedCallback(){this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left";super.connectedCallback()}}customElements.define("ha-icon-next",HaIconNext)},729:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_header_layout=__webpack_require__(135),app_header=__webpack_require__(134),app_toolbar=__webpack_require__(111),iron_icon=__webpack_require__(97),paper_card=__webpack_require__(160),paper_item_body=__webpack_require__(165),paper_item=__webpack_require__(127),html_tag=__webpack_require__(3),polymer_element=__webpack_require__(20),ha_menu_button=__webpack_require__(136),ha_icon_next=__webpack_require__(221),ha_config_section=__webpack_require__(181),navigate_mixin=__webpack_require__(202),localize_mixin=__webpack_require__(107),is_component_loaded=__webpack_require__(198);const CORE_PAGES=["core","customize","entity_registry","area_registry"];class ha_config_navigation_HaConfigNavigation extends Object(localize_mixin.a)(Object(navigate_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style include="iron-flex">
        paper-card {
          display: block;
        }
        paper-item {
          cursor: pointer;
        }
      </style>
      <paper-card>
        <template is="dom-repeat" items="[[pages]]">
          <template is="dom-if" if="[[_computeLoaded(hass, item)]]">
            <paper-item on-click="_navigate">
              <paper-item-body two-line="">
                [[_computeCaption(item, localize)]]
                <div secondary="">[[_computeDescription(item, localize)]]</div>
              </paper-item-body>
              <ha-icon-next></ha-icon-next>
            </paper-item>
          </template>
        </template>
      </paper-card>
    `}static get properties(){return{hass:{type:Object},pages:{type:Array,value:["core","person","entity_registry","area_registry","automation","script","zha","zwave","customize"]}}}_computeLoaded(hass,page){return CORE_PAGES.includes(page)||Object(is_component_loaded.a)(hass,page)}_computeCaption(page,localize){return localize(`ui.panel.config.${page}.caption`)}_computeDescription(page,localize){return localize(`ui.panel.config.${page}.description`)}_navigate(ev){this.navigate("/config/"+ev.model.item)}}customElements.define("ha-config-navigation",ha_config_navigation_HaConfigNavigation);class ha_config_dashboard_HaConfigDashboard extends Object(navigate_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      .content {
        padding-bottom: 32px;
      }
      paper-card {
        display: block;
      }
      a {
        text-decoration: none;
        color: var(--primary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <ha-menu-button narrow="[[narrow]]" show-menu="[[showMenu]]"></ha-menu-button>
          <div main-title="">[[localize('panel.config')]]</div>
        </app-toolbar>
      </app-header>

      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.header')]]</span>
          <span slot="introduction">[[localize('ui.panel.config.introduction')]]</span>

          <template is="dom-if" if="[[computeIsLoaded(hass, 'cloud')]]">
            <paper-card>
              <a href='/config/cloud' tabindex="-1">
                <paper-item>
                  <paper-item-body two-line="">
                    [[localize('ui.panel.config.cloud.caption')]]
                    <template is="dom-if" if="[[cloudStatus.logged_in]]">
                      <div secondary="">
                        [[localize('ui.panel.config.cloud.description_login', 'email', cloudStatus.email)]]
                      </div>
                    </template>
                    <template is="dom-if" if="[[!cloudStatus.logged_in]]">
                      <div secondary="">
                        [[localize('ui.panel.config.cloud.description_not_login')]]
                      </div>
                    </template>
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-item>
              </paper-card>
            </a>
          </template>

          <paper-card>
            <a href='/config/integrations/dashboard' tabindex="-1">
              <paper-item>
                <paper-item-body two-line>
                  [[localize('ui.panel.config.integrations.caption')]]
                  <div secondary>
                    [[localize('ui.panel.config.integrations.description')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>

            <a href='/config/users' tabindex="-1">
              <paper-item>
                <paper-item-body two-line>
                  [[localize('ui.panel.config.users.caption')]]
                  <div secondary>
                    [[localize('ui.panel.config.users.description')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </paper-card>

          <ha-config-navigation hass="[[hass]]"></ha-config-navigation>
        </ha-config-section>
      </div>
    </app-header-layout>
`}static get properties(){return{hass:Object,isWide:Boolean,cloudStatus:Object,narrow:Boolean,showMenu:Boolean}}computeIsLoaded(hass,component){return Object(is_component_loaded.a)(hass,component)}}customElements.define("ha-config-dashboard",ha_config_dashboard_HaConfigDashboard)}}]);
//# sourceMappingURL=7d1b886a4141e1ae1287.chunk.js.map