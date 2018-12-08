import React from 'react'
import Link from 'gatsby-link'

const Whitepaper = () => (
  <div>
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Memo Whitepaper</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Link to="/">Go back to the homepage</Link>
        <p className="has-margin-t-md">
            MEMORANDUM FOR: US Senator Tim Kaine (D-VA), Member of Senate Committee on Health, Education, Labor, and Pensions (HELP) <br/>
            FROM: Matthew Sun, Virginia Community Healthcare Association (VCHA) <br/>
            DATE: December 5, 2018 <br/>
            RE: Extend Primary Care to Millions w/o Access via Accelerated Physician Loan Forgiveness <br/>
        </p>
        <h1 className="is-size-4 has-margin-t-md">Summary and Recommendation</h1>
        <p className="has-margin-t-md">
            To address the national shortage of primary care physicians (PCPs), which most affects underserved communities, the Higher Education Act of 1965 should be amended to modify the Public Service Loan Forgiveness Program (PSLF) to reduce the required loan repayment period for PCPs at federally qualified health centers (FQHCs). The PSLF should further be amended to create a jointly-funded, accelerated loan forgiveness program for all PCPs working at qualifying employers located in healthcare professional shortage areas (HSPAs), not just those who work at FQHCs.
        </p>
        <h1 className="is-size-4 has-margin-t-md">Background</h1>
        <p className="has-margin-t-md">
            The US is expected to experience a shortage of up to 49,300 PCPs by 2030, facing a demand for over 280,000 primary care physicians but a total supply of only approximately 230,000.<sup>1</sup> PCPs are essential not only to preventive and continuous healthcare, but also to health education: they guide patients through local healthcare systems and provide a crucial link between a patient’s healthcare and a patient’s community.<sup>2</sup> There is also strong consensus among policymakers, professional organizations, and purchasers of healthcare that investing in primary care (a) improves health outcomes and (b) reduces overall healthcare spending.<sup>3</sup> Oregon’s landmark 2009 investment creating and implementing improved standards for primary care clinics saved the state an estimated $240M over its first three years.<sup>8</sup>
        </p>
        <p className="has-margin-t-md">
            Significant disparities in access to PCPs compound the nationwide PCP shortage. Minority and low-income children are more likely to receive lower-quality primary care, and in Virginia, millions of rural residents live in primary care shortage areas.<sup>4,13</sup> To fill this need, the federally qualified health center (FQHC) program was established. Aided by benefits such as reduced costs for medications and a special Medicare/Medicaid reimbursement system, FQHCs are able to provide essential primary care to 20M+ Americans with low health care access. Patients who receive care at FQHCs save an average of $2,371 in total spending for the same care quality as private practices, reporting 33% lower spending on specialty care, 27% lower inpatient costs, and 25% fewer hospital admissions.<sup>7,8</sup> However, 95% of FQHCs report at least one clinical vacancy, resulting in a need for at least 1,200 physicians at FQHCs across the country.<sup>9</sup>
        </p>
        <p className="has-margin-t-md">
            One main reason for the projected shortages of PCPs is the evidence that U.S. medical students are beginning to lose interest in careers in primary care, instead opting for more lucrative specialties like radiology or dermatology.<sup>14</sup> On average, primary care physicians earn $107,000 less per year than specialty physicians, with the gap expected to only widen as specialist salaries are currently increasing twice as fast as that of primary care physicians.<sup>15</sup> Research shows that high educational debt deters students at public medical schools from choosing primary care after graduation, with the effect most strongly felt by students from relatively lower income families.<sup>>11</sup>
        </p>
        <h1 className="is-size-4 has-margin-t-md">Discussion</h1>
        <p className="has-margin-t-md">
            Given the national shortage of PCPs, the VCHA recommends accelerating the PSLF timeline for clinicians who work at FQHCs. FQHC PCPs already qualify for PSLF. However, there is currently no added benefit in PSLF for PCPs; specialists who work at nonprofit hospitals are also eligible, even though specialists are paid more while performing fewer services and nonprofit hospitals charge just as aggressively as for-profit hospitals.<sup>6,10</sup> 
        </p>
        <p className="has-margin-t-md">
            We recommend that PSLF be accelerated for FQHC PCPs to forgive all remaining debt after just 5 years. Based on medical student debt research11, this would incentivize an estimated 200 additional physicians to pursue primary care at FQHCs per year, filling all FQHC physician vacancies and providing primary care for 2.1M more patients by 2025.12 This would create an extra incentive for current medical students to pursue primary care and seek employment at FQHCs, expanding access to care for the most needy populations. For example, under this program, a federal student loan-burdened UVA School of Medicine student from rural Virginia would be incentivized to return to their community to practice primary care, rather than seek out lucrative specialty positions in urban centers. Short-term costs could be offset by removing PSLF eligibility for lawyers, specialty doctors, and high-earning professions.
        </p>
        <p className="has-margin-t-md">
            In addition, we recommend the creation and implementation of a new program under the PSLF that would create a state-federal partnership for loan forgiveness for any PCP working in an HPSA after 7 years, not just those who work at FCHQs. Similar to the Medicaid expansion program under the Affordable Care Act of 2010, VCHA proposes that this new program would have the federal government bear the majority of the cost of loan forgiveness in its first year, and then gradually decreasing the government’s share of the cost in subsequent years. 
        </p>
        <p className="has-margin-t-md">
            States would also be able to opt in to such a program, allowing states with their own plans to address primary care shortfalls to continue without intervention from the federal government. For example, New York is only projected to require an increase of 8% in its supply of PCPs by 2030. In a case like New York’s, smaller-scale, less expensive interventions may make more sense.  We estimate that modifying the PSLF as such will result in an increase of __ PCPs, closing the gap between demand and supply for PCPs.  
        </p>
        <h1 className="is-size-4 has-margin-t-md">Recommendation</h1>
        <p className="has-margin-t-md">
            Propose an amendment to the Higher Education Act of 1965 to the Senate Committee on HELP with the purpose of accelerating PSLF for FQHC PCPs by reducing their required repayment period before loan forgiveness to 5 years and, under a jointly-funded federal-state loan forgiveness program, reduce the required repayment period for all PCPs in HPSAs to 7 years.
        </p>
      </div>
    </section>
  </div>
)

export default Whitepaper
