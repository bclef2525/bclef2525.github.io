import React, { useEffect } from "react";
import styled from "styled-components";
import Article from "../../components/Article";
import MovieProduct from "../../components/MovieProduct";
import chartMovie from "../../Assets/Image/winfor_chart.mp4";
import detailMovie from "../../Assets/Image/winfor_detail.mp4";
import swagMovie from "../../Assets/Image/winfor_swag.mp4";
import liveSale from "../../Assets/Image/live_sale.mov";
import sauceTab from "../../Assets/Image/sauce_live_tab.mov";
import sauceDrop from "../../Assets/Image/sauce_drop.mov";
interface Props {}

const SauceLive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Article fontSize={40} content={["sauce live 인턴"]}></Article>
      <Article
        fontSize={28}
        content={[
          "소스라이브 앱 내에 삽입 될 webview페이지 제작",
          "상품의 상세 페이지로 유저별로 정보에 따라서 쿠폰이나 ",
          "상품 유형에 따른 view변화 구현"
        ]}
      ></Article>
      <MovieProduct
        width="28%"
        subTitle="time sale"
        movie={liveSale}
      ></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "live sale 상태일때 남은시간을 초단위로 갱신하며 보여주는 기능",
          "setInterval을 이용하여 구현",
          "페이지 이동시 언마운트에서 clearInterval로 해제하여 다른페이지에서 로딩되는것 방지"
        ]}
      ></Article>
      <MovieProduct subTitle="tab" movie={sauceTab}></MovieProduct>
      <Article
        fontSize={26}
        content={["tab 기능", "props.children으로 탭기능 구현"]}
      ></Article>
      <MovieProduct subTitle="drop down" movie={sauceDrop}></MovieProduct>

      <Article
        fontSize={26}
        content={[
          "children을 사용하여 스타일이 다른 컴포넌트를 ",
          "하나의 컴포넌트로 구현"
        ]}
      ></Article>

      <Article fontSize={56} content={["React/SCSS/REST API/Git"]}></Article>
      <Link href="https://www.youtube.com/watch?v=XF1IqVH1RK0">
        프로젝트 동영상 링크
      </Link>
    </Container>
  );
};

export default SauceLive;

const Container = styled.div`
  color: white;
  width: 100vw;
  margin: 20px 0;
`;
const Link = styled.a`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 60px;
`;
