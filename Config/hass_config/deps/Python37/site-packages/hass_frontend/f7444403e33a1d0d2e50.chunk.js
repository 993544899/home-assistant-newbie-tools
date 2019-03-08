(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{159:function(module,__webpack_exports__,__webpack_require__){"use strict";var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(177);__webpack_exports__.a=stateObj=>stateObj.attributes.friendly_name===void 0?Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__.a)(stateObj.entity_id).replace(/_/g," "):stateObj.attributes.friendly_name||""},162:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeStateDomain});var _compute_domain__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(166);function computeStateDomain(stateObj){return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__.a)(stateObj.entity_id)}},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HaIcon});var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);const ironIconClass=customElements.get("iron-icon");let loaded=!1;class HaIcon extends ironIconClass{constructor(...args){super(...args);this._iconsetName=void 0}listen(node,eventName,methodName){super.listen(node,eventName,methodName);if(!loaded&&"mdi"===this._iconsetName){loaded=!0;__webpack_require__.e(58).then(__webpack_require__.bind(null,205))}}}customElements.define("ha-icon",HaIcon)},166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeDomain});function computeDomain(entityId){return entityId.substr(0,entityId.indexOf("."))}},171:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden\$="[[_computeImgDivHidden(sizing)]]" aria-hidden\$="[[_computeImgDivARIAHidden(alt)]]" aria-label\$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt\$="[[alt]]" hidden\$="[[_computeImgHidden(sizing)]]" crossorigin\$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden\$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class\$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt){return this.alt}if(""===this.src){return""}var resolved=this._resolveSrc(this.src);return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(testSrc){var resolved=Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__.c)(testSrc,this.$.baseURIAnchor.href);if("/"===resolved[0]){resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}})},177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeObjectId});function computeObjectId(entityId){return entityId.substr(entityId.indexOf(".")+1)}},342:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(171),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(81);class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__.a`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null}}}ready(){super.ready();this.addEventListener("click",ev=>this.badgeTap(ev))}badgeTap(ev){ev.stopPropagation();if(this.entityId){this.fire("hass-more-info",{entityId:this.entityId})}}}customElements.define("ha-entity-marker",HaEntityMarker)},343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return setupLeafletMap});const setupLeafletMap=async mapElement=>{if(!mapElement.parentNode){throw new Error("Cannot setup Leaflet map on disconnected element")}const Leaflet=await __webpack_require__.e(115).then(__webpack_require__.t.bind(null,458,7));Leaflet.Icon.Default.imagePath="/static/images/leaflet";const map=Leaflet.map(mapElement),style=document.createElement("link");style.setAttribute("href","/static/images/leaflet/leaflet.css");style.setAttribute("rel","stylesheet");mapElement.parentNode.appendChild(style);map.setView([51.505,-.09],13);Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}${Leaflet.Browser.retina?"@2x.png":".png"}`,{attribution:"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>, &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",subdomains:"abcd",minZoom:0,maxZoom:20}).addTo(map);return[map,Leaflet]}},743:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(136),_components_ha_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(164),_ha_entity_marker__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(342),_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(162),_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(159),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(107),_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(343);class HaPanelMap extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__.a`
      <style include="ha-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }
      </style>

      <app-toolbar>
        <ha-menu-button
          narrow="[[narrow]]"
          show-menu="[[showMenu]]"
        ></ha-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
      </app-toolbar>

      <div id="map"></div>
    `}static get properties(){return{hass:{type:Object,observer:"drawEntities"},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback();this.loadMap()}async loadMap(){[this._map,this.Leaflet]=await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__.a)(this.$.map);this.drawEntities(this.hass);this._map.invalidateSize();this.fitMap()}disconnectedCallback(){if(this._map){this._map.remove()}}fitMap(){var bounds;if(0===this._mapItems.length){this._map.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),14)}else{bounds=new this.Leaflet.latLngBounds(this._mapItems.map(item=>item.getLatLng()));this._map.fitBounds(bounds.pad(.5))}}drawEntities(hass){var map=this._map;if(!map)return;if(this._mapItems){this._mapItems.forEach(function(marker){marker.remove()})}var mapItems=this._mapItems=[];Object.keys(hass.states).forEach(entityId=>{var entity=hass.states[entityId],title=Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__.a)(entity);if(entity.attributes.hidden&&"zone"!==Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__.a)(entity)||"home"===entity.state||!("latitude"in entity.attributes)||!("longitude"in entity.attributes)){return}var icon;if("zone"===Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__.a)(entity)){if(entity.attributes.passive)return;var iconHTML="";if(entity.attributes.icon){const el=document.createElement("ha-icon");el.setAttribute("icon",entity.attributes.icon);iconHTML=el.outerHTML}else{iconHTML=title}icon=this.Leaflet.divIcon({html:iconHTML,iconSize:[24,24],className:""});mapItems.push(this.Leaflet.marker([entity.attributes.latitude,entity.attributes.longitude],{icon:icon,interactive:!1,title:title}).addTo(map));mapItems.push(this.Leaflet.circle([entity.attributes.latitude,entity.attributes.longitude],{interactive:!1,color:"#FF9800",radius:entity.attributes.radius}).addTo(map));return}var entityPicture=entity.attributes.entity_picture||"",entityName=title.split(" ").map(function(part){return part.substr(0,1)}).join("");icon=this.Leaflet.divIcon({html:"<ha-entity-marker entity-id='"+entity.entity_id+"' entity-name='"+entityName+"' entity-picture='"+entityPicture+"'></ha-entity-marker>",iconSize:[45,45],className:""});mapItems.push(this.Leaflet.marker([entity.attributes.latitude,entity.attributes.longitude],{icon:icon,title:Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__.a)(entity)}).addTo(map));if(entity.attributes.gps_accuracy){mapItems.push(this.Leaflet.circle([entity.attributes.latitude,entity.attributes.longitude],{interactive:!1,color:"#0288D1",radius:entity.attributes.gps_accuracy}).addTo(map))}})}}customElements.define("ha-panel-map",HaPanelMap)}}]);
//# sourceMappingURL=f7444403e33a1d0d2e50.chunk.js.map