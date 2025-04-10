import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
//  link 사용자의 액션값으로 직관적으로 어디론가 보낼때 쓰인다 마치 a
// useNavigate 훅함수이며 기능을 구현한다는 얘기다 a조건에 맞으면 a조건에 맞게 보낸다  둘다 react-router-dom 이다
import {
  faBars,
  faClose,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../AuthContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  & img {
    width: 200%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 60px;
  right: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 140px;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    padding: 4px 6px;
    outline: none;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  width: ${({ width }) => `${width}px`};
  //width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #b99225;
  color: #ccc;
  z-index: 1;
  transition: all 0.3s;
  overflow: hidden;
  & > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 22px;
    cursor: pointer;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 2rem;
    padding: 70px 40px;
    & > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "Female",
  "Man",
  "Kids'& Baby",
  "Recommend",
  "Best",
  "New",
  "Event",
  "Sale",
];
const Navbar = () => {
  const { authenticate, setAunthenticate } = useAuth();

  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`); //?q=원피스 이렇게 쿼리값에 원피스가 뜬다!!
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://i.namu.wiki/i/SQGa4YF5R_-6qlTL_28PL3b1EvTuBka9qjBIQY0ojlWfxRL-ckXFSV58gJqIFT1hLD4nTecN9SK4FSLG6jreRg.webp"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea className="menu">
        {menuList.map(
          (
            menu,
            index // jsx에서 map함수를 쓸 때에는 항상 key값을 정의해주어햐한다
          ) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          )
        )}
      </MenuArea>
      <HeaderTop>
        {authenticate ? (
          <LoginAuth
            onClick={() => {
              setAuthenticate(false);
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="상품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
      </HeaderTop>
      <SideMenu width={width} opacity={opacity}>
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => {
            setWidth(0);
            setOpacity(0);
          }}
        />
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setWidth(250);
            setOpacity(1);
          }}
        />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;
