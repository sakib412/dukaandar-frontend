import React from 'react'

function KeyboardShortcutsSidebar() {
    return (
        <div id="keyboardShortcutsSidebar" className="hs-unfold-content sidebar sidebar-bordered sidebar-box-shadow">
            <div className="card card-lg sidebar-card">
                <div className="card-header">
                    <h4 className="card-header-title">Keyboard shortcuts</h4>

                    {/* <!-- Toggle Button --> */}
                    <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-dark ml-2" href="#"
                        data-hs-unfold-options='{
                  "target": "#keyboardShortcutsSidebar",
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
                    <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                        <div className="list-group-item">
                            <h5 className="mb-1">Formatting</h5>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span className="font-weight-bold">Bold</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">b</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <em>italic</em>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">i</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <u>Underline</u>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">u</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <s>Strikethrough</s>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Alt</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">s</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span className="small">Small text</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">s</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <mark>Highlight</mark>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">e</kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                        <div className="list-group-item">
                            <h5 className="mb-1">Insert</h5>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Mention person <a href="#">(@Brian)</a></span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">@</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Link to doc <a href="#">(+Meeting notes)</a></span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">+</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <a href="#">#hashtag</a>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">#hashtag</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Date</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">/date</kbd>
                                    <kbd className="d-inline-block mb-1">Space</kbd>
                                    <kbd className="d-inline-block mb-1">/datetime</kbd>
                                    <kbd className="d-inline-block mb-1">/datetime</kbd>
                                    <kbd className="d-inline-block mb-1">Space</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Time</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">/time</kbd>
                                    <kbd className="d-inline-block mb-1">Space</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Note box</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">/note</kbd>
                                    <kbd className="d-inline-block mb-1">Enter</kbd>
                                    <kbd className="d-inline-block mb-1">/note red</kbd>
                                    <kbd className="d-inline-block mb-1">/note red</kbd>
                                    <kbd className="d-inline-block mb-1">Enter</kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                        <div className="list-group-item">
                            <h5 className="mb-1">Editing</h5>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Find and replace</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">r</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Find next</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">n</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Find previous</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">p</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Indent</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Tab</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Un-indent</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Tab</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Move line up</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1"><i className="tio-arrow-large-upward-outlined"></i></kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Move line down</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1"><i className="tio-arrow-large-downward-outlined font-size-sm"></i></kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Add a comment</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Alt</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">m</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Undo</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">z</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Redo</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">y</kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group list-group-sm list-group-flush list-group-no-gutters">
                        <div className="list-group-item">
                            <h5 className="mb-1">Application</h5>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Create new doc</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Alt</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">n</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Present</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">p</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Share</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">s</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Search docs</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">o</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <span>Keyboard shortcuts</span>
                                </div>
                                <div className="col-7 text-right">
                                    <kbd className="d-inline-block mb-1">Ctrl</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">Shift</kbd> <small className="text-muted">+</small> <kbd className="d-inline-block mb-1">/</kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Body --> */}
            </div>
        </div>
    )
}

export default KeyboardShortcutsSidebar
