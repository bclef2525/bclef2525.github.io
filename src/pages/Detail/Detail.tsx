import React, { useEffect } from "react";
import styled from "styled-components";
import Article from "../../components/Article";
import Product from "../../components/Product";
import Login from "../../Assets/Image/airbnb_login.png";
import SignUp from "../../Assets/Image/airbnb_signUp.png";
import HostRegiste from "../../Assets/Image/host_registe.png";
import MovieProduct from "../../components/MovieProduct";
import dropMapMovie from "../../Assets/Image/dropdown.mp4";
import HotelRegiste from "../../Assets/Image/hotelRegiste.png";
interface Props {}

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Article
        fontSize={40}
        content={["Project 1", "호텔예약 사이트"]}
      ></Article>
      <Article
        fontSize={28}
        content={[
          "호텔예약 사이트로 일반회원 호스트회원으로 가입이 가능하고 소셜로그인이 가능합니다.",
          "일반회원은 숙소예약 및 결제, 예약관리가 가능하고",
          "호스트 회원은 숙소등록 및 숙소관리 가능합니다.",
          "아래는 제가 제작한 페이지 입니다."
        ]}
      ></Article>
      <Product width="100%" subTitle="Login" image={Login}></Product>
      <Article
        fontSize={26}
        content={[
          "로그인 페이지",
          "외부 API를 이용하여 카카오,페이스북 소셜 로그인 구현 ",
          "JWT 토큰을 이용한 로그인 구현"
        ]}
      ></Article>
      <Product width="100%" subTitle="SignUp" image={SignUp}></Product>
      <Article fontSize={26} content={["회원가입 페이지"]}></Article>
      <Product
        width="100%"
        subTitle="HostRegiste"
        image={HostRegiste}
      ></Product>
      <Article
        fontSize={26}
        content={[
          "호스트등록 페이지",
          "multipart-formdata 타입 파일전송",
          "컴포넌트 재사용을 통한 생산성 향상"
        ]}
      ></Article>
      <MovieProduct
        subTitle="dropDown & Map"
        movie={dropMapMovie}
      ></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "호스트등록 페이지",
          "multipart-formdata 타입 파일전송",
          "컴포넌트 재사용을 통한 생산성 향상"
        ]}
      ></Article>
      <Product
        width="100%"
        subTitle="HotelRegiste"
        image={HotelRegiste}
      ></Product>
      <Article
        fontSize={26}
        content={[
          "호텔등록 페이지",
          "복수의 multipart-formdata 타입 파일전송",
          "Map API 를 활용하여 위도,경도 전송",
          "REST API를 사용하여 데이터 전송 "
        ]}
      ></Article>
      <Article fontSize={56} content={["React/SCSS/REST API/Git"]}></Article>
      <Link href="https://www.youtube.com/watch?v=lLnzKXLsck4&t=2s">
        프로젝트 동영상 링크
      </Link>
    </Container>
  );
};

export default Detail;

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
