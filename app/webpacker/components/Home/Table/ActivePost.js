import React, { Component } from 'react'
import Video from './Video'
import styled from 'styled-components'

const Button = styled.a`

color: #20bf6b !important;
text-transform: uppercase;
background: #ffffff;
padding: 20px;
border: 4px solid #20bf6b !important;
border-radius: 6px;
display: inline-block;
transition: all 0.3s ease 0s;
color: #494949 !important;

&:hover {
border-radius: 50px;
border-color: #494949 !important;
transition: all 0.3s ease 0s;
}
`

const ActivePost = (props) => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                < Video />
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
                    <Button onClick={props.handleVideoChange} className="cta-button">See this</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ActivePost