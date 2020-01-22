import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import MenuIcon from "../../components/MenuIcon";
import Splash from "../Splash";
// import Modal from "../../components/Modal";
import Intro from "../../components/Intro";
import Product from "../../components/Product";
import Article from "../../components/Article";
import airBnB from "../../Assets/Image/air_bnb_main.png";
import winfor from "../../Assets/Image/winfor_card.png";
import sauceLive from "../../Assets/Image/sauce_live.png";
import reactNative from "../../Assets/Image/react_native.png";
import Modal from "../Modal";
import * as types from "../../Actions";
interface Props {
  mode: boolean;
  handleSplash: () => void;
}

const Main = (props: Props) => {
  console.log(props.mode);
  const [hide, setHide] = useState<Boolean | undefined>(false);
  const [modalMode, setModalMode] = useState<Boolean | undefined>(false);
  const [splash, setSplash] = useState<Boolean | undefined>(true);
  const articleId = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleIcon = (): void => {
    setHide(!hide);
    setModalMode(!modalMode);
  };
  const modalHandler = (): any => {
    if (modalMode === true) {
      return <Modal mode={modalMode}></Modal>;
    }
  };
  const splashHandler = () => {
    if (!props.mode) {
      return null;
    }
    setTimeout(props.handleSplash, 11000);
    return <Splash></Splash>;
  };
  return (
    <MainPage>
      {splashHandler()}
      <Header>
        <MenuIcon onClick={handleIcon} hideState={hide}></MenuIcon>
      </Header>
      {modalHandler()}
      {/* <Modal mode={modalMode ? modalMode : null}></Modal> */}
      <Intro splash={props.mode}></Intro>
      <Article
        ref={articleId}
        animation={true}
        delay={props.mode ? "10s" : "2s"}
        fontSize={30}
        content={[
          "과정을 즐기고 성과를 내는 행복한 개발자를 꿈꾸고 있습니다.",
          "꾸준한 노력으로 지속적인 성장을 하고 있습니다.",
          "현재 wecode를 수료하고 명예졸업생에 선정되어 파트멘토로 후배님들의 공부를 돕고있습니다."
        ]}
      ></Article>
      <Product
        delay={props.mode ? "11s" : "3s"}
        margin="180px"
        width="8%"
        subTitle="scroll down"
        image="https://indianfantail.com/wp-content/uploads/2018/02/scroll_down.gif"
      ></Product>
      <Article fontSize={47} content={["Project 1"]}></Article>
      <Link to="/Detail">
        <Product
          width="100%"
          subTitle="숙소 예약 사이트"
          image={airBnB}
        ></Product>
      </Link>
      <Article
        fontSize={47}
        content={["2 Weeks ,  front-end 3 , back-end 2"]}
      ></Article>
      <Article fontSize={47} content={["Project 2"]}></Article>
      <Link to="/WinforDetail">
        {" "}
        <Product
          width="100%"
          subTitle="게임 정보 사이트"
          image={winfor}
        ></Product>
      </Link>
      <Article
        fontSize={47}
        content={["2 Weeks ,  front-end 3 , back-end 2"]}
      ></Article>
      <Article fontSize={47} content={["Project 3"]}></Article>
      <Link to="/SauceLiveDetail">
        {" "}
        <Product width="100%" subTitle="Sauce Live" image={sauceLive}></Product>
      </Link>
      <Article fontSize={47} content={["1 Month"]}></Article>
      <Article fontSize={47} content={["Project 4"]}></Article>
      <Link to="/ReactNativeDetail">
        {" "}
        <Product
          width="40%"
          subTitle="React Native"
          image={reactNative}
        ></Product>
      </Link>
      <Article fontSize={47} content={["2 Weeks"]}></Article>
    </MainPage>
  );
};

const MainPage = styled.div`
  position: relative;
  color: #ffffff;
  width: 100vw;
  background-color: #161616;
  margin-bottom: 150px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
`;

const mapStateToProps = (state: any) => {
  return {
    mode: state.reducers.mode
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleSplash: () => {
      dispatch(types.splashMode());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
