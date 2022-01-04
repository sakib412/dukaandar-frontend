/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function SideBar() {
    const router = useRouter()
    const currentRoute = router.pathname
    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered ">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    <div className="navbar-brand-wrapper justify-content-between">
                        {/* <!-- Logo --> */}

                        <Link href='/'>
                            <a className="navbar-brand" aria-label="Front">
                                <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" />
                                <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" />
                            </a>
                        </Link>

                        {/* <!-- End Logo --> */}

                        {/* <!-- Navbar Vertical Toggle --> */}
                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark">
                            <i className="tio-clear tio-lg"></i>
                        </button>
                        {/* <!-- End Navbar Vertical Toggle --> */}
                    </div>

                    {/* <!-- Content --> */}
                    <div className="navbar-vertical-content">
                        <ul className="navbar-nav navbar-nav-lg nav-tabs">
                            {/* <!-- Dashboards --> */}
                            <li className="navbar-vertical-aside-has-menu">
                                <a className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle active" href="#" title="Dashboards">
                                    <i className="tio-home-vs-1-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Dashboards</span>
                                </a>

                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="./index.html" title="Default">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Default</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="./dashboard-alternative.html" title="Alternative">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Alternative</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- End Dashboards --> */}

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Pages">Pages</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            {/* <!-- Pages --> */}
                            <li className="navbar-vertical-aside-has-menu">
                                <a className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " href="#" title="Pages">
                                    <i className="tio-pages-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Pages</span>
                                </a>

                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub">


                                    <li className="navbar-vertical-aside-has-menu ">
                                        <a className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="#" title="User Profile">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">User Profile <span className="badge badge-primary badge-pill ml-1">5</span></span>
                                        </a>

                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./user-profile.html" title="Profile">
                                                    <span className="tio-circle-outlined nav-indicator-icon"></span>
                                                    <span className="text-truncate">Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./user-profile-teams.html" title="Teams">
                                                    <span className="tio-circle-outlined nav-indicator-icon"></span>
                                                    <span className="text-truncate">Teams</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./user-profile-projects.html" title="Projects">
                                                    <span className="tio-circle-outlined nav-indicator-icon"></span>
                                                    <span className="text-truncate">Projects</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./user-profile-connections.html" title="Connections">
                                                    <span className="tio-circle-outlined nav-indicator-icon"></span>
                                                    <span className="text-truncate">Connections</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./user-profile-my-profile.html" title="My Profile">
                                                    <span className="tio-circle-outlined nav-indicator-icon"></span>
                                                    <span className="text-truncate">My Profile</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>



                                    <li className="nav-item">
                                        <a href='/signup' className={`nav-link ${currentRoute === '/signup' ? 'active' : ''}`} title="Sign Up">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Sign Up</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- End Pages --> */}



                            <li className="nav-item ">
                                <a className="js-nav-tooltip-link nav-link " href="/signup" title="Welcome page" data-placement="left">
                                    <i className="tio-visible-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Sign Up</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Layouts">Layouts</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="nav-item ">
                                <a className="js-nav-tooltip-link nav-link " href="./layouts/layouts.html" title="Layouts" data-placement="left">
                                    <i className="tio-dashboard-vs-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Layouts</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <div className="nav-divider"></div>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Documentation">Documentation</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="nav-item ">
                                <a className="js-nav-tooltip-link nav-link" href="./documentation/index.html" title="Documentation" data-placement="left">
                                    <i className="tio-book-opened nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Documentation <span className="badge badge-primary badge-pill ml-1">v1.1</span></span>
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a className="js-nav-tooltip-link nav-link" href="./documentation/typography.html" title="Components" data-placement="left">
                                    <i className="tio-layers-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Components</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            {/* <!-- Front Builder --> */}
                            <li className="nav-item nav-footer-item ">
                                <a className="d-none d-md-flex js-hs-unfold-invoker nav-link nav-link-toggle" href="#"
                                    data-hs-unfold-options='{
                                    "target": "#styleSwitcherDropdown",
                                    "type": "css-animation",
                                    "animationIn": "fadeInRight",
                                    "animationOut": "fadeOutRight",
                                    "hasOverlay": true,
                                    "smartPositionOff": true
                                    }'>
                                    <i className="tio-tune nav-icon"></i>
                                </a>
                                <a className="d-flex d-md-none nav-link nav-link-toggle" href="#">
                                    <i className="tio-tune nav-icon"></i>
                                </a>
                            </li>
                            {/* <!-- End Front Builder --> */}

                            {/* <!-- Help --> */}
                            <li className="navbar-vertical-aside-has-menu nav-footer-item ">
                                <a className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " href="#" title="Help">
                                    <i className="tio-home-vs-1-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Help</span>
                                </a>

                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Resources &amp; tutorials">
                                            <i className="tio-book-outlined dropdown-item-icon"></i> Resources &amp; tutorials
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Keyboard shortcuts">
                                            <i className="tio-command-key dropdown-item-icon"></i> Keyboard shortcuts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Connect other apps">
                                            <i className="tio-alt dropdown-item-icon"></i> Connect other apps
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="What's new?">
                                            <i className="tio-gift dropdown-item-icon"></i> Whats new?
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Contact support">
                                            <i className="tio-chat-outlined dropdown-item-icon"></i> Contact support
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- End Help --> */}

                            {/* <!-- Language --> */}
                            <li className="navbar-vertical-aside-has-menu nav-footer-item ">
                                <a className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " href="#" title="Language">
                                    <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Language</span>
                                </a>

                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="English (US)">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                                            English (US)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="English (UK)">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                                            English (UK)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Deutsch">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                                            Deutsch
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Dansk">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                                            Dansk
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="Italiano">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                                            Italiano
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" title="中文 (繁體)">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
                                            中文 (繁體)
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- End Language --> */}
                        </ul>
                    </div>
                    {/* <!-- End Content --> */}

                    {/* <!-- Footer --> */}
                    <div className="navbar-vertical-footer">
                        <ul className="navbar-vertical-footer-list">
                            <li className="navbar-vertical-footer-list-item">
                                {/* <!-- Unfold --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                                                "target": "#styleSwitcherDropdown",
                                                "type": "css-animation",
                                                "animationIn": "fadeInRight",
                                                "animationOut": "fadeOutRight",
                                                "hasOverlay": true,
                                                "smartPositionOff": true
                                            }'>
                                        <i className="tio-tune"></i>
                                    </a>
                                </div>
                                {/* <!-- End Unfold --> */}
                            </li>

                            <li className="navbar-vertical-footer-list-item">
                                {/* <!-- Other Links --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                                                "target": "#otherLinksDropdown",
                                                "type": "css-animation",
                                                "animationIn": "slideInDown",
                                                "hideOnScroll": true
                                            }'>
                                        <i className="tio-help-outlined"></i>
                                    </a>

                                    <div id="otherLinksDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown">
                                        <span className="dropdown-header">Help</span>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-book-outlined dropdown-item-icon"></i>
                                            <span className="text-truncate pr-2" title="Resources &amp; tutorials">Resources &amp; tutorials</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-command-key dropdown-item-icon"></i>
                                            <span className="text-truncate pr-2" title="Keyboard shortcuts">Keyboard shortcuts</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-alt dropdown-item-icon"></i>
                                            <span className="text-truncate pr-2" title="Connect other apps">Connect other apps</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-gift dropdown-item-icon"></i>
                                            <span className="text-truncate pr-2" title="What's new?">Whats new?</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <span className="dropdown-header">Contacts</span>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-chat-outlined dropdown-item-icon"></i>
                                            <span className="text-truncate pr-2" title="Contact support">Contact support</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Other Links --> */}
                            </li>

                            <li className="navbar-vertical-footer-list-item">
                                {/* <!-- Language --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                                                "target": "#languageDropdown",
                                                "type": "css-animation",
                                                "animationIn": "slideInDown",
                                                "hideOnScroll": true
                                                }'>
                                        <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                                    </a>

                                    <div id="languageDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown">
                                        <span className="dropdown-header">Select language</span>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="English">English (US)</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="English">English (UK)</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="Deutsch">Deutsch</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="Dansk">Dansk</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="Italiano">Italiano</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
                                            <span className="text-truncate pr-2" title="中文 (繁體)">中文 (繁體)</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Language --> */}
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End Footer --> */}
                </div>
            </div>
        </aside>
    )
}

export default SideBar
