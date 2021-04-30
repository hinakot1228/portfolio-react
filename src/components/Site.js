import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Site.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

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
          <h3>{this.props.category}「{this.props.name}」</h3>
            <div className='site-wrapper'>
                <img className='site-img' src={this.props.image}></img>
                {/* <img className='site-img' src={`${process.env.PUBLIC_URL}/website-2.png`}></img> */}
            </div>
            <div>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Show Detail</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='according-menu-padding'>
                    <div className='product-info'>
                      <p>名前：{this.props.name}</p>
                      <p>サイト：{this.props.url}</p>
                      <p>GitHub URL：{this.props.github}</p>
                      <p>開発環境：{this.props.dev}</p>
                      <p>使用言語：{this.props.lang}</p>
                      <p>制作期間：{this.props.period}</p>
                      <p>機能：{this.props.functions}</p>
                      <p>こだわりポイント：<br></br>{this.props.points}</p>
                  </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
        </div>
    </>
    );
  }
}

export default withRouter(Site)
