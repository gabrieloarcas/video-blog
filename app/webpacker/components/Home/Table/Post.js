import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'

const Button = styled.a`
  color: #2C5F2D !important;
  text-transform: uppercase;
  background: #ffffff;
  padding: 5px;
  border: 4px solid #20bf6b !important;
  border-radius: 2px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  color: #000 !important;

  &:hover {
  border-radius: 10px;
  border-color: #97BC62FF !important;
  transition: all 0.3s ease 0s;
  }
`

const Post = (props) => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                < Thumbnail />
              </div>
              <div className="col-md-8>">
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

export default Post