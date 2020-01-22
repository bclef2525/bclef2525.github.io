import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  splash: boolean | undefined;
}

const Intro = (props: Props) => {
  return (
    <Container>
      <Inner>
        <Relative>
          <TextContainer
            style={
              props.splash
                ? { animationDelay: "7.5s", fontSize: "80px" }
                : { animationDelay: "1.5s", fontSize: "80px" }
            }
          >
            안녕하세요!
          </TextContainer>
        </Relative>
        <Relative>
          <TextContainer
            style={
              props.splash
                ? { animationDelay: "7.5s" }
                : { animationDelay: "1.5s" }
            }
          >
            {/* style={{ animationDelay: "8.5s" }} */}
            프론트 엔드 개발자
          </TextContainer>
        </Relative>
        <Relative>
          <TextContainer
            style={
              props.splash ? { animationDelay: "8s" } : { animationDelay: "2s" }
            }
          >
            {/* style={{ animationDelay: "9s" }} */}
            조인호 입니다.
          </TextContainer>
        </Relative>
      </Inner>
    </Container>
  );
};

export default Intro;

const TextMove = keyframes`
    from{
        opacity:0    
    }
    to{
        opacity:1
    }
`;
const Container = styled.div`
  margin-left: 10px;
  margin-top: 80px;
  width: 100%;
  height: 45vh;
`;

const Inner = styled.div`
  margin: 20px auto;
  width: 80%;
  height: 80%;
`;
const Relative = styled.div`
  position: relative;
`;
const TextContainer = styled.div`
  animation: ${TextMove} 2s ease-in;
  animation-delay: 7s;
  animation-fill-mode: both;
  opacity: 0;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  margin: 10px 0;
  width: 100%;
  height: 32%;
  line-height: 100px;
`;
