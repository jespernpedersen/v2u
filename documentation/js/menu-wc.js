'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vent2u documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' : 'data-target="#xs-components-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' :
                                            'id="xs-components-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' : 'data-target="#xs-injectables-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' :
                                        'id="xs-injectables-links-module-AppModule-9c677912aebf54bf257aec433560ba05"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmationModule.html" data-type="entity-link">ConfirmationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmationModule-f9cd15d006f2458dc1f05e6321a9c9ca"' : 'data-target="#xs-components-links-module-ConfirmationModule-f9cd15d006f2458dc1f05e6321a9c9ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmationModule-f9cd15d006f2458dc1f05e6321a9c9ca"' :
                                            'id="xs-components-links-module-ConfirmationModule-f9cd15d006f2458dc1f05e6321a9c9ca"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-1f5fc8061260cd412494bc69ba31af85"' : 'data-target="#xs-components-links-module-DashboardModule-1f5fc8061260cd412494bc69ba31af85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-1f5fc8061260cd412494bc69ba31af85"' :
                                            'id="xs-components-links-module-DashboardModule-1f5fc8061260cd412494bc69ba31af85"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link">GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GameModule-5c4072b1e8b7c7e31180fbe9e795f67a"' : 'data-target="#xs-components-links-module-GameModule-5c4072b1e8b7c7e31180fbe9e795f67a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameModule-5c4072b1e8b7c7e31180fbe9e795f67a"' :
                                            'id="xs-components-links-module-GameModule-5c4072b1e8b7c7e31180fbe9e795f67a"' }>
                                            <li class="link">
                                                <a href="components/GameDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameStartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameStartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameSliderModule.html" data-type="entity-link">GameSliderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GameSliderModule-0131e6098c58425637d0ddfe91009d5d"' : 'data-target="#xs-components-links-module-GameSliderModule-0131e6098c58425637d0ddfe91009d5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameSliderModule-0131e6098c58425637d0ddfe91009d5d"' :
                                            'id="xs-components-links-module-GameSliderModule-0131e6098c58425637d0ddfe91009d5d"' }>
                                            <li class="link">
                                                <a href="components/GameSliderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameSliderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GoBackModule.html" data-type="entity-link">GoBackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GoBackModule-9d18044e280ccdf1a2c7c8071f78e48a"' : 'data-target="#xs-components-links-module-GoBackModule-9d18044e280ccdf1a2c7c8071f78e48a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GoBackModule-9d18044e280ccdf1a2c7c8071f78e48a"' :
                                            'id="xs-components-links-module-GoBackModule-9d18044e280ccdf1a2c7c8071f78e48a"' }>
                                            <li class="link">
                                                <a href="components/GoBackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoBackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HumidityModule.html" data-type="entity-link">HumidityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HumidityModule-aac60596efbb75021a097d5b16554161"' : 'data-target="#xs-components-links-module-HumidityModule-aac60596efbb75021a097d5b16554161"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HumidityModule-aac60596efbb75021a097d5b16554161"' :
                                            'id="xs-components-links-module-HumidityModule-aac60596efbb75021a097d5b16554161"' }>
                                            <li class="link">
                                                <a href="components/HumidityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HumidityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultModule.html" data-type="entity-link">ResultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultModule-8e6196f56bf7ea77e64654e8cbc94a06"' : 'data-target="#xs-components-links-module-ResultModule-8e6196f56bf7ea77e64654e8cbc94a06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultModule-8e6196f56bf7ea77e64654e8cbc94a06"' :
                                            'id="xs-components-links-module-ResultModule-8e6196f56bf7ea77e64654e8cbc94a06"' }>
                                            <li class="link">
                                                <a href="components/ResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomFeelingsModule.html" data-type="entity-link">RoomFeelingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomFeelingsModule-30e4ebaf086e312127b4b7d78ce1b6c0"' : 'data-target="#xs-components-links-module-RoomFeelingsModule-30e4ebaf086e312127b4b7d78ce1b6c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomFeelingsModule-30e4ebaf086e312127b4b7d78ce1b6c0"' :
                                            'id="xs-components-links-module-RoomFeelingsModule-30e4ebaf086e312127b4b7d78ce1b6c0"' }>
                                            <li class="link">
                                                <a href="components/RoomFeelingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomFeelingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link">StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusModule-3f978a75918405ecbc238b3d164b6092"' : 'data-target="#xs-components-links-module-StatusModule-3f978a75918405ecbc238b3d164b6092"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusModule-3f978a75918405ecbc238b3d164b6092"' :
                                            'id="xs-components-links-module-StatusModule-3f978a75918405ecbc238b3d164b6092"' }>
                                            <li class="link">
                                                <a href="components/StatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemperatureModule.html" data-type="entity-link">TemperatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemperatureModule-60bfa3a4c108ca4cb04eb2b5a4ad70ce"' : 'data-target="#xs-components-links-module-TemperatureModule-60bfa3a4c108ca4cb04eb2b5a4ad70ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemperatureModule-60bfa3a4c108ca4cb04eb2b5a4ad70ce"' :
                                            'id="xs-components-links-module-TemperatureModule-60bfa3a4c108ca4cb04eb2b5a4ad70ce"' }>
                                            <li class="link">
                                                <a href="components/TemperatureComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemperatureComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VotingModule.html" data-type="entity-link">VotingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VotingModule-ed301095f489c0f09584803da4d4284c"' : 'data-target="#xs-components-links-module-VotingModule-ed301095f489c0f09584803da4d4284c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VotingModule-ed301095f489c0f09584803da4d4284c"' :
                                            'id="xs-components-links-module-VotingModule-ed301095f489c0f09584803da4d4284c"' }>
                                            <li class="link">
                                                <a href="components/VotingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VotingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZoneGridModule.html" data-type="entity-link">ZoneGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZoneGridModule-09a310100dd0f6aefb409b6d6e703265"' : 'data-target="#xs-components-links-module-ZoneGridModule-09a310100dd0f6aefb409b6d6e703265"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZoneGridModule-09a310100dd0f6aefb409b6d6e703265"' :
                                            'id="xs-components-links-module-ZoneGridModule-09a310100dd0f6aefb409b6d6e703265"' }>
                                            <li class="link">
                                                <a href="components/VentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ZoneGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZoneGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZoneViewModule.html" data-type="entity-link">ZoneViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' : 'data-target="#xs-components-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' :
                                            'id="xs-components-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' }>
                                            <li class="link">
                                                <a href="components/ZoneViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZoneViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' : 'data-target="#xs-injectables-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' :
                                        'id="xs-injectables-links-module-ZoneViewModule-b42681c55722578d1c1a162bab4cf420"' }>
                                        <li class="link">
                                            <a href="injectables/RoomsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RoomsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCredentials.html" data-type="entity-link">LoginCredentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/Room.html" data-type="entity-link">Room</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vent.html" data-type="entity-link">Vent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChangeRequestService.html" data-type="entity-link">ChangeRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomsMockService.html" data-type="entity-link">RoomsMockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomsService.html" data-type="entity-link">RoomsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentsMockService.html" data-type="entity-link">VentsMockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentsService.html" data-type="entity-link">VentsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardGuard.html" data-type="entity-link">AuthGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});