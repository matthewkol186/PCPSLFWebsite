import React from 'react'
import { FaCommentsDollar, FaFirstAid, FaChartLine } from 'react-icons/fa';

const Impact = () => (
    <section className="section hero is-primary is-bold">
        <div className="container has-margin-t-lg">
            <h1 className="title has-padding-t-lg has-text-centered">Projected Impact</h1>
            <div className="columns has-padding-t-md has-text-centered">
                <div className="column">
                    <h1 className="title"><FaCommentsDollar /></h1>
                    <h1 className="subtitle">Cost</h1>
                    <p className="has-text-light">The added loan forgiveness measures in PCPSLF will cost approximately $3.2B. However, just the FQHC-targeting component of PCPSLF will save $3.6B, the state opt-in program will save $375M, and the loophole elimination will save $900M, resulting in net savings of $1.5B by 2030. </p>
                </div>
                <div className="column">
                    <h1 className="title"><FaFirstAid /></h1>
                    <h1 className="subtitle">Access</h1>
                    <p className="has-text-light">By 2030, PCPSLF will generate <span className="has-text-weight-semibold">25,000 new PCPs, filling 50% of the PCP shortage</span>. We also project that PCPSLF will add 1,400 new FQHC PCPs by 2030, completely filling the FQHC clinician shortage. As a result, 98M people will have adequate access to primary care.</p>
                </div>
                <div className="column">
                <h1 className="title"><FaChartLine /></h1>
                    <h1 className="subtitle">Outcomes</h1>
                    <p className="has-text-light">The influx of primary care physicians to health professional shortage areas will result long-term in more equitable care, positive health outcomes, and a decrease in hospitalization and use of emergency department visits.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Impact