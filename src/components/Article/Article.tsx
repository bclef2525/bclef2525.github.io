import React from "react";
import styled from "styled-components";
interface Props {
  content: Array<string>;
}
const Article = (props: Props) => {
  const mapToConten = (contents: Array<string>): any => {
    return contents.map((props: string) => {
      return <Content>{props}</Content>;
    });
  };
  return (
    <>
      <Container>{mapToConten(props.content)}</Container>
    </>
  );
};

export default Article;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  widht: 100%;
  line-height: 30px;
  font-size: 25px;
  margin-bottom: 150px;
`;
const Content = styled.div`
  width: 100%;
  margin-top: 12px;
  font-weight: 700;
  text-align: center;
`;
