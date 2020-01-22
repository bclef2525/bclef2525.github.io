import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
interface Props {
  image: string;
  subTitle: string;
  width?: string;
  margin?: string;
  delay?: string;
}

const Product = (props: Props) => {
  return (
    <Container {...props}>
      <Subtitle>{props.subTitle}</Subtitle>
      <Inner>
        <ImageContainer>
          <Image {...props} src={props.image}></Image>
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
const Container = styled.div<Props>`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => (props.margin ? props.margin : "20px")};
  ${props =>
    props.delay &&
    css`
      animation: ${ImageMove} 1s ease-in ${props.delay};
      animation-fill-mode: both;
    `};
`;
const Inner = styled.div`
  width: 55%;
  height: 85%;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img<Props>`
  //   animation-delay: 8s;
  width:${props => (props.width ? props.width : "100%")}
 height: 100%;
`;
const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;
