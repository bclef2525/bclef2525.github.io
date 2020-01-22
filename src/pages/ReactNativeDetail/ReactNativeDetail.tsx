import React, { useEffect } from "react";
import styled from "styled-components";
import Article from "../../components/Article";
import MovieProduct from "../../components/MovieProduct";
import counterMovie from "../../Assets/Image/counter.mov";
import addTodoMovie from "../../Assets/Image/add_todo.mov";
import deleteTodoMovie from "../../Assets/Image/delete_todo.mov";
import movieAppMovie from "../../Assets/Image/movie_app.mov";
interface Props {}
const ReactNativeDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Article fontSize={40} content={["React Native Toy Project"]}></Article>
      <Article
        fontSize={28}
        content={[
          "React Native 를 이용하여 앱 제작을 공부중에 있습니다.",
          "현재까지 typescript|context API|Hooks|AsyncStorage|navigation등을 이용하여 앱 을 제작하였습니다.  "
        ]}
      ></Article>
      <MovieProduct
        width="28%"
        subTitle="counter"
        movie={counterMovie}
      ></MovieProduct>
      <Article
        fontSize={26}
        content={[
          "react native를 공부하며 처음 만들어 보았던 카운터 앱입니다.",
          "typescript|hooks 를 이용하였습니다."
        ]}
      ></Article>
      <MovieProduct
        width="28%"
        subTitle="TodoList"
        movie={addTodoMovie}
      ></MovieProduct>
      <Article
        fontSize={26}
        content={["TodoList 앱", "context API 사용", "add기능"]}
      ></Article>
      <MovieProduct
        width="28%"
        subTitle="TodoList"
        movie={deleteTodoMovie}
      ></MovieProduct>

      <Article fontSize={26} content={["delete 기능 "]}></Article>

      <MovieProduct
        width="28%"
        subTitle="movie"
        movie={movieAppMovie}
      ></MovieProduct>

      <Article
        fontSize={26}
        content={["오픈API를 활용하여 영화소개 앱 제작"]}
      ></Article>

      <Article fontSize={56} content={["React/SCSS/REST API/Git"]}></Article>
      <Link href="https://www.youtube.com/watch?v=hvcdtuk2U50&t=6s">
        프로젝트 동영상 링크
      </Link>
    </Container>
  );
};

export default ReactNativeDetail;
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
