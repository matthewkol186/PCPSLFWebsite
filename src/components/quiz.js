import React from 'react'
import QuizCard from './quizcard'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choices: [-1, -1]
        }

        this.setChoice = this.setChoice.bind(this);
    }

    setChoice(ind, val) {
        let new_choices = this.state.choices
        new_choices[ind] = val
        for(let i = ind + 1; i < new_choices.length; i++) {
            new_choices[i] = -1
        }
        this.setState({choices: new_choices})
    }

    render() {
        const questions = [
            "Do you work at a 501(c)3 or government agency or as a primary care physician in a health physician shortage area?",
            "What is your occupation?",
            ""
        ];

        const answers = [
            [
                "Yes",
                "No",
            ],
            [
                "PCP at FQHC or FQHC look-alike",
                "PCP in HPSA (non FQHC/lookalike)",
                "Other"
            ],
            [
            ]
        ]

        const prevAnswerMap = [
            [
            ],
            [
                "q", // will show the quiz
                "Sorry, it doesn't look like you're eligible for federal student loan forgiveness under PCPSLF. If you're having trouble paying off your federal student loans, consider consolidating your loans or exploring an income-based repayment plan!",
            ],
            [
                "Congrats! You're eligible for accelerated loan forgiveness under PCPSLF. All you have to do is take out federal direct loans and make 60 qualified monthly repayments (5 years worth). After the last monthly repayment, the rest of your remaining debt burden will be forgiven. PCPSLF will allow you to forgive your debt in just half the time as the current PSLF program!",
                "Depending on the state you live in, you may be eligible for accelerated loan forgiveness! If your state has opted-in to PCPSLF, then you will be able to forgive the remaining balance on your federal student loans after just 84 qualified monthly repayments (7 years worth). If you want this to be available to you, contact your state representatives and urge them to pass + opt in to PCPSLF!",
                "Woo-hoo! Under PCPSLF, you will be able to forgive the remaining balance on your federal student loans after 10 years, just like how it used to work under PSLF. If you're already working on loan repayments under PSLF today, absolutely nothing would change for you under PCPSLF."
            ]
        ]

        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Interactive Quiz
                    </h1>
                    <h2 className="subtitle">
                        Find out how much you'll save with PCPSLF!
                    </h2>
                </div>
                <div className="container has-padding-t-lg">
                    <div className="columns">
                        {
                            questions.map((x,i) => 
                                i == 0 ? <QuizCard question={x} key={x} answers={answers[i]} ind={i} showByDefault={true} setChoice={this.setChoice}/> : <QuizCard key={x} question={x} answers={answers[i]} ind={i} prevAnswer={this.state.choices[i - 1]} prevAnswerMap={prevAnswerMap[i]} setChoice={this.setChoice}/>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
} 

export default Quiz