/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import SearchForm from './searchForm'

function Header() {
    return (
        <>
            <SearchForm />
            <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
                <div className="navbar-nav-wrap">
                    <div className="navbar-brand-wrapper">
                        {/* <!-- Logo --> */}
                        <Link href="/">
                            <a className="navbar-brand" aria-label="Front">
                                <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" />
                                <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" />
                            </a>
                        </Link>
                        {/* <!-- End Logo --> */}
                    </div>

                    <div className="navbar-nav-wrap-content-left">
                        {/* <!-- Navbar Vertical Toggle --> */}
                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker close mr-3">
                            <i className="tio-first-page navbar-vertical-aside-toggle-short-align" data-toggle="tooltip" data-placement="right" title="Collapse"></i>
                            <i className="tio-last-page navbar-vertical-aside-toggle-full-align" data-template='<div className="tooltip d-none d-sm-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-toggle="tooltip" data-placement="right" title="Expand"></i>
                        </button>
                        {/* <!-- End Navbar Vertical Toggle --> */}

                        {/* <!-- Search Form --> */}
                        <div className="d-none d-md-block">
                            <form className="position-relative">
                                {/* <!-- Input Group --> */}
                                <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="tio-search"></i>
                                        </div>
                                    </div>
                                    <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front"
                                        data-hs-form-search-options='{
                                        "clearIcon": "#clearSearchResultsIcon",
                                        "dropMenuElement": "#searchDropdownMenu",
                                        "dropMenuOffset": 20,
                                        "toggleIconOnFocus": true,
                                        "activeClass": "focus"
                                        }' />
                                    <a className="input-group-append" href="#">
                                        <span className="input-group-text">
                                            <i id="clearSearchResultsIcon" className="tio-clear" style={{ display: "none" }}></i>
                                        </span>
                                    </a>
                                </div>
                                {/* <!-- End Input Group --> */}

                                {/* <!-- Card Search Content --> */}
                                <div id="searchDropdownMenu" className="hs-form-search-menu-content card dropdown-menu dropdown-card overflow-hidden">
                                    {/* <!-- Body --> */}
                                    <div className="card-body-height py-3">
                                        <small className="dropdown-header mb-n2">Recent searches</small>

                                        <div className="dropdown-item bg-transparent text-wrap my-2">
                                            <span className="h4 mr-1">
                                                <a className="btn btn-xs btn-soft-dark btn-pill" href="./index.html">
                                                    Gulp <i className="tio-search ml-1"></i>
                                                </a>
                                            </span>
                                            <span className="h4">
                                                <a className="btn btn-xs btn-soft-dark btn-pill" href="./index.html">
                                                    Notification panel <i className="tio-search ml-1"></i>
                                                </a>
                                            </span>
                                        </div>

                                        <div className="dropdown-divider my-3"></div>

                                        <small className="dropdown-header mb-n2">Tutorials</small>

                                        <a className="dropdown-item my-2" href="./index.html">
                                            <div className="media align-items-center">
                                                <span className="icon icon-xs icon-soft-dark icon-circle mr-2">
                                                    <i className="tio-tune"></i>
                                                </span>

                                                <div className="media-body text-truncate">
                                                    <span>How to set up Gulp?</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item my-2" href="./index.html">
                                            <div className="media align-items-center">
                                                <span className="icon icon-xs icon-soft-dark icon-circle mr-2">
                                                    <i className="tio-paint-bucket"></i>
                                                </span>

                                                <div className="media-body text-truncate">
                                                    <span>How to change theme color?</span>
                                                </div>
                                            </div>
                                        </a>

                                        <div className="dropdown-divider my-3"></div>

                                        <small className="dropdown-header mb-n2">Members</small>

                                        <a className="dropdown-item my-2" href="./index.html">
                                            <div className="media align-items-center">
                                                <img className="avatar avatar-xs avatar-circle mr-2" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                <div className="media-body text-truncate">
                                                    <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item my-2" href="./index.html">
                                            <div className="media align-items-center">
                                                <img className="avatar avatar-xs avatar-circle mr-2" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                <div className="media-body text-truncate">
                                                    <span>David Harrison</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item my-2" href="./index.html">
                                            <div className="media align-items-center">
                                                <div className="avatar avatar-xs avatar-soft-info avatar-circle mr-2">
                                                    <span className="avatar-initials">A</span>
                                                </div>
                                                <div className="media-body text-truncate">
                                                    <span>Anne Richard</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- End Body --> */}

                                    {/* <!-- Footer --> */}
                                    <a className="card-footer text-center" href="./index.html">
                                        See all results
                                        <i className="tio-chevron-right"></i>
                                    </a>
                                    {/* <!-- End Footer --> */}
                                </div>
                                {/* <!-- End Card Search Content --> */}
                            </form>
                        </div>
                        {/* <!-- End Search Form --> */}
                    </div>

                    {/* <!-- Secondary Content --> */}
                    <div className="navbar-nav-wrap-content-right">
                        {/* <!-- Navbar --> */}
                        <ul className="navbar-nav align-items-center flex-row">
                            <li className="nav-item d-md-none">
                                {/* <!-- Search Trigger --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                       "target": "#searchDropdown",
                       "type": "css-animation",
                       "animationIn": "fadeIn",
                       "hasOverlay": "rgba(46, 52, 81, 0.1)",
                       "closeBreakpoint": "md"
                     }'>
                                        <i className="tio-search"></i>
                                    </a>
                                </div>
                                {/* <!-- End Search Trigger --> */}
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                                {/* <!-- Notification --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                       "target": "#notificationDropdown",
                       "type": "css-animation"
                     }'>
                                        <i className="tio-notifications-on-outlined"></i>
                                        <span className="btn-status btn-sm-status btn-status-danger"></span>
                                    </a>

                                    <div id="notificationDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu" style={{ width: "25rem" }}>
                                        {/* <!-- Header --> */}
                                        <div className="card-header">
                                            <span className="card-title h4">Notifications</span>

                                            {/* <!-- Unfold --> */}
                                            <div className="hs-unfold">
                                                <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#"
                                                    data-hs-unfold-options='{
                             "target": "#notificationSettingsOneDropdown",
                             "type": "css-animation"
                           }'>
                                                    <i className="tio-more-vertical"></i>
                                                </a>
                                                <div id="notificationSettingsOneDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="tio-archive dropdown-item-icon"></i> Archive all
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="tio-all-done dropdown-item-icon"></i> Mark all as read
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="tio-toggle-off dropdown-item-icon"></i> Disable notifications
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="tio-gift dropdown-item-icon"></i> Whats new?
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <span className="dropdown-header">Feedback</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="tio-chat-outlined dropdown-item-icon"></i> Report
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- End Unfold --> */}
                                        </div>
                                        {/* <!-- End Header --> */}

                                        {/* <!-- Nav --> */}
                                        <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="notificationNavOne-tab" data-toggle="tab" href="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="notificationNavTwo-tab" data-toggle="tab" href="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                                            </li>
                                        </ul>
                                        {/* <!-- End Nav --> */}

                                        {/* <!-- Body --> */}
                                        <div className="card-body-height">
                                            {/* <!-- Tab Content --> */}
                                            <div className="tab-content" id="notificationTabContent">
                                                <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck1" defaultChecked />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck1"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Brian Warner</span>
                                                                    <p className="card-text font-size-sm">changed an issue from In Progress to <span className="badge badge-success">Review</span></p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">2hr</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck2" defaultChecked />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck2"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Klara Hampton</span>
                                                                    <p className="card-text font-size-sm">mentioned you in a comment</p>
                                                                    <blockquote className="blockquote blockquote-sm">
                                                                        Nice work, love! You really nailed it. Keep it up!
                                                                    </blockquote>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">10hr</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck4" defaultChecked />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck4"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Ruby Walter</span>
                                                                    <p className="card-text font-size-sm">joined the Slack group HS Team</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">3dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck3" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck3"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/svg/brands/google.svg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">from Google</span>
                                                                    <p className="card-text font-size-sm">Start using forms to capture the information of prospects visiting your Google website</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck5" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck5"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Sara Villar</span>
                                                                    <p className="card-text font-size-sm">completed <i className="tio-folder-bookmarked text-primary"></i> FD-7 task</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">2mn</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}
                                                    </ul>
                                                </div>

                                                <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck7" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck7"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">A</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Anne Richard</span>
                                                                    <p className="card-text font-size-sm">accepted your invitation to join Notion</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">1dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck6" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck6"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Finch Hoot</span>
                                                                    <p className="card-text font-size-sm">left Slack group HS projects</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">3dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck8" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck8"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                                            <span className="avatar-initials">HS</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Htmlstream</span>
                                                                    <p className="card-text font-size-sm">you earned a Top endorsed <i className="tio-verified text-primary"></i> badge</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">6dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck9" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck9"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Linda Bates</span>
                                                                    <p className="card-text font-size-sm">Accepted your connection</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}

                                                        {/* <!-- Item --> */}
                                                        <li className="list-group-item custom-checkbox-list-wrapper">
                                                            <div className="row">
                                                                <div className="col-auto position-static">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="custom-control custom-checkbox custom-checkbox-list">
                                                                            <input type="checkbox" className="custom-control-input" id="notificationCheck10" />
                                                                            <label className="custom-control-label" htmlFor="notificationCheck10"></label>
                                                                            <span className="custom-checkbox-list-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">L</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col ml-n3">
                                                                    <span className="card-title h5">Lewis Clarke</span>
                                                                    <p className="card-text font-size-sm">completed <i className="tio-folder-bookmarked text-primary"></i> FD-134 task</p>
                                                                </div>
                                                                <small className="col-auto text-muted text-cap">2mn</small>
                                                            </div>
                                                            <a className="stretched-link" href="#"></a>
                                                        </li>
                                                        {/* <!-- End Item --> */}
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- End Tab Content --> */}
                                        </div>
                                        {/* <!-- End Body --> */}

                                        {/* <!-- Card Footer --> */}
                                        <a className="card-footer text-center" href="#">
                                            View all notifications
                                            <i className="tio-chevron-right"></i>
                                        </a>
                                        {/* <!-- End Card Footer --> */}
                                    </div>
                                </div>
                                {/* <!-- End Notification --> */}
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                                {/* <!-- Apps --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                       "target": "#appsDropdown",
                       "type": "css-animation"
                     }'>
                                        <i className="tio-menu-vs-outlined"></i>
                                    </a>

                                    <div id="appsDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu" style={{ width: "25rem" }}>
                                        {/* <!-- Header --> */}
                                        <div className="card-header">
                                            <span className="card-title h4">Web apps &amp; services</span>
                                        </div>
                                        {/* <!-- End Header --> */}

                                        {/* <!-- Body --> */}
                                        <div className="card-body card-body-height">
                                            {/* <!-- Nav --> */}
                                            <div className="nav nav-pills flex-column">
                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="mr-3">
                                                            <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/atlassian.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">Atlassian</span>
                                                            <span className="d-block font-size-sm text-body">Security and control across Cloud</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="mr-3">
                                                            <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/slack.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">Slack <span className="badge badge-primary badge-pill text-uppercase ml-1">Try</span></span>
                                                            <span className="d-block font-size-sm text-body">Email collaboration software</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="mr-3">
                                                            <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/google-webdev.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">Google webdev</span>
                                                            <span className="d-block font-size-sm text-body">Work involved in developing a website</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="mr-3">
                                                            <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/frontapp.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">Frontapp</span>
                                                            <span className="d-block font-size-sm text-body">The inbox for teams</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="mr-3">
                                                            <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/illustrations/review-rating-shield.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">HS Support</span>
                                                            <span className="d-block font-size-sm text-body">Customer service and support</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="nav-link" href="#">
                                                    <div className="media align-items-center">
                                                        <span className="avatar avatar-xs avatar-soft-dark mr-3">
                                                            <span className="avatar-initials"><i className="tio-apps"></i></span>
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="h5 mb-0">More Front products</span>
                                                            <span className="d-block font-size-sm text-body">Check out more HS products</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!-- End Nav --> */}
                                        </div>
                                        {/* <!-- End Body --> */}

                                        {/* <!-- Footer --> */}
                                        <a className="card-footer text-center" href="#">
                                            View all apps
                                            <i className="tio-chevron-right"></i>
                                        </a>
                                        {/* <!-- End Footer --> */}
                                    </div>
                                </div>
                                {/* <!-- End Apps --> */}
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                                {/* <!-- Activity --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                      "target": "#activitySidebar",
                      "type": "css-animation",
                      "animationIn": "fadeInRight",
                      "animationOut": "fadeOutRight",
                      "hasOverlay": true,
                      "smartPositionOff": true
                     }'>
                                        <i className="tio-voice-line"></i>
                                    </a>
                                </div>
                                {/* <!-- Activity --> */}
                            </li>

                            <li className="nav-item">
                                {/* <!-- Account --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="#"
                                        data-hs-unfold-options='{
                       "target": "#accountNavbarDropdown",
                       "type": "css-animation"
                     }'>
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                        </div>
                                    </a>

                                    <div id="accountNavbarDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account" style={{ width: "16rem" }}>
                                        <div className="dropdown-item-text">
                                            <div className="media align-items-center">
                                                <div className="avatar avatar-sm avatar-circle mr-2">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                                <div className="media-body">
                                                    <span className="card-title h5">Mark Williams</span>
                                                    <span className="card-text">mark@example.com</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown-divider"></div>

                                        {/* <!-- Unfold --> */}
                                        <div className="hs-unfold w-100">
                                            <a className="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="#"
                                                data-hs-unfold-options='{
                           "target": "#navSubmenuPagesAccountDropdown1",
                           "event": "hover"
                         }'>
                                                <span className="text-truncate pr-2" title="Set status">Set status</span>
                                                <i className="tio-chevron-right navbar-dropdown-submenu-item-invoker ml-auto"></i>
                                            </a>

                                            <div id="navSubmenuPagesAccountDropdown1" className="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-success mr-1"></span>
                                                    <span className="text-truncate pr-2" title="Available">Available</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-danger mr-1"></span>
                                                    <span className="text-truncate pr-2" title="Busy">Busy</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-warning mr-1"></span>
                                                    <span className="text-truncate pr-2" title="Away">Away</span>
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">
                                                    <span className="text-truncate pr-2" title="Reset status">Reset status</span>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Unfold --> */}

                                        <a className="dropdown-item" href="#">
                                            <span className="text-truncate pr-2" title="Profile &amp; account">Profile &amp; account</span>
                                        </a>

                                        <a className="dropdown-item" href="#">
                                            <span className="text-truncate pr-2" title="Settings">Settings</span>
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        <a className="dropdown-item" href="#">
                                            <div className="media align-items-center">
                                                <div className="avatar avatar-sm avatar-dark avatar-circle mr-2">
                                                    <span className="avatar-initials">HS</span>
                                                </div>
                                                <div className="media-body">
                                                    <span className="card-title h5">Htmlstream <span className="badge badge-primary badge-pill text-uppercase ml-1">PRO</span></span>
                                                    <span className="card-text">hs.example.com</span>
                                                </div>
                                            </div>
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        {/* <!-- Unfold --> */}
                                        <div className="hs-unfold w-100">
                                            <a className="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="#"
                                                data-hs-unfold-options='{
                           "target": "#navSubmenuPagesAccountDropdown2",
                           "event": "hover"
                         }'>
                                                <span className="text-truncate pr-2" title="Customization">Customization</span>
                                                <i className="tio-chevron-right navbar-dropdown-submenu-item-invoker  ml-auto"></i>
                                            </a>

                                            <div id="navSubmenuPagesAccountDropdown2" className="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                                                <a className="dropdown-item" href="#">
                                                    <span className="text-truncate pr-2" title="Invite people">Invite people</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="text-truncate pr-2" title="Analytics">Analytics</span>
                                                    <i className="tio-open-in-new"></i>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="text-truncate pr-2" title="Customize Front">Customize Front</span>
                                                    <i className="tio-open-in-new"></i>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Unfold --> */}

                                        <a className="dropdown-item" href="#">
                                            <span className="text-truncate pr-2" title="Manage team">Manage team</span>
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        <a className="dropdown-item" href="#">
                                            <span className="text-truncate pr-2" title="Sign out">Sign out</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- End Account --> */}
                            </li>
                        </ul>
                        {/* <!-- End Navbar --> */}
                    </div>
                    {/* <!-- End Secondary Content --> */}
                </div>
            </header>


        </>
    )
}

export default Header
