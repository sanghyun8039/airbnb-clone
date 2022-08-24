import React from "react";
import styled from "styled-components";
import Banner from "../Component/Banner";
import Card from "../Component/Card";
const Wrapper = styled.div``;
const HomeSection = styled.div`
  display: flex;
  padding: 30px;
`;

function HomePage() {
  return (
    <Wrapper>
      <Banner />
      <HomeSection>
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720"
          title="HIDEOUT 1"
          description="Les Su2"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720"
          title="HIDEOUT 1"
          description="Les Su2"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720"
          title="HIDEOUT 1"
          description="Les Su2"
        />
      </HomeSection>
      <HomeSection>
        <Card />
        <Card />
        <Card />
      </HomeSection>
      <HomeSection>
        <Card />
        <Card />
        <Card />
      </HomeSection>
    </Wrapper>
  );
}

export default HomePage;
