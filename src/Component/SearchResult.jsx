import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }
`;
const SearchResultInfo = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
const SearchResultHeart = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
`;
const SearchResultInfoTop = styled.div`
  width: 40vw;
  h3 {
    font-weight: 300;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }
`;
const SearchResultInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchResultInfoStar = styled.div`
  color: red;
`;
const SearchResultInfoStars = styled.div`
  display: flex;
  align-items: center;
`;
const SearchResultInfoPrice = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  p {
    text-align: right;
  }
`;
function SearchResult(props) {
  return (
    <Wrapper>
      <img src={props.img} alt=""></img>
      <SearchResultHeart>
        <FavoriteBorderIcon />
      </SearchResultHeart>
      <SearchResultInfo>
        <SearchResultInfoTop>
          <p>{props.location}</p>
          <h3>{props.title}</h3>
          <p>____</p>
          <p>{props.description}</p>
        </SearchResultInfoTop>
        <SearchResultInfoBottom>
          <SearchResultInfoStars>
            <SearchResultInfoStar>
              <StarIcon />
            </SearchResultInfoStar>
            <p>
              <strong>{props.star}</strong>
            </p>
          </SearchResultInfoStars>
          <SearchResultInfoPrice>
            <h2>{props.price}</h2>
            <p>{props.total}</p>
          </SearchResultInfoPrice>
        </SearchResultInfoBottom>
      </SearchResultInfo>
    </Wrapper>
  );
}

export default SearchResult;
