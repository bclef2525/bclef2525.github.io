import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  mode?: Boolean | undefined;
}

const Modal = (props: Props) => {
  return (
    <>
      <Container {...props}>
        <Inner>
          <Link href="https://github.com/bclef2525">Github</Link>
          <Link href="https://velog.io/@bclef25">Blog</Link>
        </Inner>
      </Container>
    </>
  );
};

export default Modal;

const modalMove = keyframes`
    from{opacity:0}
    to{opacity:1}
`;
const modalClose = keyframes`
    from{opacity:1}
    to{opacity:0}
`;
const Container = styled.div<Props>`
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #161616;
  animation: ${props => (props.mode ? modalMove : modalClose)} 1s ease-out;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
`;
const Link = styled.a`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 70px;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  font-size: 60px;
`;
