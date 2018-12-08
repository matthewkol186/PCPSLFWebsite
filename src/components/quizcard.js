import React from 'react'

class QuizCard extends React.Component {
    constructor(props) {
        super(props)
        this.shouldBeShown = this.shouldBeShown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldBeShown() {
        return this.props.showByDefault || this.props.prevAnswer !== -1;
    }

    handleClick(event) {
        this.props.setChoice(this.props.ind, parseInt(event.target.value));
    }

    render() {
        let shouldShow = this.shouldBeShown()
        let cardContent; 
        if (this.props.showByDefault || (this.props.prevAnswer !== -1 && this.props.prevAnswerMap[this.props.prevAnswer] === "q")) {
            cardContent = 
            <div className="box has-background-info">
                <h1 className="subtitle has-text-white has-text-weight-semibold">{this.props.question}</h1>
                <div className="control">
                {
                    this.props.answers && this.props.answers.map((x, i) =>
                        (
                            <div className="has-padding-b-sm" key={x}>
                                <input type="radio" name={"demo" + this.props.question} value={i} className="form-radio" onClick={this.handleClick}/>
                                <label className="has-text-white">{x}
                                </label>
                            </div>
                        )
                    )
                }
                </div>
            </div>
        } else {
            cardContent = 
            <div className="box has-background-success">
                <p className="is-size-5 has-text-white">{this.props.prevAnswerMap[this.props.prevAnswer]}</p>
            </div>
        }
            
        return (
            shouldShow && 
            <div className="column is-one-third">
                {
                    cardContent
                }
            </div>
        );
    }
} 

export default QuizCard