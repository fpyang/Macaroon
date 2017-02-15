import React, { Component } from 'react';
import { selectedNumBox, operator } from '../actions/index';
import { bindActionCreators } from 'redux';
import Box from '../components/box';
import AnswerDetail from './answerDetail';
import { connect } from 'react-redux';
import axios from 'axios';

class BoxList extends Component {

  delegator(box){
    switch(box.num){
      case 'submit':
      case 'clear':
        return this.props.operator(box.num);
      default:
        return this.props.selectedNumBox(box);
    }

  }

  renderBoxList() {
    let currentNum = 0;
    if (this.props.activeNum){
      currentNum = this.props.activeNum.index;
    }
    return this.props.nums.map(
      (box) => {
        return (
          <Box
            key={box.index}
            index={box.index}
            actNum={currentNum}
            onClickEvent={() => {
              this.delegator(box);
              //this.props.answerNum(box.index, box.num);
            }}
            title={box.num}
            boxType={box.type}>
          </Box>
        );
      }
    );
  }

  render() {

  const outlineStyle = {
      //borderStyle: 'solid',
      //borderWidth: '10px',
      position: 'relative',
      float : 'left',
      marginRight: '30',
      marginLeft: '50',
      fontSize: '200%',
  };

  const containerStyle = {
      //width : '180px',
      //height: '300px'
      width : '360px',
      height: '600px'
  };

  const cueBoxStyle1 = {
      color: 'black',
      fontWeight: 'bold',
      width: '100px',
      height: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100px',
      backgroundColor: '#DA5050',
      margin: '10px',
      marginTop: '-530px',
      marginLeft: '70px',
      borderRadius: '50%',
      position: 'absolute'
    };

  const cueBoxStyle2 = {
      color: 'black', //where the last level is alpha(transparency)
      fontWeight: 'bold',
      width: '100px',
      height: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100px',
      backgroundColor: '#F1CD79',
      margin: '10px',
      marginTop: '-530px',
      marginLeft: '190px',
      borderRadius: '50%',
      position: 'absolute'
    };

    const color_mixin = {
      color: 'rgba(255,0,0,0.3)' //where the last level is alpha(transparency)
    };

    const cueBoxStyle3 = {
        color: 'black',
        fontWeight: 'bold',
        width: '100px',
        height: '100px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100px',
        backgroundColor: '#DCDE6A',
        margin: '10px',
        marginTop: '-410px',
        marginLeft: '70px',
        borderRadius: '50%',
        position: 'absolute'
      };

  const cueBoxStyle4 = {
      color: 'black',
      fontWeight: 'bold',
      width: '100px',
      height: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100px',
      backgroundColor: '#6FCAA7',
      margin: '10px',
      marginTop: '-410px',
      marginLeft: '190px',
      borderRadius: '50%',
      position: 'absolute'
    };

  const cueBoxStyle5 = {
      color: 'black',
      fontWeight: 'bold',
      width: '100px',
      height: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100px',
      backgroundColor: '#53AABD',
      margin: '10px',
      marginTop: '-290px',
      marginLeft: '70px',
      borderRadius: '50%',
      position: 'absolute'
    };

  const cueBoxStyle6 = {
      color: 'black',
      fontWeight: 'bold',
      width: '100px',
      height: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100px',
      backgroundColor: '#B87EB2',
      margin: '10px',
      marginTop: '-290px',
      marginLeft: '190px',
      borderRadius: '50%',
      position: 'absolute'
    };

    return (
      <div>
        <div style={fitScreen(outlineStyle)}>
          <div style={containerStyle}> {this.renderBoxList()} </div>
          <div style={cueBoxInvisible(cueBoxStyle1, false)}> 1 </div>
          <div style={cueBoxInvisible(cueBoxStyle2, false)}> 2 </div>
          <div style={cueBoxInvisible(cueBoxStyle3, false)}> 3 </div>
          <div style={cueBoxInvisible(cueBoxStyle4, false)}> 4 </div>
          <div style={cueBoxInvisible(cueBoxStyle5, false)}> 5 </div>
          <div style={cueBoxInvisible(cueBoxStyle6, false)}> 6 </div>
        </div>
        <AnswerDetail></AnswerDetail>

      </div>
    );
  }
}

/*
  Config the visibility of cueBox
*/
function cueBoxInvisible(cssStyle, onOff){

  const cloneStyle = Object.assign({}, cssStyle);
  if(onOff){
    cloneStyle.color = 'rgba(255,0,0,0)';
    cloneStyle.width = '0';
    cloneStyle.height = '0';
  }
  return cloneStyle;

}

function fitScreen(cssStyle) {
  const cloneStyle = Object.assign({}, cssStyle);
  //scloneStyle.width = screen.width;
  return cloneStyle;
}

// Anything returned from this function will end up as props
// on the BoxList container
function mapDispatchToProps(dispatch){
  // Whenever selectedNumBox is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectedNumBox: selectedNumBox, operator: operator }, dispatch);
}

function mapStateToProps(state){
  // Whever is returned will show up as props
  // inside of BoxList
  return {
    nums: state.nums,
    activeNum: state.activeNum,
    answer: state.answer
  };
}

// Promote BoxList from a component to a container - it
// needs to know about this new dispatch method, selectedNumBox & answerNum.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BoxList);
