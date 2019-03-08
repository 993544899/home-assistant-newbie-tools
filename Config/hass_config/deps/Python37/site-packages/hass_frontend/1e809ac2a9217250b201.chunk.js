(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{788:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(5),hui_entities_card=__webpack_require__(459);const EXCLUDED_DOMAINS=["zone"],addFromAction=(entities,actionConfig)=>{if("call-service"!==actionConfig.action||!actionConfig.service_data||!actionConfig.service_data.entity_id){return}let entityIds=actionConfig.service_data.entity_id;if(!Array.isArray(entityIds)){entityIds=[entityIds]}for(const entityId of entityIds){entities.add(entityId)}},addEntityId=(entities,entity)=>{if("string"===typeof entity){entities.add(entity);return}if(entity.entity){entities.add(entity.entity)}if(entity.camera_image){entities.add(entity.camera_image)}if(entity.tap_action){addFromAction(entities,entity.tap_action)}if(entity.hold_action){addFromAction(entities,entity.hold_action)}},addEntities=(entities,obj)=>{if(obj.entity){addEntityId(entities,obj.entity)}if(obj.entities){obj.entities.forEach(entity=>addEntityId(entities,entity))}if(obj.card){addEntities(entities,obj.card)}if(obj.cards){obj.cards.forEach(card=>addEntities(entities,card))}if(obj.badges){obj.badges.forEach(badge=>addEntityId(entities,badge))}},computeUsedEntities=config=>{const entities=new Set;config.views.forEach(view=>addEntities(entities,view));return entities},computeUnusedEntities=(hass,config)=>{const usedEntities=computeUsedEntities(config);return Object.keys(hass.states).filter(entity=>!usedEntities.has(entity)&&!EXCLUDED_DOMAINS.includes(entity.split(".",1)[0])).sort()};var create_card_element=__webpack_require__(338),compute_domain=__webpack_require__(166);__webpack_require__.d(__webpack_exports__,"HuiUnusedEntities",function(){return hui_unused_entities_HuiUnusedEntities});class hui_unused_entities_HuiUnusedEntities extends lit_element.a{constructor(...args){super(...args);this._hass=void 0;this._config=void 0;this._elements=void 0}static get properties(){return{_hass:{},_config:{}}}set hass(hass){this._hass=hass;if(!this._elements){this._createElements();return}for(const element of this._elements){element.hass=this._hass}}setConfig(config){this._config=config;this._createElements()}render(){if(!this._config||!this._hass){return lit_element.e``}return lit_element.e`
      ${this.renderStyle()}
      <div id="root">${this._elements}</div>
    `}renderStyle(){return lit_element.e`
      <style>
        #root {
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
        }
        hui-entities-card {
          max-width: 400px;
          padding: 4px;
          flex: 1 auto;
        }
      </style>
    `}_createElements(){if(!this._hass){return}const domains={};computeUnusedEntities(this._hass,this._config).forEach(entity=>{const domain=Object(compute_domain.a)(entity);if(!(domain in domains)){domains[domain]=[]}domains[domain].push(entity)});this._elements=Object.keys(domains).sort().map(domain=>{const el=Object(create_card_element.a)({type:"entities",title:this._hass.localize(`domain.${domain}`)||domain,entities:domains[domain].map(entity=>({entity,secondary_info:"entity-id"})),show_header_toggle:!1});el.hass=this._hass;return el})}}customElements.define("hui-unused-entities",hui_unused_entities_HuiUnusedEntities)}}]);
//# sourceMappingURL=1e809ac2a9217250b201.chunk.js.map