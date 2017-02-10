import React, { Component } from 'react';

class Box extends Component {

  renderNumBox() {
    let theStyle = {};
    const boxStyle = {
        color: 'black',
        fontSize: '100%',
        width: '100px',
        height: '100px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100px',
        backgroundColor: '#f2f2f2',
        margin: '10px',
        float: 'left'
      };
    const selectedStyle = {
        color: 'black',
        fontSize: '100%',
        width: '100px',
        height: '100px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100px',
        backgroundColor: '#b3e6ff',
        margin: '10px',
        float: 'left'
    };

    if(this.props.index == this.props.actNum){
      theStyle=selectedStyle;
    }else{
      theStyle=boxStyle;
    }

    return (
      <div
        style={theStyle}
        onClick={this.props.onClickEvent}>{this.props.title}
      </div>
    );

  }

  renderEmptyBox() {
    const emptyBoxStyle = {
        color: 'black',
        fontSize: '50%',
        fontWeight: 'bold',
        width: '100px',
        height: '100px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100px',
        backgroundColor: 'white',
        margin: '10px',
        float: 'left'
      };
      return (
        <div style={emptyBoxStyle}>{this.props.title}</div>
      );
  }


  render() {
    //conditional rendering
    switch(this.props.boxType){
      case 'empty':
          return (<div>{this.renderEmptyBox()}</div>);
      case 'normal':
          return (<div>{this.renderNumBox()}</div>);
      default:
          return (<div/>);

    }

  }
}


export default Box;
