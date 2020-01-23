import React from "react";
import styled, { keyframes } from "styled-components";
interface Props {
  movie?: any;
  subTitle: string;
  link?: string;
  width?: string;
}

const MovieProduct = (props: Props) => {
  return (
    <Container>
      <Subtitle>{props.subTitle}</Subtitle>
      <Inner {...props}>
        <MovieContainer>
          <Movie src={props.movie} controls>
            <source type="video/mp4" />
          </Movie>
        </MovieContainer>
      </Inner>
    </Container>
  );
};
export default MovieProduct;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div<Props>`
  width: ${props => (props.width ? props.width : "55%")};
  height: 85%;
`;
const MovieContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Movie = styled.video`
  //   animation-delay: 8s;
  // animation: ${ImageMove} 2s ease-in;
  width: 100%;
  height: 100%;
`;
const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;
