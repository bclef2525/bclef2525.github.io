import React from "react";
import styled, { css, keyframes } from "styled-components";

interface Props {
  hideState?: Boolean | undefined;
  onClick: () => void;
}

const hide = keyframes`
   {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const rise = keyframes`
   {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MenuIcon = (props: Props) => {
  console.log(props.hideState);

  return (
    <>
      <Container onClick={props.onClick}>
        <Inner>
          <Dot></Dot>
          {props.hideState ? <HideDot></HideDot> : <RiseDot></RiseDot>}
          <Dot></Dot>
        </Inner>
        <Inner>
          {props.hideState ? <HideDot></HideDot> : <RiseDot></RiseDot>}
          <Dot></Dot>
          {props.hideState ? <HideDot></HideDot> : <RiseDot></RiseDot>}
        </Inner>
        <Inner>
          <Dot></Dot>
          {props.hideState ? <HideDot></HideDot> : <RiseDot></RiseDot>}
          <Dot></Dot>
        </Inner>
      </Container>
    </>
  );
};

export default MenuIcon;

const Container = styled.div`
  width: 50px;
  height: 100%;
  padding: 4px;
  z-index: 11;
`;
const Inner = styled.div`
  display: flex;
  width: 100%;
`;

const Dot = styled.div`
  margin: 5px auto;
  background-color: #ffffff;
  width: 5px;
  height: 5px;
  translate: rotate(30);
`;
const HideDot = styled.div`
  animation: ${hide} 0.3s ease-in;
  animation-fill-mode: both;
  margin: 5px auto;
  background-color: #ffffff;
  width: 5px;
  height: 5px;
  translate: rotate(30);
`;

const RiseDot = styled.div`
  animation: ${rise} 0.3s ease-in;
  animation-fill-mode: both;
  margin: 5px auto;
  background-color: #ffffff;
  width: 5px;
  height: 5px;
  translate: rotate(30);
`;
