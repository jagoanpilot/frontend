import React from 'react'
import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './types'

const Container = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /*--- planet ---*/
  .planet {
    position: absolute;
    border-radius: 50%;
    background: #dd4837;
    height: 30%;
    width: 30%;
  }

  .circle {
    position: absolute;
    background-color: #cb382b;
    z-index: 1;
    border-radius: 50%;
  }

  .circle:nth-child(1) {
    width: 17.5%;
    height: 17.5%;
    top: 37.5%;
    left: 35%;
  }

  .circle:nth-child(2) {
    width: 10%;
    height: 10%;
    top: 20%;
    left: 45%;
  }

  .circle:nth-child(3) {
    width: 13%;
    height: 13%;
    top: 20%;
    left: 65%;
  }

  .circle:nth-child(4) {
    width: 11%;
    height: 11%;
    top: 60%;
    left: 65%;
  }

  .circle:nth-child(5) {
    width: 11%;
    height: 11%;
    top: 35%;
    left: 6%;
  }

  .circle:nth-child(6) {
    width: 9%;
    height: 9%;
    top: 75%;
    left: 15%;
  }

  .circle:nth-child(7) {
    width: 11%;
    height: 11%;
    top: 85%;
    left: 40%;
  }

  /*--- rocket ---*/
  .rocket {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(/images//rocket.png) no-repeat ${(props) => props.size / 16}px center;
    animation: 4s orbit infinite;
    animation-timing-function: linear;
    background-size: ${(props) => props.size * 0.25}px ${(props) => props.size * 0.25}px;
  }

  .flame {
    position: absolute;
    border-radius: 50%;
  }

  .flame:nth-child(1) {
    z-index: -5;
    top: 54%;
    left: 12.2%;
    background: rgb(244, 140, 6);
    background: linear-gradient(
      180deg,
      rgba(244, 140, 6, 1) 0%,
      rgba(250, 163, 7, 0.6726890585335696) 50%,
      rgba(255, 186, 8, 0.32535012295933996) 100%
    );
    width: ${(props) => props.size * 0.03}px;
    height: ${(props) => props.size * 0.035}px;
  }

  .flame:nth-child(2) {
    z-index: -4;
    top: 54%;
    left: 12.25%;
    background: rgb(232, 93, 4);
    background: linear-gradient(
      180deg,
      rgba(232, 93, 4, 1) 0%,
      rgba(244, 140, 6, 0.6726890585335696) 50%,
      rgba(250, 163, 7, 0.32535012295933996) 100%
    );
    width: ${(props) => props.size * 0.027}px;
    height: ${(props) => props.size * 0.04}px;
  }

  .flame:nth-child(3) {
    z-index: -3;
    top: 54%;
    left: 12.4%;
    background: rgb(220, 47, 2);
    background: linear-gradient(
      180deg,
      rgba(220, 47, 2, 1) 0%,
      rgba(232, 93, 4, 0.67) 50%,
      rgba(244, 140, 6, 0.33) 100%
    );
    width: ${(props) => props.size * 0.023}px;
    height: ${(props) => props.size * 0.035}px;
  }

  .flame:nth-child(3) {
    z-index: -2;
    top: 54%;
    left: 12.59%;
    background: rgb(208, 0, 0);
    background: linear-gradient(180deg, rgba(208, 0, 0, 1) 0%, rgba(220, 47, 2, 0.67) 50%, rgba(232, 93, 4, 0.33) 100%);
    width: ${(props) => props.size * 0.02}px;
    height: ${(props) => props.size * 0.03}px;
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container size={size}>
      <div className="planet">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      <div className="rocket">
        <div className="flame" />
        <div className="flame" />
        <div className="flame" />
        <div className="flame" />
      </div>
    </Container>
  )
}

export default Spinner
