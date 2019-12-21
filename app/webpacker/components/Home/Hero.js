import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #2C5F2D;
  min-height: 350px;
  padding: 10px;
  color: #fff;
  border-bottom: #20bf6b 5px solid;
`
const H1 = styled.h1`
  color: white;
  font-height: 700;
  font-size: 40px;
  line-height: 40px;
`
const H2 = styled.p`
  font-size: 18px;
  font-weight: 500;
`
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

const Hero = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <H1>This is my Vlog</H1>
              <H2>Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
                non proident.</H2>
              <div className="cta-wrapper">
                <Button className="btn fancy-btn">Get started</Button>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe width="643" height="362" src="https://www.youtube.com/embed/S0-UR3FVH1E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero