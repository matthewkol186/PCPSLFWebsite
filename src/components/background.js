import React from 'react'
import graph from '../img/shortage.png'
import familyDoctor from '../img/family_doctor.jpg'

const Background = () => ( 
    <div>
        <section className="section is-medium">
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds">
                        <div className="columns">
                            <div className="column is-narrow">
                                <h1 className="is-size-4 has-text-weight-bold has-padding-b-lg">
                                    <span className="circleBadge">1</span>
                                </h1>
                            </div>
                            <div className="column">
                                <h1 className="is-size-4 has-text-weight-bold">
                                    Primary care physicians (PCPs) are critical to lowering costs and improving health in our communities.
                                </h1>
                            </div>
                        </div>
                        <p className="is-size-5">
                            Again and again, we've seen that investment in primary care is the smart thing to do. From state primary care investments in <a href="https://www.ncbi.nlm.nih.gov/pubmed/24018613" target="_blank">Rhode Island</a> all the way to <a href="https://www.oregon.gov/oha/hpa/dsi-pcpch/Pages/index.aspx" target="_blank">Oregon</a>, we've seen that meaningful reform in primary care decreases emergency hospital admissions, improves patient satisfaction, and saves money in the long run.
                        </p>
                    </div>
                    <div className="column is-one-third">
                        <figure class="image">
                            <img src={familyDoctor} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="section is-medium has-background-light">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <figure class="image">
                            <img src={graph} />
                        </figure>
                        <h6 class="subtitle is-6">Source: American Association of Medical Colleges</h6>
                    </div>
                    <div className="column is-two-thirds has-padding-l-lg">
                        <div className="columns">
                            <div className="column is-narrow">
                                <h1 className="is-size-4 has-text-weight-bold has-padding-b-lg">
                                    <span className="circleBadge">2</span>
                                </h1>
                            </div>
                            <div className="column">
                                <h1 className="is-size-4 has-text-weight-bold">
                                    America needs more and better primary care, now more than ever.
                                </h1>
                            </div>
                        </div>
                        <p className="is-size-5">
                            By 2030, America is projected to experience <span className="has-text-weight-bold">a shortage of 49,300 primary care physicians (PCPs)</span>. That means that in just 12 years, <span className="has-text-weight-bold">98,000,000 Americans</span>  will lack access to adequate primary care.
                        </p>
                        <p className="is-size-5 has-margin-t-md">
                            We've also seen that the shortage of PCPs is hardest felt by the most vulnerable in our communities. 95% of federally qualified health centers (FQHCs), which provide primary and preventive care underserved areas, <span className="has-text-weight-bold">have at least one clinician vacancy</span>. For many Americans, it's the norm to skip seeing a primary care physician - until it's too late.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section is-medium">
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds has-padding-r-lg">
                        <div className="columns">
                            <div className="column is-narrow">
                                <h1 className="is-size-4 has-text-weight-bold has-padding-b-lg">
                                    <span className="circleBadge">3</span>
                                </h1>
                            </div>
                            <div className="column">
                                <h1 className="is-size-4 has-text-weight-bold">
                                    Medical students are increasingly debt-burdened, making primary care less and less attractive as a long-term career.
                                </h1>
                            </div>
                        </div>
                        <p className="is-size-5">
                            The average medical student graduates with a whopping <span className="has-text-weight-bold">$190,000</span> of debt, a number that's been creeping up year after year. The skyrocketing cost of tuition makes it much harder for graduates to choose primary care instead a more lucrative specialty, like plastic surgery or dermatology. Similarly, doctors are incentivized to work in wealthy districts in metropolitan areas, where they are more likely to find high-paying jobs.
                        </p>
                    </div>
                    <div className="column is-one-third">
                        <iframe width="100%" height="300" src="https://youtube.com/embed/sFTu4iHC8pU" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
    

export default Background