import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
`;
const HeaderIcon = styled.img`
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
`;
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 99px;
  input {
    border: none;
    padding: 10px;
    outline-width: 0;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
`;

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <HeaderIcon
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <HeaderCenter>
        <input type={Text} />
        <SearchIcon />
      </HeaderCenter>
      <HeaderRight>
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </HeaderRight>
    </Wrapper>
  );
}

export default Header;
