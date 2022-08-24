import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  img {
    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
  }
`;
const CardInfo = styled.div``;

function Card(props) {
  return (
    <Wrapper>
      <img src={props.src} alt="" />
      <CardInfo>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <h4>{props.price}</h4>
      </CardInfo>
    </Wrapper>
  );
}

export default Card;
