/* eslint-disable @next/next/no-img-element */
import React from 'react'

function ActivitySidebar() {
    return (
        <div id="activitySidebar" className="hs-unfold-content sidebar sidebar-bordered sidebar-box-shadow">
            <div className="card card-lg sidebar-card">
                <div className="card-header">
                    <h4 className="card-header-title">Activity stream</h4>

                    {/* <!-- Toggle Button --> */}
                    <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-dark ml-2" href="#"
                        data-hs-unfold-options='{
                "target": "#activitySidebar",
                "type": "css-animation",
                "animationIn": "fadeInRight",
                "animationOut": "fadeOutRight",
                "hasOverlay": true,
                "smartPositionOff": true
                }'>
                        <i className="tio-clear tio-lg"></i>
                    </a>
                    {/* <!-- End Toggle Button --> */}
                </div>

                {/* <!-- Body --> */}
                <div className="card-body sidebar-body sidebar-scrollbar">
                    {/* <!-- Step --> */}
                    <ul className="step step-icon-sm step-avatar-sm">
                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                </div>

                                <div className="step-content">
                                    <h5 className="mb-1">Iana Robinson</h5>

                                    <p className="font-size-sm mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="tio-folder-bookmarked"></i> Fd-7</a></p>

                                    <ul className="list-group list-group-sm">
                                        {/* <!-- List Item --> */}
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col-6">
                                                    <div className="media">
                                                        <span className="mt-1 mr-2">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/excel.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="d-block font-size-sm text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <small className="d-block text-muted">12kb</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="media">
                                                        <span className="mt-1 mr-2">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/word.svg" alt="Image Description" />
                                                        </span>
                                                        <div className="media-body text-truncate">
                                                            <span className="d-block font-size-sm text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <small className="d-block text-muted">4kb</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <!-- End List Item --> */}
                                    </ul>

                                    <small className="text-muted text-uppercase">Now</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-dark">B</span>

                                <div className="step-content">
                                    <h5 className="mb-1">Bob Dean</h5>

                                    <p className="font-size-sm mb-1">Marked <a className="text-uppercase" href="#"><i className="tio-folder-bookmarked"></i> Fr-6</a> as <span className="badge badge-soft-success badge-pill"><span className="legend-indicator bg-success"></span>Completed</span></p>

                                    <small className="text-muted text-uppercase">Today</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                </div>

                                <div className="step-content">
                                    <h5 className="h5 mb-1">Crane</h5>

                                    <p className="font-size-sm mb-1">Added 5 card to <a href="#">Payments</a></p>

                                    <ul className="list-group list-group-sm">
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col">
                                                    <img className="img-fluid rounded ie-sidebar-activity-img" src="./assets/svg/illustrations/card-1.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded ie-sidebar-activity-img" src="./assets/svg/illustrations/card-2.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded ie-sidebar-activity-img" src="./assets/svg/illustrations/card-3.svg" alt="Image Description" />
                                                </div>
                                                <div className="col-auto align-self-center">
                                                    <div className="text-center">
                                                        <a href="#">+2</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <small className="text-muted text-uppercase">May 12</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-info">D</span>

                                <div className="step-content">
                                    <h5 className="mb-1">David Lidell</h5>

                                    <p className="font-size-sm mb-1">Added a new member to Front Dashboard</p>

                                    <small className="text-muted text-uppercase">May 15</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                </div>

                                <div className="step-content">
                                    <h5 className="mb-1">Rachel King</h5>

                                    <p className="font-size-sm mb-1">Marked <a className="text-uppercase" href="#"><i className="tio-folder-bookmarked"></i> Fr-3</a> as <span className="badge badge-soft-success badge-pill"><span className="legend-indicator bg-success"></span>Completed</span></p>

                                    <small className="text-muted text-uppercase">Apr 29</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                </div>

                                <div className="step-content">
                                    <h5 className="mb-1">Finch Hoot</h5>

                                    <p className="font-size-sm mb-1">Earned a Top endorsed <i className="tio-verified text-primary"></i> badge</p>

                                    <small className="text-muted text-uppercase">Apr 06</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}

                        {/* <!-- Step Item --> */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-primary">
                                    <i className="tio-user"></i>
                                </span>

                                <div className="step-content">
                                    <h5 className="mb-1">Project status updated</h5>

                                    <p className="font-size-sm mb-1">Marked <a className="text-uppercase" href="#"><i className="tio-folder-bookmarked"></i> Fr-3</a> as <span className="badge badge-soft-primary badge-pill"><span className="legend-indicator bg-primary"></span>In progress</span></p>

                                    <small className="text-muted text-uppercase">Feb 10</small>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Step Item --> */}
                    </ul>
                    {/* <!-- End Step --> */}

                    <a className="btn btn-block btn-white" href="#">View all <i className="tio-chevron-right"></i></a>
                </div>
                {/* <!-- End Body --> */}
            </div>
        </div>
    )
}

export default ActivitySidebar
