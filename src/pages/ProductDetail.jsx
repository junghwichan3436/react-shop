import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  margin-top: 50px;
  & button {
    padding: 10px 20px;
    font-size: 1.8rem;
    width: 50%;
  }
  &.dropdown-item {
    font-size: 1.8rem;
  }
`;

const Img = styled.img`
  /* width: 100%; */
  border-radius: 10px;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.div`
  font-size: 2rem;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
`;

const ProductSale = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");
  const [loading, setLoading] = useState(false); // false로 주었기 때문에 로딩이 되지 않고 있다를 의미(기본값)
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true); //데이터가 로딩중이니까 true로 준다
    const url = `https://my-json-server.typicode.com/junghwichan3436/react-shop/products/${id}`; //http://localhost:3000/products/1 원래 이걸로 값을 주는 데 아이디 값을 변수를 이용해서 유연하게 만들어주었다
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false); //여기까지 왔다면 로딩이 끝났다라고 판단한다
    console.log(data);
  };

  const fotmattedPrice = new Intl.NumberFormat("ko-KR", {
    styled: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []); //컴포넌트가 마운트가 되는 순간 getProductDetail이라는 함수실행
  if (loading || product === null) {
    //null값이라면 Loading을 실행해줘
    return <h1>Loading...</h1>;
  } else {
    // 아무문제가 없다면 아래 애를 출력해줘
    return (
      <Container>
        <Wrapper>
          <Row>
            <Col>
              <Img src={product && product?.img} alt={product && product?.id} />
            </Col>
            <Col>
              <ProductDesc>
                <ProductTitle>상품명 : {product?.title}</ProductTitle>
                <ProductPrice>상품가격 : {fotmattedPrice}</ProductPrice>
                <ProductSale>{product?.slae ? "슈퍼세일상품" : ""}</ProductSale>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    {selectedSize}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product?.size.length > 0 &&
                      product?.size.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setSelectedSize(item)}
                        >
                          {item}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                  {/* //아이템과 키값찾아오기 */}
                </Dropdown>
                <Button variant="dark">장바구니</Button>
                <Button variant="danger">상품결제</Button>
              </ProductDesc>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    );
  }
};

export default ProductDetail;
``;
