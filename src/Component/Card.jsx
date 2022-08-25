import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
  img {
    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
  }
  :hover {
    transform: scale(1.07);
  }
`;

const CardInfo = styled.div`
  margin-top: -9px;
  border-radius: 10px;
  padding: 20px;
  padding-top: 20px;
  border: 1;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

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
