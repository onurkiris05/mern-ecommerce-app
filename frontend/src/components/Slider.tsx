import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import sliderItems from "../data/sliderItems";

const Container = styled.div`
  width: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    color: #ddd;
    font-weight: bold;
    transition: 0.3s;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.2);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: gray;
`;

const Button = styled.button`
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  background: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--clr-3);
  }
`;

function Slider() {
  return (
    <Container>
      <Swiper
        navigation={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        loop={true}
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderContainer>
              <ImgContainer>
                <Image src={item.img} alt={item.alt} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </SliderContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
