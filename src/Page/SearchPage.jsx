import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import SearchResult from "../Component/SearchResult";
const Wrapper = styled.div``;
const SearchPageInfo = styled.div`
  padding: 20px;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  h1 {
    margin-bottom: 30px;
  }
  Button {
    border-radius: 30px;
    text-transform: inherit;
    margin: 5px;
  }
`;

function SearchPage() {
  return (
    <Wrapper>
      <SearchPageInfo>
        <p>62 stays, 26 August to 30 August , 2guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </SearchPageInfo>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGW0sL7JlLhJCebfZl8GUxAmb04PKsOiYUkA&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1guest, 1bedroom, 1bed, 1.5 shared bathrooms"
        star="4.73"
        price="30 / night"
        total="117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGW0sL7JlLhJCebfZl8GUxAmb04PKsOiYUkA&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1guest, 1bedroom, 1bed, 1.5 shared bathrooms"
        star="4.73"
        price="30 / night"
        total="117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGW0sL7JlLhJCebfZl8GUxAmb04PKsOiYUkA&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1guest, 1bedroom, 1bed, 1.5 shared bathrooms"
        star="4.73"
        price="30 / night"
        total="117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGW0sL7JlLhJCebfZl8GUxAmb04PKsOiYUkA&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1guest, 1bedroom, 1bed, 1.5 shared bathrooms"
        star="4.73"
        price="30 / night"
        total="117 total"
      />
    </Wrapper>
  );
}

export default SearchPage;
