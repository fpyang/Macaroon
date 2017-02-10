import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { answer: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  console.log({value: event.target.value});
}

  renderOptions() {
    console.log(this.props);
    return this.props.answer.map(
        (answer) => {
          return (<option key={answer.answer}>{answer.answer}</option>);
      }
    );

  }

  render() {
    if (!this.props.actNum){
      return (<div> Loading ..... </div>);
    }
    return (
      <div>
        You click {this.props.actNum.index}
        <div>
        <form className="input-group">
          <select onChange={this.handleChange} value={this.state.value}>
            {this.renderOptions()}
          </select>
        </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  //console.log(state.activeNum);

    return {
      actNum : state.activeNum, //current selected question nums
      nums : state.nums, //question nums
      answer : state.answer
    };

};

export default connect(mapStateToProps)(AnswerDetail);
