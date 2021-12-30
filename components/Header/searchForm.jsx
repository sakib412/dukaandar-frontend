import React from 'react'

function SearchForm() {
    return (
        <div id="searchDropdown" className="hs-unfold-content dropdown-unfold search-fullwidth d-md-none">
            <form className="input-group input-group-merge input-group-borderless">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="tio-search"></i>
                    </div>
                </div>

                <input className="form-control rounded-0" type="search" placeholder="Search in front" aria-label="Search in front" />

                <div className="input-group-append">
                    <div className="input-group-text">
                        <div className="hs-unfold">
                            <a className="js-hs-unfold-invoker" href="#"
                                data-hs-unfold-options='{
                                "target": "#searchDropdown",
                                "type": "css-animation",
                                "animationIn": "fadeIn",
                                "hasOverlay": "rgba(46, 52, 81, 0.1)",
                                "closeBreakpoint": "md"
                                }'>
                                <i className="tio-clear tio-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
