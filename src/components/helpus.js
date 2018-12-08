import React from 'react'

const HelpUs = () => (
    <section className="hero is-primary is-warning" id="help">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="is-size-3 has-text-weight-bold">
                    Here's how you can help.
                </h1>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        <h2 className="subtitle has-margin-t-md">
                            Use the button below to reach out to Senator Tim Kaine, a member of the Senate Committee on Health, Education, Labor, and Pensions. <span className="has-text-weight-bold">Make sure you tell him that you want PCPSLF included in his rewrite of the Higher Education Act OR introduced as separate legislation</span>. (If you do not live in Virginia, please feel free to write or contact your Senator.) You may also want to tweet at your representative, write on their Facebook wall, or call their office!
                        </h2>
                        <a href="https://www.kaine.senate.gov/contact/share-your-opinion" target="_blank" className="button is-large is-outlined is-danger">
                            Contact Sen. Tim Kaine
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HelpUs