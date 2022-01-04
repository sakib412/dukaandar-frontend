/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import React from 'react'

function SignUp() {
    return (
        <div className='d-flex align-items-center min-h-100'>

            {/* <!-- ========== HEADER ========== --> */}
            <header className="position-absolute top-0 left-0 right-0 mt-3 mx-3">
                <div className="d-flex d-lg-none justify-content-between">
                    <a href="/">
                        <img className="w-100" src="/assets/svg/logos/logo.svg" alt="Image Description" style={{ minWidth: "7rem", maxWidth: "7rem" }} />
                    </a>


                    {/* <!-- Select --> */}
                    <div id="languageSelect2" className="select2-custom select2-custom-right z-index-2">
                        <select className="js-select2-custom custom-select-sm" size="1" style={{ opacity: "0" }}
                            data-hs-select2-options='{
                    "dropdownParent": "#languageSelect2",
                    "minimumResultsForSearch": "Infinity",
                    "placeholder": "Select language",
                    "customClass": "custom-select custom-select-sm custom-select-borderless bg-transparent",
                    "dropdownAutoWidth": true,
                    "dropdownWidth": "12rem"
                  }'>
                            <option label="empty"></option>
                            <option value="language1" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16"/><span>English (US)</span></span>'>English (US)</option>
                            <option value="language2" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Image description" width="16"/><span>English (UK)</span></span>'>English (UK)</option>
                            <option value="language3" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width="16"/><span>Deutsch</span></span>'>Deutsch</option>
                            <option value="language4" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Image description" width="16"/><span>Dansk</span></span>'>Dansk</option>
                            <option value="language5" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width="16"/><span>Español</span></span>'>Español</option>
                            <option value="language6" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/nl.svg" alt="Image description" width="16"/><span>Nederlands</span></span>'>Nederlands</option>
                            <option value="language7" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Image description" width="16"/><span>Italiano</span></span>'>Italiano</option>
                            <option value="language8" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width="16"/><span>中文 (繁體)</span></span>'>中文 (繁體)</option>
                        </select>
                    </div>
                    {/* <!-- End Select --> */}
                </div>
            </header>
            {/* <!-- ========== END HEADER ========== --> */}

            {/* <!-- ========== MAIN CONTENT ========== --> */}
            <main id="content" role="main" className="main pt-0">
                {/* <!-- Content --> */}
                <div className="container-fluid px-3">
                    <div className="row">
                        {/* <!-- Cover --> */}
                        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
                            {/* <!-- Logo & Language --> */}
                            <div className="position-absolute top-0 left-0 right-0 mt-3 mx-3">
                                <div className="d-none d-lg-flex justify-content-between">
                                    <a href="/">
                                        <img className="w-100" src="/assets/svg/logos/logo.svg" alt="Image Description" style={{ minWidth: "7rem", maxWidth: "7rem" }} />
                                    </a>


                                    {/* <!-- Select --> */}
                                    <div id="languageSelect1" className="select2-custom select2-custom-right">
                                        <select className="js-select2-custom"
                                            data-hs-select2-options='{
                                                "dropdownParent": "#languageSelect1",
                                                "minimumResultsForSearch": "Infinity",
                                                "placeholder": "Select language",
                                                "customClass": "custom-select custom-select-sm custom-select-borderless bg-transparent",
                                                "dropdownAutoWidth": true,
                                                "dropdownWidth": "12rem"
                                            }'>
                                            <option label="empty"></option>
                                            <option value="language1" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16"/><span>English (US)</span></span>'>English (US)</option>
                                            <option value="language2" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Image description" width="16"/><span>English (UK)</span></span>'>English (UK)</option>
                                            <option value="language3" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width="16"/><span>Deutsch</span></span>'>Deutsch</option>
                                            <option value="language4" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Image description" width="16"/><span>Dansk</span></span>'>Dansk</option>
                                            <option value="language5" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width="16"/><span>Español</span></span>'>Español</option>
                                            <option value="language6" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/nl.svg" alt="Image description" width="16"/><span>Nederlands</span></span>'>Nederlands</option>
                                            <option value="language7" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Image description" width="16"/><span>Italiano</span></span>'>Italiano</option>
                                            <option value="language8" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle mr-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width="16"/><span>中文 (繁體)</span></span>'>中文 (繁體)</option>
                                        </select>
                                    </div>
                                    {/* <!-- End Select --> */}
                                </div>
                            </div>
                            {/* <!-- End Logo & Language --> */}

                            <div style={{ maxWidth: "23rem" }}>
                                <div className="text-center mb-5">
                                    <img className="img-fluid" src="./assets/svg/illustrations/chat.svg" alt="Image Description" style={{ width: "12rem" }} />
                                </div>

                                <div className="mb-5">
                                    <h2 className="display-4">Build digital products with:</h2>
                                </div>

                                {/* <!-- List Checked --> */}
                                <ul className="list-checked list-checked-lg list-checked-primary list-unstyled-py-4">
                                    <li className="list-checked-item">
                                        <span className="d-block font-weight-bold mb-1">All-in-one tool</span>
                                        Build, run, and scale your apps - end to end
                                    </li>

                                    <li className="list-checked-item">
                                        <span className="d-block font-weight-bold mb-1">Easily add &amp; manage your services</span>
                                        It brings together your tasks, projects, timelines, files and more
                                    </li>
                                </ul>
                                {/* <!-- End List Checked --> */}

                                <div className="row justify-content-between mt-5 gx-2">
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Image Description" />
                                    </div>
                                </div>
                                {/* <!-- End Row --> */}
                            </div>
                        </div>
                        {/* <!-- End Cover --> */}

                        <div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
                            <div className="w-100 pt-10 pt-lg-7 pb-7" style={{
                                maxWidth: "25rem "
                            }}>
                                {/* <!-- Form --> */}
                                < form className="js-validate" >
                                    <div className="text-center mb-5">
                                        <h1 className="display-4">Create your account</h1>
                                        <p>Already have an account? <a href="authentication-signin-cover.html">Sign in here</a></p>
                                    </div>

                                    <div className="mb-4">
                                        <a className="btn btn-lg btn-white btn-block" href="#">
                                            <span className="d-flex justify-content-center align-items-center">
                                                <img className="avatar avatar-xss mr-2" src="./assets/svg/brands/google.svg" alt="Image Description" />
                                                Sign up with Google
                                            </span>
                                        </a>
                                    </div>

                                    <div className="text-center mb-4">
                                        <span className="divider text-muted">OR</span>
                                    </div>

                                    <label className="input-label" htmlFor="fullNameSrEmail">Full name</label>

                                    {/* <!-- Form Group --> */}
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="js-form-message form-group">
                                                <input type="text" className="form-control form-control-lg" name="fullName" id="fullNameSrEmail" placeholder="Mark" aria-label="Mark" required data-msg="Please enter your first name." />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="js-form-message form-group">
                                                <input type="text" className="form-control form-control-lg" placeholder="Williams" aria-label="Williams" required data-msg="Please enter your last name." />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div className="js-form-message form-group">
                                        <label className="input-label" htmlFor="signupSrEmail">Your email</label>

                                        <input type="email" className="form-control form-control-lg" name="email" id="signupSrEmail" placeholder="Markwilliams@example.com" aria-label="Markwilliams@example.com" required data-msg="Please enter a valid email address." />
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div className="js-form-message form-group">
                                        <label className="input-label" htmlFor="signupSrPassword">Password</label>

                                        <div className="input-group input-group-merge">
                                            <input type="password" className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required
                                                data-msg="Your password is invalid. Please try again."
                                                data-hs-toggle-password-options='{
                                                    "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                                                    "defaultClass": "tio-hidden-outlined",
                                                    "showClass": "tio-visible-outlined",
                                                    "classChangeTarget": ".js-toggle-passowrd-show-icon-1"
                                                }'/>
                                            <div className="js-toggle-password-target-1 input-group-append">
                                                <a className="input-group-text" href="#">
                                                    <i className="js-toggle-passowrd-show-icon-1 tio-visible-outlined"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div className="js-form-message form-group">
                                        <label className="input-label" htmlFor="signupSrConfirmPassword">Confirm password</label>

                                        <div className="input-group input-group-merge">
                                            <input type="password" className="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSrConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required
                                                data-msg="Password does not match the confirm password."
                                                data-hs-toggle-password-options='{
                                                    "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                                                    "defaultClass": "tio-hidden-outlined",
                                                    "showClass": "tio-visible-outlined",
                                                    "classChangeTarget": ".js-toggle-passowrd-show-icon-2"
                                                }'/>
                                            <div className="js-toggle-password-target-2 input-group-append">
                                                <a className="input-group-text" href="#">
                                                    <i className="js-toggle-passowrd-show-icon-2 tio-visible-outlined"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Checkbox --> */}
                                    <div className="js-form-message form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" required data-msg="Please accept our Terms and Conditions." />
                                            <label className="custom-control-label text-muted" htmlFor="termsCheckbox"> I accept the <a href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    {/* <!-- End Checkbox --> */}

                                    <button type="submit" className="btn btn-lg btn-block btn-primary mb-2">Create an account</button>

                                    <button type="submit" className="btn btn-block btn-link">
                                        or Start your 30-day trial <i className="tio-chevron-right"></i>
                                    </button>
                                </form>
                                {/* <!-- End Form --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Row --> */}
                </div>
                {/* <!-- End Content --> */}
            </main >
            {/* <!-- JS Global Compulsory  --> */}
            <script src="./assets/vendor/jquery/dist/jquery.min.js"></script>
            <script src="./assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
            <script src="./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

            {/* <!-- JS Implementing Plugins --> */}
            <script src="./assets/vendor/hs-toggle-password/dist/js/hs-toggle-password.js"></script>
            <script src="./assets/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
            <script src="./assets/vendor/select2/dist/js/select2.full.min.js"></script>

            {/* <!-- JS Front --> */}
            <script src="./assets/js/theme.min.js"></script>


            <Script id='signup_form'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            // INITIALIZATION OF SHOW PASSWORD
                            // =======================================================
                            $('.js-toggle-password').each(function () {
                                HSTogglePassword && new HSTogglePassword(this).init()
                            });


                        // INITIALIZATION OF FORM VALIDATION
                        // =======================================================
                        $('.js-validate').each(function() {
                            $.HSCore?.components.HSValidation.init($(this), {
                                rules: {
                                    confirmPassword: {
                                        equalTo: '#signupSrPassword'
                                    }
                                }
                            });
                    });


                    // INITIALIZATION OF SELECT2
                    // =======================================================
                    $('.js-select2-custom').each(function () {
                    var select2 = $.HSCore?.components.HSSelect2.init($(this));
                    });
                    document.body.className = 'align-items-center min-h-100';
                    `,
                }}
            />


        </div>

    )
}


SignUp.getLayout = function getLayout(page) {
    return page

}

export default SignUp


