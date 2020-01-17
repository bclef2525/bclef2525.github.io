import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  image: string;
}

const Product = (props: Props) => {
  return (
    <Container>
      <Subtitle>호텔예약 사이트</Subtitle>
      <Inner>
        <ImageContainer>
          <Image src={props.image}></Image>
        </ImageContainer>
      </Inner>
    </Container>
  );
};

export default Product;
const ImageMove = keyframes`
    0% {
        opacity:0
    }
    70%{
        opacity:0
    }
    100%{
        opacity:1
    }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  width: 70%;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
`;
const Image = styled.img`
  //   animation-delay: 8s;
  animation: ${ImageMove} 2s ease-in;
  width: 100%;
  height: 100%;
`;
const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;
