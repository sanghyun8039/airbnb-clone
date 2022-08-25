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
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="350/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="350/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="350/night"
        />
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
