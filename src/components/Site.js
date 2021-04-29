import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Site.css';

class Site extends Component {

  constructor(props){
    super(props);
    this.state = {
      category: '',
      name: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleClick(){
    this.props.history.push({
      pathname: "/product",
      state: { 
          category: this.state.category,
          name: this.state.name
      }
  });
  }

  render() {
    return (
        <>
        <div className='site-container'>
            <div className='site-wrapper'>
                {/* <img className='site-img' src={`${process.env.PUBLIC_URL}/{props.image}`}></img> */}
                <img className='site-img' src={`${process.env.PUBLIC_URL}/website-2.png`}></img>
                <div className='site-info'>
                    <span value={this.state.category} className='site-category'>
                        {this.props.category}
                    </span>
                    <span className='site-name'>
                        {this.props.name}
                    </span>
                    <button onClick={this.handleClick}>画面遷移します</button>
                </div>
            </div>
        </div>
    </>
    );
  }
}

export default withRouter(Site)
