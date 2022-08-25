import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  bottom: 0;
  text-align: center;
  bottom: 0;
  p {
    padding: 5px;
    font-size: 14px;
  }
`;
function Footer() {
  return (
    <Wrapper>
      <p>@ 2020 Airbnb Clone ! No rights resueved - this is a demo!</p>
      <p>Privacy Terms Sitemap Company Details</p>
    </Wrapper>
  );
}

export default Footer;
