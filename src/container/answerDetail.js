import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerNum } from '../actions/index';
import { bindActionCreators } from 'redux';

class AnswerDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { answer: ''};

    this.handleChange = this.handleChange.bind(this);

    this.selectStyle = {
     //margin: '50px',
     border: '1px solid #111',
     background: 'transparent',
     width: '120px',
     //padding: '5px 35px 5px 5px',
     fontSize: '16px',
     border: '1px solid #ccc',
     height: '34px',
     appearance: 'none',
     //background: 'url(http://www.stackoverflow.com/favicon.ico) 96% / 15% no-repeat #eee'

    };
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  //this.props.answerNum();
  const index = this.props.actNum['index'];
  const num = event.target.value;
  this.props.answerNum(index, num);
  this.state.answer = '';
}

  renderOptions() {

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
          <select style={this.selectStyle} onChange={this.handleChange} value={this.state.answer}>
            <option value=''> select here </option>
            {this.renderOptions()}
          </select>
        </form>
        </div>
      </div>
    );
  }
}
// Anything returned from this function will end up as props
// on the BoxList container
function mapDispatchToProps(dispatch){
  // Whenever selectedNumBox is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ answerNum: answerNum }, dispatch);
}


function mapStateToProps(state){

    return {
      actNum : state.activeNum, //current selected question nums
      nums : state.nums, //question nums
      answer : state.answer
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerDetail);
