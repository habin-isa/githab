import React from 'react';
import * as S from './styles';
import IconCol from '../IconCol';
import portraitImg from './assets/portrait.png';

// import { string } from 'prop-types';

const About = () => {
  return (
    <S.Wrapper>
      <S.TitleCol>
        <S.Title>About</S.Title>
      </S.TitleCol>
      <S.Container>
        <S.LeftCol>
          <S.ImgContainer>
            <S.PortraitImg src={portraitImg} alt="portrait-img" />
            <S.ImgCaption>Habin Isabelle Kim | b.1994 | British South Korean</S.ImgCaption>
          </S.ImgContainer>
          <S.TextContainer>
            <S.IntroText>
              Mid-level Frontend Software engineer, with two years commercial experience working with Vue and React. I
              trained at Makers Academy and have a creative background in making kinetic installations during my degree.
              I value best practices, XP values and good communication (I strictly speak in puns and JavaScript).
            </S.IntroText>
            <S.CvText>2019 - Worked at Cytora - React, Customer Experience team</S.CvText>
            <S.CvText>2018 - Worked at Mettrr - Vue, Nuxt, Preact, A/B testing</S.CvText>
            <S.CvText>2018 - Graduated Makers - Software Development course</S.CvText>
            <S.CvText>2017 - Graduated University of Brighton - First Class Honours</S.CvText>
          </S.TextContainer>
        </S.LeftCol>
        <S.RightCol>
          <S.PersonaText>
            I go by Habs and I grew up in Surrey. I am fluent in English and Korean. I am currently very interested in
            the health tech industry and apps that are doing social good. In my spare time I like to build apps and code
            into the night. I'm usually also preoccupied by moshing to side trance and playing tennis (the two go hand
            in hand). Recently I have taken up boxing which has taught me a lot about self discipline and mindfulness.
            I'm always keen to meet people in the dev + girl c0de community so drop me an email if you'd like to chat!
          </S.PersonaText>
          <S.EmailText>studio@habin-isa.com</S.EmailText>
        </S.RightCol>
      </S.Container>
      <IconCol />
    </S.Wrapper>
  );
};

export default About;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
