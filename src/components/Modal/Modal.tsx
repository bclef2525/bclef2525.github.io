import React from "react";
import styled from "styled-components";

interface Props {}

const Modal = () => {
  return (
    <>
      <Container>
        <Link>gitHub</Link>
      </Container>
    </>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  z-index: 8;
  align-items: center;
`;

const Link = styled.div`
  text-align: center;
  font-size: 30px;
`;
