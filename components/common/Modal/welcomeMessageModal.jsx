/* eslint-disable @next/next/no-img-element */
import React from 'react'

function WelcomeMessageModal() {
    return (
        <div className="modal fade" id="welcomeMessageModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {/* <!-- Header --> */}
                    <div className="modal-close">
                        <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                            <i className="tio-clear tio-lg"></i>
                        </button>
                    </div>
                    {/* <!-- End Header --> */}

                    {/* <!-- Body --> */}
                    <div className="modal-body p-sm-5">
                        <div className="text-center">
                            <div className="w-75 w-sm-50 mx-auto mb-4">
                                <img className="img-fluid" src="./assets/svg/illustrations/graphs.svg" alt="Image Description" />
                            </div>

                            <h4 className="h1">Welcome to Front</h4>

                            <p>Were happy to see you in our community.</p>
                        </div>
                    </div>
                    {/* <!-- End Body --> */}

                    {/* <!-- Footer --> */}
                    <div className="modal-footer d-block text-center py-sm-5">
                        <small className="text-cap mb-4">Trusted by the worlds best teams</small>

                        <div className="w-85 mx-auto">
                            <div className="row justify-content-between">
                                <div className="col">
                                    <img className="img-fluid ie-welcome-brands" src="./assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid ie-welcome-brands" src="./assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid ie-welcome-brands" src="./assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid ie-welcome-brands" src="./assets/svg/brands/layar-gray.svg" alt="Image Description" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Footer --> */}
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessageModal
