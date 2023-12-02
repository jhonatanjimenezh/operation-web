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
                    <a href="index.html" data-type="index-link">operation-web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7ce1403889003ff12c5520b36fe2231151a32f498ece4865b004829786416143fa29d8a3dd229fb162a86002c08220a3b5edf7e12ebe58ef70b1cd674e97cb73"' : 'data-bs-target="#xs-components-links-module-AppModule-7ce1403889003ff12c5520b36fe2231151a32f498ece4865b004829786416143fa29d8a3dd229fb162a86002c08220a3b5edf7e12ebe58ef70b1cd674e97cb73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7ce1403889003ff12c5520b36fe2231151a32f498ece4865b004829786416143fa29d8a3dd229fb162a86002c08220a3b5edf7e12ebe58ef70b1cd674e97cb73"' :
                                            'id="xs-components-links-module-AppModule-7ce1403889003ff12c5520b36fe2231151a32f498ece4865b004829786416143fa29d8a3dd229fb162a86002c08220a3b5edf7e12ebe58ef70b1cd674e97cb73"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengeModule.html" data-type="entity-link" >ChallengeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ChallengeModule-0d616f1da4801888e28538099adadb90a8e31a65e4795198061eb0edf189a3be701eea6359002b7ef36323958401da23c27277cde943e33050603730f2ebbd0d"' : 'data-bs-target="#xs-components-links-module-ChallengeModule-0d616f1da4801888e28538099adadb90a8e31a65e4795198061eb0edf189a3be701eea6359002b7ef36323958401da23c27277cde943e33050603730f2ebbd0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChallengeModule-0d616f1da4801888e28538099adadb90a8e31a65e4795198061eb0edf189a3be701eea6359002b7ef36323958401da23c27277cde943e33050603730f2ebbd0d"' :
                                            'id="xs-components-links-module-ChallengeModule-0d616f1da4801888e28538099adadb90a8e31a65e4795198061eb0edf189a3be701eea6359002b7ef36323958401da23c27277cde943e33050603730f2ebbd0d"' }>
                                            <li class="link">
                                                <a href="components/ChallengeListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OperationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OperationFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengeRoutingModule.html" data-type="entity-link" >ChallengeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-e4df92045e95173950761434e435dcf9de25a60a8962aef4dfe2e83444befe2720e101dfb075b62a2b425d83afa36c8188873a304716452b663c6e80208180cc"' : 'data-bs-target="#xs-components-links-module-SharedModule-e4df92045e95173950761434e435dcf9de25a60a8962aef4dfe2e83444befe2720e101dfb075b62a2b425d83afa36c8188873a304716452b663c6e80208180cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-e4df92045e95173950761434e435dcf9de25a60a8962aef4dfe2e83444befe2720e101dfb075b62a2b425d83afa36c8188873a304716452b663c6e80208180cc"' :
                                            'id="xs-components-links-module-SharedModule-e4df92045e95173950761434e435dcf9de25a60a8962aef4dfe2e83444befe2720e101dfb075b62a2b425d83afa36c8188873a304716452b663c6e80208180cc"' }>
                                            <li class="link">
                                                <a href="components/ErrorModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OperationService.html" data-type="entity-link" >OperationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Operation.html" data-type="entity-link" >Operation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OperationResponse.html" data-type="entity-link" >OperationResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});