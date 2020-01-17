import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../components/MenuIcon";
import Splash from "../Splash";
import Modal from "../../components/Modal";
import Intro from "../../components/Intro";
import Product from "../../components/Product";
import airBnB from "../../Assets/Image/air_bnb_main.png";
import Article from "../../components/Article";
interface Props {}

const Main = (props: Props) => {
  const [hide, setHide] = useState<Boolean | undefined>(false);
  const handleIcon = (): void => {
    setHide(!hide);
  };
  return (
    <MainPage>
      {/* <Splash></Splash> */}
      <Header>
        <MenuIcon onClick={handleIcon} hideState={hide}></MenuIcon>
      </Header>
      <Intro></Intro>
      <Article
        content={[
          "과정을 즐기고 성과를 내는 행복한 개발자를 꿈꾸고 있습니다.",
          "끊임없는 노력으로 지속적인 성장을 하고 싶습니다."
        ]}
      ></Article>
      <Product image={airBnB}></Product>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  position: relative;
  color: #ffffff;
  width: 100vw;
  min-height: 100vh;
  background-color: #161616;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
`;
