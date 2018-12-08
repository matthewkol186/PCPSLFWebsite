import React from 'react'
import Link from 'gatsby-link'

const WorksCited = () => (
  <div>
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Works Cited</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Link to="/">Go back to the homepage</Link>
        <h1 className="is-size-4">Images</h1>
        <p>
            https://www.educationalappstore.com/blog/wp-content/uploads/2018/07/bigstock-Medical-students-listening-sit-80149121.jpg <br/>
            https://www.scripps.org/sparkle-assets/images/family_medicine_banner_1300_x_800_web.jpg <br/>
            https://www.bworldonline.com/wp-content/uploads/2018/08/smiling-doctor-080318.jpg <br/>
            Select icons: FontAwesome <br/>
            All other logos or media were designed by me.
        </p>
        <h1 className="is-size-4 has-margin-t-md">References</h1>
        <p>
            <sup>1</sup> Rosenthal, Meredith B., et al. "Effect of a multipayer patient-centered medical home on health care utilization and quality: the Rhode Island chronic care sustainability initiative pilot program." JAMA internal medicine 173.20 (2013): 1907-1913. <br/>
            <sup>2</sup> Gelmon, Sherril, et al. Implementation of Oregon's PCPCH Program: Exemplary Practice and Program Findings. Portland State University, 2016. <br/>
            <sup>3</sup> Starfield, Barbara, Leiyu Shi, and James Macinko. "Contribution of primary care to health systems and health." The milbank quarterly 83.3 (2005): 457-502. <br />
            <sup>4</sup> Markit, I. H. S. "The Complexities of Physician Supply and Demand: Projections from 2015 to 2030." (2017). <br/>
            <sup>5</sup> Altschuler, Justin, et al. "Estimating a reasonable patient panel size for primary care physicians with team-based task delegation." The Annals of Family Medicine 10.5 (2012): 396-400.<br/>
            <sup>6</sup> Crowley, Caitlin, Michelle Proser, and Andrew Bazemore. "High Demand, Low Supply: Health Centers and the Recruitment of Family Physicians." American family physician 98.3 (2018): 146. <br/>
            <sup>7</sup> Kessler, Sarah. “Average Medical School Debt In 2017 - Student Debt Relief.” Student Debt Relief | Student Loan Forgiveness, 26 July 2018, www.studentdebtrelief.us/news/average-medical-school-debt/. <br/>
            <sup>8</sup> Phillips, Julie P., et al. "A retrospective analysis of the relationship between medical student debt and primary care practice in the United States." The Annals of Family Medicine 12.6 (2014): 542-549. <br/>
            <sup>9</sup> Rabinowitz, Howard K., and Nina P. Paynter. "The rural vs urban practice decision." Jama 287.1 (2002): 113-113. <br />
            <sup>10</sup> Donaldson, Molla S., et al., eds. Primary care: America's health in a new era. National Academies Press, 1996. <br/>
            <sup>11</sup> Congressional Budget Office. CBO's Estimate of the President's Fiscal Year 2018 Budget, 2018. <br/>
            <sup>12</sup> Murray, Mark, Mike Davies, and Barbara Boushon. "Panel size: how many patients can one doctor manage?." Family practice management 14.4 (2007): 44. <br/>
            <sup>13</sup> Virginia Department of Health, Primary Care Needs Assessment (2016). <br/>
            <sup>14</sup> Dalen, James E., Kenneth J. Ryan, and Joseph S. Alpert. "The 2017 match and the future US workforce." The American journal of medicine 131.1 (2018): 2-4. <br/>
            <sup>15</sup> Kane, Leslie. Medscape Physician Compensation Report 2018. Medscape website. <br/>

        </p>
        <h1 className="is-size-4 has-margin-t-md">Methodology: Projected Impacts</h1>
        <p>
            Number of new PCPs added: (Number of medical students who match to a specialty besides primary care) x (Percentage of those medical students who were strongly influenced by student debt) x (Percentage of those strongly influenced who would change their decision given PCPSLF) x (12 years) = 25320*0.33*0.25*12 = <span className="has-text-weight-semibold">25,000 new PCPs by 2030</span>
        </p>
        <p>
            Number of new FQHC PCPs added: (Number of medical students who match to a specialty besides primary care) x (Percentage of those medical students who were strongly influenced by student debt) x (Percentage of those strongly influenced who would change their decision given PCPSLF) x (12 years) = 25320*0.33*0.001*12 = <span className="has-text-weight-semibold">1,200 new FQHC PCPs by 2030</span>
        </p>
        <p>
            Additional cost of loan forgiveness: ((Average debt right after medical school) x (Average interest rate, compounded over 7 years) - (Average yearly income for primary care physician x annual capped percentage under income-based repayment plan)) x 25,000 + ((Average debt right after medical school) x (Average interest rate, compounded over 7 years) - (Average yearly income for FQHC primary care physician x annual capped percentage under income-based repayment plan)) x 1,200 = (190,000*(1.07^7) - (.15*175,000*7))*25,000 + (190,000*(1.07^5) - (.15*170,000*5))*1,200 = <span className="has-text-weight-semibold">3.26B</span>
        </p>
        <p>
            Amount saved via FQHC PCPs: (Total number of new FQHC PCPs) x (Average Medicaid/Medicare patient panel of FQHC PCP) x (Average amount of money saved per patient per year) x (12 years until 2030) = 1200*1000*250*12 = <span className="has-text-weight-semibold">3.5B</span>
        </p>
        <p>
            Amount saved via regular PCPs: (Total number of new PCPs) x (Average physician panel) x (Average amount of money saved per patient per year) = 25,000 * 1,500 * 10 = <span className="has-text-weight-semibold">375M</span>
        </p>
        <p>
            Amount saved from loopholes: (Number of high-paid professionals prevented from taking advantage of PSLF per year) x (Number of years) x ((Average debt after medical school) * (Average interest rate, compounded over 10 years)) = 200*12*(190,000*(1.07^10)) = <span className="has-text-weight-semibold">879M</span>
        </p>
      </div>
    </section>
  </div>
)

export default WorksCited
