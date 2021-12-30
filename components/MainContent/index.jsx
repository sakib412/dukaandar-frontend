/* eslint-disable @next/next/no-img-element */
import React from 'react'

function MainContent() {
    return (

        <main id="content" role="main" className="main pointer-event">
            {/* <!-- Content --> */}
            <div className="content container-fluid">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <h1 className="page-header-title">Dashboard</h1>
                        </div>

                        <div className="col-sm-auto">
                            <a className="btn btn-primary" href="#" data-toggle="modal" data-target="#inviteUserModal">
                                <i className="tio-user-add mr-1"></i> Invite users
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Page Header --> */}

                {/* <!-- Stats --> */}
                <div className="row gx-2 gx-lg-3">
                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <a className="card card-hover-shadow h-100" href="#">
                            <div className="card-body">
                                <h6 className="card-subtitle">Total Users</h6>

                                <div className="row align-items-center gx-2 mb-1">
                                    <div className="col-6">
                                        <span className="card-title h2">72,540</span>
                                    </div>

                                    <div className="col-6">
                                        {/* <!-- Chart --> */}
                                        <div className="chartjs-custom" style={{ height: "3rem" }}>
                                            <canvas className="js-chart"
                                                data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "k",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                                            </canvas>
                                        </div>
                                        {/* <!-- End Chart --> */}
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}

                                <span className="badge badge-soft-success">
                                    <i className="tio-trending-up"></i> 12.5%
                                </span>
                                <span className="text-body font-size-sm ml-1">from 70,104</span>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <a className="card card-hover-shadow h-100" href="#">
                            <div className="card-body">
                                <h6 className="card-subtitle">Sessions</h6>

                                <div className="row align-items-center gx-2 mb-1">
                                    <div className="col-6">
                                        <span className="card-title h2">29.4%</span>
                                    </div>

                                    <div className="col-6">
                                        {/* <!-- Chart --> */}
                                        <div className="chartjs-custom" style={{ height: "3rem" }}>
                                            <canvas className="js-chart"
                                                data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,20,18,17,15,17,30,30,35,25,18,30,31,35,35,90,90,90,85,100,120,120,120,100,90,75,75,75,90],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "%",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                                            </canvas>
                                        </div>
                                        {/* <!-- End Chart --> */}
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}

                                <span className="badge badge-soft-success">
                                    <i className="tio-trending-up"></i> 1.7%
                                </span>
                                <span className="text-body font-size-sm ml-1">from 29.1%</span>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <a className="card card-hover-shadow h-100" href="#">
                            <div className="card-body">
                                <h6 className="card-subtitle">Avg. Click Rate</h6>

                                <div className="row align-items-center gx-2 mb-1">
                                    <div className="col-6">
                                        <span className="card-title h2">56.8%</span>
                                    </div>

                                    <div className="col-6">
                                        {/* <!-- Chart --> */}
                                        <div className="chartjs-custom" style={{ height: "3rem" }}>
                                            <canvas className="js-chart"
                                                data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [25,18,30,31,35,35,60,60,60,75,21,20,24,20,18,17,15,17,30,120,120,120,100,90,75,90,90,90,75,70,60],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "%",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                                            </canvas>
                                        </div>
                                        {/* <!-- End Chart --> */}
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}

                                <span className="badge badge-soft-danger">
                                    <i className="tio-trending-down"></i> 4.4%
                                </span>
                                <span className="text-body font-size-sm ml-1">from 61.2%</span>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <a className="card card-hover-shadow h-100" href="#">
                            <div className="card-body">
                                <h6 className="card-subtitle">Pageviews</h6>

                                <div className="row align-items-center gx-2 mb-1">
                                    <div className="col-6">
                                        <span className="card-title h2">92,913</span>
                                    </div>

                                    <div className="col-6">
                                        {/* <!-- Chart --> */}
                                        <div className="chartjs-custom" style={{ height: "3rem" }}>
                                            <canvas className="js-chart"
                                                data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "k",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                                            </canvas>
                                        </div>
                                        {/* <!-- End Chart --> */}
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}

                                <span className="badge badge-soft-secondary">0.0%</span>
                                <span className="text-body font-size-sm ml-1">from 2,913</span>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>
                </div>
                {/* <!-- End Stats --> */}

                <div className="row gx-2 gx-lg-3">
                    <div className="col-lg-5 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <div className="card h-100">
                            {/* <!-- Header --> */}
                            <div className="card-header">
                                <h5 className="card-header-title">Import data into Front Dashboard</h5>

                                {/* <!-- Unfold --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                     "target": "#reportsOverviewDropdown2",
                     "type": "css-animation"
                   }'>
                                        <i className="tio-more-vertical"></i>
                                    </a>

                                    <div id="reportsOverviewDropdown2" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                                        <span className="dropdown-header">Settings</span>

                                        <a className="dropdown-item" href="#">
                                            <i className="tio-share dropdown-item-icon"></i> Share chart
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-download-to dropdown-item-icon"></i> Download
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-alt dropdown-item-icon"></i> Connect other apps
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

                            {/* <!-- Body --> */}
                            <div className="card-body">
                                <p>See and talk to your users and leads immediately by importing your data into the Front Dashboard platform.</p>

                                <ul className="list-group list-group-flush list-group-no-gutters">
                                    <li className="list-group-item py-3">
                                        <h5 className="modal-title">Import users from:</h5>
                                    </li>

                                    {/* <!-- List Group Item --> */}
                                    <li className="list-group-item py-3">
                                        <div className="media">
                                            <div className="mt-1 mr-3">
                                                <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/capsule.svg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h5 className="mb-0">Capsule</h5>
                                                        <span className="d-block font-size-sm">Users</span>
                                                    </div>

                                                    <div className="col-auto">
                                                        <a className="btn btn-sm btn-primary" href="#" title="Launch importer" target="_blank">
                                                            Launch <span className="d-none d-sm-inline-block">importer</span>
                                                            <i className="tio-open-in-new ml-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <!-- End Row --> */}
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- End List Group Item --> */}

                                    {/* <!-- List Group Item --> */}
                                    <li className="list-group-item py-3">
                                        <div className="media">
                                            <div className="mt-1 mr-3">
                                                <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/mailchimp.svg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h5 className="mb-0">Mailchimp</h5>
                                                        <span className="d-block font-size-sm">Users</span>
                                                    </div>

                                                    <div className="col-auto">
                                                        <a className="btn btn-sm btn-primary" href="#" title="Launch importer" target="_blank">
                                                            Launch <span className="d-none d-sm-inline-block">importer</span>
                                                            <i className="tio-open-in-new ml-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <!-- End Row --> */}
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- End List Group Item --> */}

                                    {/* <!-- List Group Item --> */}
                                    <li className="list-group-item py-3">
                                        <div className="media">
                                            <div className="mt-1 mr-3">
                                                <img className="avatar avatar-xs avatar-4by3" src="./assets/svg/brands/google-webdev.svg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h5 className="mb-0">Webdev</h5>
                                                        <span className="d-block font-size-sm">Users</span>
                                                    </div>

                                                    <div className="col-auto">
                                                        <a className="btn btn-sm btn-primary" href="#" title="Launch importer" target="_blank">
                                                            Launch <span className="d-none d-sm-inline-block">importer</span>
                                                            <i className="tio-open-in-new ml-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <!-- End Row --> */}
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- End List Group Item --> */}

                                    <li className="list-group-item"><small>Or you can <a href="#">sync data to Front Dashboard</a> to ensure your data is always up-to-date.</small></li>
                                </ul>
                            </div>
                            {/* <!-- End Body --> */}
                        </div>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-lg-7 mb-3 mb-lg-5">
                        {/* <!-- Card --> */}
                        <div className="card h-100">
                            {/* <!-- Header --> */}
                            <div className="card-header">
                                <h5 className="card-header-title">Monthly expenses</h5>

                                {/* <!-- Nav --> */}
                                <ul className="nav nav-segment" id="expensesTab" role="tablist">
                                    <li className="nav-item" data-toggle="chart-bar" data-datasets="thisWeek" data-trigger="click" data-action="toggle">
                                        <a className="nav-link active" href="#" data-toggle="tab">This week</a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart-bar" data-datasets="lastWeek" data-trigger="click" data-action="toggle">
                                        <a className="nav-link" href="#" data-toggle="tab">Last week</a>
                                    </li>
                                </ul>
                                {/* <!-- End Nav --> */}
                            </div>
                            {/* <!-- End Header --> */}

                            {/* <!-- Body --> */}
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-sm mb-2 mb-sm-0">
                                        <div className="d-flex align-items-center">
                                            <span className="h1 mb-0">35%</span>
                                            <span className="text-success ml-2">
                                                <i className="tio-trending-up"></i> 25.3%
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-sm-auto align-self-sm-end">
                                        {/* <!-- Legend Indicators --> */}
                                        <div className="row font-size-sm">
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-primary"></span> New
                                            </div>
                                            <div className="col-auto">
                                                <span className="legend-indicator"></span> Overdue
                                            </div>
                                        </div>
                                        {/* <!-- End Legend Indicators --> */}
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}

                                {/* <!-- Bar Chart --> */}
                                <div className="chartjs-custom">
                                    <canvas id="updatingData" style={{ height: "20rem" }}
                                        data-hs-chartjs-options='{
                          "type": "bar",
                          "data": {
                            "labels": ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10"],
                            "datasets": [{
                              "data": [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
                              "backgroundColor": "#377dff",
                              "hoverBackgroundColor": "#377dff",
                              "borderColor": "#377dff"
                            },
                            {
                              "data": [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
                              "backgroundColor": "#e7eaf3",
                              "borderColor": "#e7eaf3"
                            }]
                          },
                          "options": {
                            "scales": {
                              "yAxes": [{
                                "gridLines": {
                                  "color": "#e7eaf3",
                                  "drawBorder": false,
                                  "zeroLineColor": "#e7eaf3"
                                },
                                "ticks": {
                                  "beginAtZero": true,
                                  "stepSize": 100,
                                  "fontSize": 12,
                                  "fontColor": "#97a4af",
                                  "fontFamily": "Open Sans, sans-serif",
                                  "padding": 10,
                                  "postfix": "$"
                                }
                              }],
                              "xAxes": [{
                                "gridLines": {
                                  "display": false,
                                  "drawBorder": false
                                },
                                "ticks": {
                                  "fontSize": 12,
                                  "fontColor": "#97a4af",
                                  "fontFamily": "Open Sans, sans-serif",
                                  "padding": 5
                                },
                                "categoryPercentage": 0.5,
                                "maxBarThickness": "10"
                              }]
                            },
                            "cornerRadius": 2,
                            "tooltips": {
                              "prefix": "$",
                              "hasIndicator": true,
                              "mode": "index",
                              "intersect": false
                            },
                            "hover": {
                              "mode": "nearest",
                              "intersect": true
                            }
                          }
                        }'></canvas>
                                </div>
                                {/* <!-- End Bar Chart --> */}
                            </div>
                            {/* <!-- End Body --> */}
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                </div>
                {/* <!-- End Row --> */}

                {/* <!-- Card --> */}
                <div className="card mb-3 mb-lg-5">
                    {/* <!-- Header --> */}
                    <div className="card-header">
                        <div className="row justify-content-between align-items-center flex-grow-1">
                            <div className="col-12 col-md">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-header-title">Users</h5>

                                    {/* <!-- Datatable Info --> */}
                                    <div id="datatableCounterInfo" style={{ display: "none" }}>
                                        <div className="d-flex align-items-center">
                                            <span className="font-size-sm mr-3">
                                                <span id="datatableCounter">0</span>
                                                Selected
                                            </span>
                                            <a className="btn btn-sm btn-outline-danger" href="#">
                                                <i className="tio-delete-outlined"></i> Delete
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- End Datatable Info --> */}
                                </div>
                            </div>

                            <div className="col-auto">
                                {/* <!-- Filter --> */}
                                <div className="row align-items-sm-center">
                                    <div className="col-sm-auto">
                                        <div className="d-flex align-items-center mr-2">
                                            <span className="text-secondary mr-2">Status:</span>

                                            {/* <!-- Select --> */}
                                            <select className="js-select2-custom js-datatable-filter custom-select-sm" size="1" style={{ opacity: "0" }}
                                                data-target-column-index="2"
                                                data-hs-select2-options='{
                              "minimumResultsForSearch": "Infinity",
                              "customClass": "custom-select custom-select-sm custom-select-borderless",
                              "dropdownAutoWidth": true,
                              "width": true
                            }'>
                                                <option value="">All</option>
                                                <option value="successful">Successful</option>
                                                <option value="overdue">Overdue</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                            {/* <!-- End Select --> */}
                                        </div>
                                    </div>

                                    <div className="col-sm-auto">
                                        <div className="d-flex align-items-center mr-2">
                                            <span className="text-secondary mr-2">Signed up:</span>

                                            {/* <!-- Select --> */}
                                            <select className="js-select2-custom js-datatable-filter custom-select-sm" size="1" style={{ opacity: 0 }}
                                                data-target-column-index="5"
                                                data-hs-select2-options='{
                              "minimumResultsForSearch": "Infinity",
                              "customClass": "custom-select custom-select-sm custom-select-borderless",
                              "dropdownAutoWidth": true,
                              "width": true
                            }'>
                                                <option value="">All</option>
                                                <option value="1 year ago">1 year ago</option>
                                                <option value="6 months ago">6 months ago</option>
                                            </select>
                                            {/* <!-- End Select --> */}
                                        </div>
                                    </div>

                                    <div className="col-md">
                                        <form>
                                            {/* <!-- Search --> */}
                                            <div className="input-group input-group-merge input-group-flush">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="tio-search"></i>
                                                    </div>
                                                </div>
                                                <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                            </div>
                                            {/* <!-- End Search --> */}
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- End Filter --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Header --> */}

                    {/* <!-- Table --> */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                            data-hs-datatables-options='{
                   "columnDefs": [{
                      "targets": [0, 1, 4],
                      "orderable": false
                    }],
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "search": "#datatableSearch",
                   "entries": "#datatableEntries",
                   "pageLength": 8,
                   "isResponsive": false,
                   "isShowPaging": false,
                   "pagination": "datatablePagination"
                 }'>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="datatableCheckAll"></label>
                                        </div>
                                    </th>
                                    <th className="table-column-pl-0">Full name</th>
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Email</th>
                                    <th>Signed up</th>
                                    <th>User ID</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck2" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck2"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Unassigned</td>
                                    <td>amanda@example.com</td>
                                    <td>1 year ago</td>
                                    <td>67989</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck3" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck3"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-primary avatar-circle mr-2">
                                                <span className="avatar-initials">A</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Anne Richard</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Subscription</td>
                                    <td>anne@example.com</td>
                                    <td>6 months ago</td>
                                    <td>67326</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck4" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck4"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">David Harrison</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-danger"></span>Overdue
                                    </td>
                                    <td>Non-subscription</td>
                                    <td>david@example.com</td>
                                    <td>6 months ago</td>
                                    <td>55821</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck5" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck5"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Finch Hoot</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>finch@example.com</td>
                                    <td>1 year ago</td>
                                    <td>85214</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck6" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck6"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle mr-2">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Bob Dean</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Subscription</td>
                                    <td>bob@example.com</td>
                                    <td>6 months ago</td>
                                    <td>75470</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck7" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck7"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Ella Lauda <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>Ella@example.com</td>
                                    <td>1 year ago</td>
                                    <td>37534</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck8" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck8"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Sam Kart</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Non-subscription</td>
                                    <td>sam@example.com</td>
                                    <td>1 year ago</td>
                                    <td>57300</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck9" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck9"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Costa Quinn</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-danger"></span>Overdue
                                    </td>
                                    <td>Unassigned</td>
                                    <td>costa@example.com</td>
                                    <td>1 year ago</td>
                                    <td>71288</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck10" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck10"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-primary avatar-circle mr-2">
                                                <span className="avatar-initials">R</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Rachel Doe</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Unassigned</td>
                                    <td>rachel@example.com</td>
                                    <td>6 months ago</td>
                                    <td>95211</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck11" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck11"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle mr-2">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Brian Halligan</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>brian@example.com</td>
                                    <td>1 year ago</td>
                                    <td>58643</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck12" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck12"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Linda Bates</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>linda@example.com</td>
                                    <td>1 year ago</td>
                                    <td>44414</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck13" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck13"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-info avatar-circle mr-2">
                                                <span className="avatar-initials">C</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Chris Mathew <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Non-subscription</td>
                                    <td>chris@example.com</td>
                                    <td>1 year ago</td>
                                    <td>12569</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck14" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck14"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle mr-2">
                                                <span className="avatar-initials">L</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Lewis Clarke</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-danger"></span>Overdue
                                    </td>
                                    <td>Non-subscription</td>
                                    <td>lewis@example.com</td>
                                    <td>1 year ago</td>
                                    <td>54621</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck15" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck15"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Clarice Boone <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Non-subscription</td>
                                    <td>clarice@example.com</td>
                                    <td>6 months ago</td>
                                    <td>23485</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck16" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck16"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-danger avatar-circle mr-2">
                                                <span className="avatar-initials">M</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Mark Colbert</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success"></span>Successful
                                    </td>
                                    <td>Subscription</td>
                                    <td>mark@example.com</td>
                                    <td>6 months ago</td>
                                    <td>78463</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck17" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck17"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-info avatar-circle mr-2">
                                                <span className="avatar-initials">J</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Johnny Appleseed</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>johnny@example.com</td>
                                    <td>1 year ago</td>
                                    <td>23564</td>
                                </tr>

                                <tr>
                                    <td className="table-column-pr-0">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="usersDataCheck18" />
                                            <label className="custom-control-label" htmlFor="usersDataCheck18"></label>
                                        </div>
                                    </td>
                                    <td className="table-column-pl-0">
                                        <a className="media align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-sm avatar-soft-primary avatar-circle mr-2">
                                                <span className="avatar-initials">P</span>
                                            </div>
                                            <div className="media-body">
                                                <span className="h5 text-hover-primary mb-0">Phileas Fogg</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-warning"></span>Pending
                                    </td>
                                    <td>Subscription</td>
                                    <td>phileas@example.com</td>
                                    <td>6 months ago</td>
                                    <td>39199</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- End Table --> */}

                    {/* <!-- Footer --> */}
                    <div className="card-footer">
                        {/* <!-- Pagination --> */}
                        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <span className="mr-2">Showing:</span>

                                    {/* <!-- Select --> */}
                                    <select id="datatableEntries" className="js-select2-custom"
                                        data-hs-select2-options='{
                          "minimumResultsForSearch": "Infinity",
                          "customClass": "custom-select custom-select-sm custom-select-borderless",
                          "dropdownAutoWidth": true,
                          "width": true
                        }'>
                                        <option value="4">4</option>
                                        <option value="6">6</option>
                                        <option value="8" defaultChecked>8</option>
                                        <option value="12">12</option>
                                    </select>
                                    {/* <!-- End Select --> */}

                                    <span className="text-secondary mr-2">of</span>

                                    {/* <!-- Pagination Quantity --> */}
                                    <span id="datatableWithPaginationInfoTotalQty"></span>
                                </div>
                            </div>

                            <div className="col-sm-auto">
                                <div className="d-flex justify-content-center justify-content-sm-end">
                                    {/* <!-- Pagination --> */}
                                    <nav id="datatablePagination" aria-label="Activity pagination"></nav>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Pagination --> */}
                    </div>
                    {/* <!-- End Footer --> */}
                </div>
                {/* <!-- End Card --> */}

                <div className="row gx-2 gx-lg-3">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        {/* <!-- Card --> */}
                        <div className="card h-100">
                            {/* <!-- Header --> */}
                            <div className="card-header">
                                <h5 className="card-header-title">Transactions</h5>

                                {/* <!-- Daterangepicker --> */}
                                <button id="js-daterangepicker-predefined" className="btn btn-sm btn-ghost-secondary dropdown-toggle">
                                    <i className="tio-date-range"></i>
                                    <span className="js-daterangepicker-predefined-preview ml-1"></span>
                                </button>
                                {/* <!-- End Daterangepicker --> */}
                            </div>
                            {/* <!-- End Header --> */}

                            {/* <!-- Body --> */}
                            <div className="card-body">
                                {/* <!-- Chart --> */}
                                <div className="chartjs-custom mx-auto" style={{ height: "20rem" }}>
                                    <canvas className="js-chart-datalabels"
                                        data-hs-chartjs-options='{
                          "type": "bubble",
                          "data": {
                            "datasets": [
                              {
                                "label": "Label 1",
                                "data": [
                                  {"x": 55, "y": 65, "r": 99}
                                ],
                                "color": "#fff",
                                "backgroundColor": "gulpRGBA[#377dff,.9]",
                                "borderColor": "transparent"
                              },
                              {
                                "label": "Label 2",
                                "data": [
                                  {"x": 33, "y": 42, "r": 65}
                                ],
                                "color": "#fff",
                                "backgroundColor": "rgba(100, 0, 214, 0.8)",
                                "borderColor": "transparent"
                              },
                              {
                                "label": "Label 3",
                                "data": [
                                  {"x": 46, "y": 26, "r": 38}
                                ],
                                "color": "#fff",
                                "backgroundColor": "#00c9db",
                                "borderColor": "transparent"
                              }
                            ]
                          },
                          "options": {
                            "scales": {
                              "yAxes": [{
                                "gridLines": {
                                  "display": false
                                },
                                "ticks": {
                                  "display": false,
                                  "max": 100,
                                  "beginAtZero": true
                                }
                              }],
                              "xAxes": [{
                              "gridLines": {
                                  "display": false
                                },
                                "ticks": {
                                  "display": false,
                                  "max": 100,
                                  "beginAtZero": true
                                }
                              }]
                            },
                            "tooltips": false
                          }
                        }'></canvas>
                                </div>
                                {/* <!-- End Chart --> */}

                                {/* <!-- Legend Indicators --> */}
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <span className="legend-indicator bg-primary"></span> New
                                    </div>

                                    <div className="col-auto">
                                        <span className="legend-indicator" style={{ backgroundColor: "#7000f2" }}></span> Pending
                                    </div>

                                    <div className="col-auto">
                                        <span className="legend-indicator bg-info"></span> Failed
                                    </div>
                                </div>
                                {/* <!-- End Legend Indicators --> */}
                            </div>
                            {/* <!-- End Body --> */}
                        </div>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-lg-6">
                        {/* <!-- Card --> */}
                        <div className="card h-100">
                            {/* <!-- Header --> */}
                            <div className="card-header">
                                <h5 className="card-header-title">Reports overview</h5>

                                {/* <!-- Unfold --> */}
                                <div className="hs-unfold">
                                    <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#"
                                        data-hs-unfold-options='{
                     "target": "#reportsOverviewDropdown1",
                     "type": "css-animation"
                   }'>
                                        <i className="tio-more-vertical"></i>
                                    </a>

                                    <div id="reportsOverviewDropdown1" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                                        <span className="dropdown-header">Settings</span>

                                        <a className="dropdown-item" href="#">
                                            <i className="tio-share dropdown-item-icon"></i> Share reports
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-download-to dropdown-item-icon"></i> Download
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="tio-alt dropdown-item-icon"></i> Connect other apps
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

                            {/* <!-- Body --> */}
                            <div className="card-body">
                                <span className="h1 d-block mb-4">$7,431.14 USD</span>

                                {/* <!-- Progress --> */}
                                <div className="progress rounded-pill mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Gross value"></div>
                                    <div className="progress-bar opacity" role="progressbar" style={{ width: "33%" }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="Net volume from sales"></div>
                                    <div className="progress-bar opacity-xs" role="progressbar" style={{ width: "9%" }} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="New volume from sales"></div>
                                </div>

                                <div className="d-flex justify-content-between mb-4">
                                    <span>0%</span>
                                    <span>100%</span>
                                </div>
                                {/* <!-- End Progress --> */}

                                {/* <!-- Table --> */}
                                <div className="table-responsive">
                                    <table className="table table-lg table-nowrap card-table mb-0">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <span className="legend-indicator bg-primary"></span>Gross value
                                                </th>
                                                <td>$3,500.71</td>
                                                <td>
                                                    <span className="badge badge-soft-success">+12.1%</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">
                                                    <span className="legend-indicator bg-primary opacity"></span>Net volume from sales
                                                </th>
                                                <td>$2,980.45</td>
                                                <td>
                                                    <span className="badge badge-soft-warning">+6.9%</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">
                                                    <span className="legend-indicator bg-primary opacity-xs"></span>New volume from sales
                                                </th>
                                                <td>$950.00</td>
                                                <td>
                                                    <span className="badge badge-soft-danger">-1.5%</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">
                                                    <span className="legend-indicator"></span>Other
                                                </th>
                                                <td>32</td>
                                                <td>
                                                    <span className="badge badge-soft-success">1.9%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- End Table --> */}
                            </div>
                            {/* <!-- End Body --> */}
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Content --> */}

            {/* <!-- Footer --> */}

            <div className="footer">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <p className="font-size-sm mb-0">&copy; Front. <span className="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex justify-content-end">
                            {/* <!-- List Dot --> */}
                            <ul className="list-inline list-separator">
                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">FAQ</a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">License</a>
                                </li>

                                <li className="list-inline-item">
                                    {/* <!-- Keyboard Shortcuts Toggle --> */}
                                    <div className="hs-unfold">
                                        <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="#"
                                            data-hs-unfold-options='{
                            "target": "#keyboardShortcutsSidebar",
                            "type": "css-animation",
                            "animationIn": "fadeInRight",
                            "animationOut": "fadeOutRight",
                            "hasOverlay": true,
                            "smartPositionOff": true
                           }'>
                                            <i className="tio-command-key"></i>
                                        </a>
                                    </div>
                                    {/* <!-- End Keyboard Shortcuts Toggle --> */}
                                </li>
                            </ul>
                            {/* <!-- End List Dot --> */}
                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- End Footer --> */}
        </main>

    )
}

export default MainContent
