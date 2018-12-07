import React from 'react'

const Interview = () => (
    <section className="section">
        <div className="columns is-centered">
            <div className="column is-two-thirds">
                <div className="card interview-card has-background-primary has-text-white">
                    <h1 className="is-size-3 has-text-white has-text-weight-semibold has-padding-lg">
                        Hear Allie's story.
                    </h1>
                    <div className="columns" style={{"margin-bottom": 0}}>
                        <div className="column is-one-third has-padding-b-none student-picture">
                        </div>
                        <div className="column is-two-third has-padding-lg">
                        <p>
                                As someone born and raised in a tiny town in rural Virginia and the first person in my family to attend college, my entire family was ecstatic when I was accepted into medical school. it was supposed to be my golden ticket: all of us thought that doctors made tons of money. What I didn't realize was that both medical school tuition and the the loss of income during medical school, then residency, and then fellowship would be serious financial burdens, especially because my parents could not fund my medical school education. Though I had financial aid and scholarships for my undergrad, I took out loans for the first time for med school.
                            </p>
                            <h3 className="is-size-4 has-text-weight-semibold has-padding-l-md left-border has-margin-t-md has-margin-b-md">
                                No one ever tells you just how much it costs to become a doctor, especially if you want to go into primary care.
                            </h3>
                            <p>
                                As I progressed through med school, I saw my peers start to decide what types of doctors they would be. It seemed like the most difficult, prestigious, and lucrative careers were highly specialized fields in New York or California. I always wanted to go back to my hometown in Virginia and provide primary care as a family doctor, but it felt like I would be making a financial mistake compared to my peers. With my debt getting bigger every day and the pressure rising to provide for my family, I wish I had something like PCPSLF to give me the financial peace of mind to follow my dreams.
                            </p>
                        </div>
                    </div>
                    <footer className="card-footer has-margin-t-md">
                        <a href="#" className="card-footer-item">Tweet your support for students like Allie</a>
                    </footer>
                </div>
            </div>
        </div>
    </section>
)

export default Interview