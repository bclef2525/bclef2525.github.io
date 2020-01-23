import React, { useRef } from "react";
import styled, { keyframes, css } from "styled-components";
interface Props {
  content: Array<string>;
  fontSize: number;
  animation?: boolean;
  ref?: any;
  delay?: string;
}
const contentMove = keyframes`
    from{ top : 70px}to{top :20px}
`;
const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  widht: 100%;
  line-height: 30px;
  font-size: ${props => props.fontSize || 30}px;
  margin-bottom: 80px;
`;
const Content = styled.div<Props>`
  position: absolute;
  width: 100%;
  font-weight: 700;
  text-align: center;
  top: 20px;
  line-height: 10px;
  ${props =>
    props.animation === true &&
    css`
      animation: ${contentMove} 0.7s ease-in;
    `};
  ${props =>
    props.delay &&
    css`
      animation: ${contentMove} 0.7s ease-in ${props.delay};
      animation-fill-mode: both;
    `};
`;

const Inner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 55px;
  margin-bottom: 15px;
`;

const Article = (props: Props) => {
  const mapToConten = (contents: Array<string>): any => {
    return contents.map((prop: string) => {
      return (
        <Inner>
          <Content {...props}>{prop}</Content>
        </Inner>
      );
    });
  };
  return (
    <>
      <Container {...props}>{mapToConten(props.content)}</Container>
    </>
  );
};

export default Article;
