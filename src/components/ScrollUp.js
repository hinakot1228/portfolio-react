import React, { Component } from 'react';
import './ScrollUp.css';
import { animateScroll as scroll } from 'react-scroll';

class ScrollUp extends Component {

    scrollToTop = () => {
      scroll.scrollToTop(); 
    };
  
    render() {
      return(
        <div className="scroll scroll-up">
          <div className="arrow bounce" style={{ bounce }}>
            <i onClick={this.scrollToTop} className="fa fa-chevron-circle-up" />
          </div>
        </div>   
      );
    }
  
  }
  
  const bounce = {
    animation: 'bounce 2s infinite',
    color: '#fff'
  }
  
  export default ScrollUp;
