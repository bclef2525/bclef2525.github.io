import React, { useEffect } from "react";
import styled from "styled-components";
import Article from "../../components/Article";
import MovieProduct from "../../components/MovieProduct";
import loginMovie from "../../Assets/Image/winfor_login.mov";
import mainMovie from "../../Assets/Image/winfor_main.mp4";
import chartMovie from "../../Assets/Image/winfor_chart.mp4";
import detailMovie from "../../Assets/Image/winfor_detail.mp4";
import swagMovie from "../../Assets/Image/winfor_swag.mp4";
interface Props {}

const WinforDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Article
        fontSize={40}
        content={["Project 2", "게임정보 사이트"]}
      ></Article>
      <Article
        fontSize={28}
        content={[
          "리그 오브 레전드 게임정보 사이트로 소환사 검색이 가능하고",
          "티어별 승률 챔피언 정보 등을 차트나 이미지로 제공하며",
          "자랑페이지를 통해 내 전적을 자랑 할수 있습니다.",
          "아래는 제가 제작한 페이지 입니다."
        ]}
      ></Article>
      <MovieProduct subTitle="login" movie={loginMovie}></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "로그인 페이지",
          "keyframes를 활용한 animation 구현 ",
          "JWT 토큰을 이용한 로그인 구현"
        ]}
      ></Article>
      <MovieProduct subTitle="main page" movie={mainMovie}></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "메인 페이지",
          "query string을 이용하여 소환사 검색 요청",
          "token유무에 따라 디자인 변경"
        ]}
      ></Article>
      <MovieProduct subTitle="static page" movie={chartMovie}></MovieProduct>

      <Article
        fontSize={26}
        content={["티어별 통계 페이지", "high charts를 사용하여 차트 구현"]}
      ></Article>
      <MovieProduct
        subTitle="champion detail page"
        movie={detailMovie}
      ></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "챔피언 상세 페이지",
          "query string 활용하여 path마다 컴포넌트에 다른 데이터를 연동",
          "컴포넌트 재사용을 통한 생산성 향상"
        ]}
      ></Article>
      <MovieProduct subTitle="brag page" movie={swagMovie}></MovieProduct>
      <Article
        fontSize={26}
        content={["자랑하기 페이지", "퍼블리싱"]}
      ></Article>
      <Article fontSize={56} content={["React/SCSS/REST API/Git"]}></Article>
      <Link href="https://www.youtube.com/watch?v=dgCXLsQI5k8">
        프로젝트 동영상 링크
      </Link>
    </Container>
  );
};

export default WinforDetail;
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
