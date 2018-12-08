import React from 'react'

const Proposal = () => (
    <section className="section hero is-info is-bold" id="proposal">
        <div className="container has-text-centered has-text-white">
            <h1 className="is-size-2">
                <span className="has-text-weight-bold">PCP</span>SLF
            </h1>
            <h1 className="is-size-5">
                <span className="has-text-weight-semibold">Primary Care Physician</span> Student Loan Forgiveness
            </h1>
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    <p className="has-padding-t-md">Our society should reward folks who decide to pursue a career as a primary care physician, not set them back financially. PCPSLF aims to make that decision easier, so that the vast majority of our nation's medical talent isn't funneled solely into specialty positions in wealthy urban centers. In addition, it improves and amends an existing program (PSLF) that is already funded by Congress, so you don't have to pay a single cent more in taxes.</p>
                </div>
            </div>
        </div>
        <div className="container has-padding-t-lg">
            <div className="columns">
                <div className="column is-half">
                    <div className="box has-background-grey-lighter">
                    <h1 className="title has-text-grey-darker">
                            PSLF (2007)
                        </h1>
                        <h1 className="subtitle has-text-grey-darker">
                            Public Service Loan Forgiveness
                        </h1>
                        <p>
                            PSLF was created under the College Cost Reduction and Access Act of 2007 (CCRAA). It encourages professionals with federal student loan debt to work full-time in public service. Only 96 people have had their loans forgiven through PSLF so far.
                        </p>
                        <p className="menu-label">Requirements</p>
                        <ul>
                            <li className="has-padding-b-sm">
                                Must make 120 monthly repayments before remaining debt is forgiven
                            </li>
                            <li className="has-padding-b-sm">
                                Must work for a qualified employer (includes government, 501(c)3 organizations, tax-exempt hospitals, tax-exempt charitable organizations, tax-exempt education institutions, etc.)
                            </li>
                            <li className="has-padding-b-sm">
                                You must have a Federal Direct Loan to be eligible for student loan forgiveness under PSLF
                            </li>
                        </ul>
                        <p className="menu-label">What's Broken</p>
                        <ul>
                            <li className="has-padding-b-sm">
                                Congressional Budget Office recently doubled cost estimate - $24 billion dollars over the next 10 years<sup>11</sup>
                            </li>
                            <li className="has-padding-b-sm">
                                Loophole for high-earning doctors at non-profit hospitals: a wealthy physician could get $700,000 forgiven in loans under PSLF. (See <a href="https://www.whitecoatinvestor.com/how-much-can-you-get-forgiven-via-pslf/" target="_blank">White Coat Investor</a>: "Since the amount you pay back is primarily determined by your salary and not the amount of loans you take out, there’s no disincentive to borrowing as much as you possibly can.")
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="box has-background-primary has-text-white">
                        <h1 className="title  has-text-right">
                            <span className="has-text-weight-bold">PCP</span>SLF (2018)
                        </h1>
                        <h1 className="subtitle has-text-right">
                            Primary Care Physician Student Loan Forgiveness
                        </h1>
                        <p>
                            PCPSLF was drafted by the Virginia Community Healthcare Association. Its intent is to fill the primary care physician shortage by removing financial barriers to entering the profession - primary, exorbitant student loans.
                        </p>
                        <p className="menu-label has-text-light">Requirements</p>
                        <ul>
                            <li className="has-padding-b-sm">
                                Retains PSLF's guidelines except for the following professions:
                            </li>
                            <li className="has-padding-b-sm">
                                Employees at FQHCs or FQHC look-alikes need only make 60 monthly repayments (5 years) towards their loans before loan forgiveness
                            </li>
                            <li className="has-padding-b-sm">
                                State opt-in program: PCPs at non-FQHCs who work in Health Professional Shortage Areas (HPSAs) need only make 84 monthly repayments (7 years) towards their loans before loan forgiveness. (Funded via federal/state partnership; see Medicaid expansion under ACA.)
                            </li>
                        </ul>
                        <p className="menu-label has-text-light">What's Fixed</p>
                        <ul>
                            <li className="has-padding-b-sm">
                                Close loophole for high earning professionals. For 501(c)3 organizations, applicants for PSLF at the end of the 10-year period must have a yearly income that is at least 2x their current remaining debt burden. This means that physicians who start making high incomes after fellowship (approx. 8 years after medical school) cannot "cheat" PSLF.
                            </li>
                            <li className="has-padding-b-sm">
                                Primary care physicians, especially those who work at FQHCs, will save the healthcare system money in the long term by reducing downstream costs. 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Proposal