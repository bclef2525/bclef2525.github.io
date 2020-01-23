import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {}

const Splash = (props: Props) => {
  return (
    <>
      <Container>
        <Inner>
          <Text>const {"{ JO_IN_HO }"} = Developer.frontEnd</Text>
        </Inner>
      </Container>
    </>
  );
};

export default Splash;
const typing = keyframes`
    from{width:0%}
    to{width:100%}
`;
const blinkcaret = keyframes`{
    from, to { border-color: transparent }
    50% { border-color: orange; }
    }
`;
const loading = keyframes`
    {
        0%{
            display:block;
            top:0px;
           
        }
        70%{
            display:block;
      
            top:0px;
           
        }
        90%{
            display:block;
       
            top:-1800px;
           
        }
        100%{
      
            top:-1800px;
            display:none;
        }
    }
`;
const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${loading} 8s ease-in;
  animation-fill-mode: both;
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
`;
const Inner = styled.div`
  animation: ${typing} 4s steps(33, end);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`;
const Text = styled.div`
  overflow: hidden;
  text-align: center;
  animation: ${blinkcaret}.65s step-end infinite;
  font-size: 70px;
  font-weight: 900;
  width: 80%;
  color: #ffffff;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.05 em;
`;
