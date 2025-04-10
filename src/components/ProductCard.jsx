import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Img = styled.img``;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    //상품을 클릭하면 작동한다
    navigate(`products/${item?.id}`); //상품의 아이디 값을 가져온다
  };
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency", //원화로 바꾸기
    currency: "KRW",
  }).format(item?.price); //price 앞에 붙은 객체의 형태를 상속받는다
  return (
    <Container onClick={showDetail}>
      <Img src={item && item?.img} alt="style" />
      <div>{item && item?.title}</div>
      <div>{item && formattedPrice}</div>
      <div>{item && item?.new === true ? "신상품" : ""}</div>
    </Container>
  );
};

export default ProductCard;
