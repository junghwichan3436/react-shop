import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; //q라는 키값을 가진 것을 searchquery안에 넣어주세요 값이 없다면 빈 문자열을 주세요
    //동기적처리를 해야하기때문에 async await 사용
    const url = `http://localhost:3000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json(); //안에있는 json 데이터를 객체로 바꾸어주세요
    setProductList(data); //productList는 처음앤 빈배열이였다가 컴포넌트가 랜더링되는 시점에서 getProducts를 실행한다
  };
  useEffect(() => {
    getProducts();
  }, [query]); //query 값이 바뀌면 리랜더링 해주세요 수동으로 새로고침을 하지않나도 된다
  return (
    <Container>
      <Row className="justify-content-center">
        {productList.map((menu, index) => (
          <Col className="mb-4" key={index} xs={3} sm={3} md={3} lg={3}>
            <ProductCard
              item={menu}
              //부트스트랩의 반응형 설정하기
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
