/* eslint-disable @next/next/no-img-element */
import React from 'react'

function InviteUserModal() {
    return (
        <div className="modal fade" id="inviteUserModal" tabIndex="-1" role="dialog" aria-labelledby="inviteUserModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form className="modal-content">
                    {/* <!-- Header --> */}
                    <div className="modal-header">
                        <h4 id="inviteUserModalTitle" className="modal-title">Invite users</h4>

                        <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                            <i className="tio-clear tio-lg"></i>
                        </button>
                    </div>
                    {/* <!-- End Header --> */}

                    {/* <!-- Body --> */}
                    <div className="modal-body">
                        {/* <!-- Form Group --> */}
                        <div className="form-group">
                            <div className="input-group input-group-merge mb-2 mb-sm-0">
                                <div className="input-group-prepend" id="fullName">
                                    <span className="input-group-text">
                                        <i className="tio-search"></i>
                                    </span>
                                </div>

                                <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" aria-describedby="fullName" />

                                <div className="input-group-append input-group-append-last-sm-down-none">
                                    {/* <!-- Select --> */}
                                    <div id="permissionSelect" className="select2-custom select2-custom-right">
                                        <select className="js-select2-custom custom-select" size="1" style={{ opacity: 0 }}
                                            data-hs-select2-options='{
                              "dropdownParent": "#permissionSelect",
                              "minimumResultsForSearch": "Infinity",
                              "dropdownAutoWidth": true,
                              "dropdownWidth": "11rem"
                            }'>
                                            <option value="guest" >Guest</option>
                                            <option value="can edit">Can edit</option>
                                            <option value="can comment">Can comment</option>
                                            <option value="full access">Full access</option>
                                        </select>
                                    </div>
                                    {/* <!-- End Select --> */}

                                    <a className="btn btn-primary d-none d-sm-block" href="#">Invite</a>
                                </div>
                            </div>

                            <a className="btn btn-block btn-primary d-sm-none" href="#">Invite</a>
                        </div>
                        {/* <!-- End Form Group --> */}

                        <div className="form-row">
                            <h5 className="col modal-title">Invite users</h5>

                            <div className="col-auto">
                                <a className="d-flex align-items-center font-size-sm text-body" href="#">
                                    <img className="avatar avatar-xss mr-2" src="./assets/svg/brands/gmail.svg" alt="Image Description" />
                                    Import contacts
                                </a>
                            </div>
                        </div>

                        <hr className="mt-2" />

                        <ul className="list-unstyled list-unstyled-py-4">
                            {/* <!-- List Group Item --> */}
                            <li>
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-circle mr-3">
                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                    </div>

                                    <div className="media-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <h5 className="text-body mb-0">Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                <span className="d-block font-size-sm">amanda@example.com</span>
                                            </div>

                                            <div className="col-sm">
                                                {/* <!-- Select --> */}
                                                <div id="inviteUserSelect1" className="select2-custom select2-custom-sm-right d-sm-flex justify-content-sm-end">
                                                    <select className="js-select2-custom custom-select-sm" size="1" style={{ opacity: 0 }}
                                                        data-hs-select2-options='{
                                    "dropdownParent": "#inviteUserSelect1",
                                    "minimumResultsForSearch": "Infinity",
                                    "customClass": "custom-select custom-select-sm custom-select-borderless pl-0",
                                    "dropdownAutoWidth": true,
                                    "width": true
                                  }'>
                                                        <option value="guest">Guest</option>
                                                        <option value="can edit">Can edit</option>
                                                        <option value="can comment">Can comment</option>
                                                        <option value="full access">Full access</option>
                                                        <option value="remove" data-option-template='<span className="text-danger">Remove</span>'>Remove</option>
                                                    </select>
                                                </div>
                                                {/* <!-- End Select --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End Row --> */}
                                    </div>
                                </div>
                            </li>
                            {/* <!-- End List Group Item --> */}

                            {/* <!-- List Group Item --> */}
                            <li>
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-circle mr-3">
                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                    </div>

                                    <div className="media-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <h5 className="text-body mb-0">David Harrison</h5>
                                                <span className="d-block font-size-sm">david@example.com</span>
                                            </div>

                                            <div className="col-sm">
                                                {/* <!-- Select --> */}
                                                <div id="inviteUserSelect2" className="select2-custom select2-custom-sm-right d-sm-flex justify-content-sm-end">
                                                    <select className="js-select2-custom custom-select-sm" size="1" style={{ opacity: 0 }}
                                                        data-hs-select2-options='{
                                    "dropdownParent": "#inviteUserSelect2",
                                    "minimumResultsForSearch": "Infinity",
                                    "customClass": "custom-select custom-select-sm custom-select-borderless pl-0",
                                    "dropdownAutoWidth": true,
                                    "width": true
                                  }'>
                                                        <option value="guest">Guest</option>
                                                        <option value="can edit">Can edit</option>
                                                        <option value="can comment">Can comment</option>
                                                        <option value="full access">Full access</option>
                                                        <option value="remove" data-option-template='<span className="text-danger">Remove</span>'>Remove</option>
                                                    </select>
                                                </div>
                                                {/* <!-- End Select --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End Row --> */}
                                    </div>
                                </div>
                            </li>
                            {/* <!-- End List Group Item --> */}

                            {/* <!-- List Group Item --> */}
                            <li>
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-circle mr-3">
                                        <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                    </div>

                                    <div className="media-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <h5 className="text-body mb-0">Ella Lauda <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                <span className="d-block font-size-sm">Markvt@example.com</span>
                                            </div>

                                            <div className="col-sm">
                                                {/* <!-- Select --> */}
                                                <div id="inviteUserSelect4" className="select2-custom select2-custom-sm-right d-sm-flex justify-content-sm-end">
                                                    <select className="js-select2-custom custom-select-sm" size="1" style={{ opacity: 0 }}
                                                        data-hs-select2-options='{
                                    "dropdownParent": "#inviteUserSelect4",
                                    "minimumResultsForSearch": "Infinity",
                                    "customClass": "custom-select custom-select-sm custom-select-borderless pl-0",
                                    "dropdownAutoWidth": true,
                                    "width": true
                                  }'>
                                                        <option value="guest" >Guest</option>
                                                        <option value="can edit">Can edit</option>
                                                        <option value="can comment">Can comment</option>
                                                        <option value="full access">Full access</option>
                                                        <option value="remove" data-option-template='<span className="text-danger">Remove</span>'>Remove</option>
                                                    </select>
                                                </div>
                                                {/* <!-- End Select --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End Row --> */}
                                    </div>
                                </div>
                            </li>
                            {/* <!-- End List Group Item --> */}

                            {/* <!-- List Group Item --> */}
                            <li>
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-soft-dark avatar-circle mr-3">
                                        <span className="avatar-initials">B</span>
                                    </div>

                                    <div className="media-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <h5 className="text-body mb-0">Bob Dean</h5>
                                                <span className="d-block font-size-sm">bob@example.com</span>
                                            </div>

                                            <div className="col-sm">
                                                {/* <!-- Select --> */}
                                                <div id="inviteUserSelect3" className="select2-custom select2-custom-sm-right d-sm-flex justify-content-sm-end">
                                                    <select className="js-select2-custom custom-select-sm" size="1" style={{ opacity: 0 }}
                                                        data-hs-select2-options='{
                                    "dropdownParent": "#inviteUserSelect3",
                                    "minimumResultsForSearch": "Infinity",
                                    "customClass": "custom-select custom-select-sm custom-select-borderless pl-0",
                                    "dropdownAutoWidth": true,
                                    "width": true
                                  }'>
                                                        <option value="guest">Guest</option>
                                                        <option value="can edit">Can edit</option>
                                                        <option value="can comment">Can comment</option>
                                                        <option value="full access">Full access</option>
                                                        <option value="remove" data-option-template='<span className="text-danger">Remove</span>'>Remove</option>
                                                    </select>
                                                </div>
                                                {/* <!-- End Select --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End Row --> */}
                                    </div>
                                </div>
                            </li>
                            {/* <!-- End List Group Item --> */}
                        </ul>
                    </div>
                    {/* <!-- End Body --> */}

                    {/* <!-- Footer --> */}
                    <div className="modal-footer justify-content-start">
                        <div className="row align-items-center flex-grow-1 mx-n2">
                            <div className="col-sm-9 mb-2 mb-sm-0">
                                <input type="hidden" id="inviteUserPublicClipboard" value="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />

                                <p className="modal-footer-text">The public share <a href="#">link settings</a>
                                    <i className="tio-help-outlined" data-toggle="tooltip" data-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features."></i>
                                </p>
                            </div>

                            <div className="col-sm-3 text-sm-right">
                                <a className="js-clipboard btn btn-sm btn-white text-nowrap" href="#" data-toggle="tooltip" data-placement="top" title="Copy to clipboard!"
                                    data-hs-clipboard-options='{
                    "type": "tooltip",
                    "successText": "Copied!",
                    "contentTarget": "#inviteUserPublicClipboard",
                    "container": "#inviteUserModal"
                    }'>
                                    <i className="tio-link mr-1"></i> Copy link</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Footer --> */}
                </form>
            </div>
        </div>
    )
}

export default InviteUserModal
