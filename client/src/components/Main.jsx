import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import styled from "styled-components";

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        
    </div>
  )
}


export default Main

// Styles
const StyledContactmain = styled.div`
  

  main {
    width: 100%;
  height: 100vh;

  video {
    width: 100%;
  height: 100%;
  object-fit: cover;
    }

    content {
        position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
    }

    .overlay {
        position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  /* background-color: #000000cc; */
}
  }
`;


