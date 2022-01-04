import React from 'react'

function Footer() {
    return (

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
    )
}

export default Footer
