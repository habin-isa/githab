import styled from 'styled-components';
import aboutImg from './assets/about.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 35px;
  padding-top: 30px;
`;

export const Container = styled.div`
  background: url(${aboutImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 780px;
  display: flex;
  align-items: center;
  // box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.5), 2px 6px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const TitleCol = styled.div`
  padding-top: 15px;
  color: #01bf1b;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.24px;
  line-height: 26px;
  min-width: 200px;
  width: 20%;
`;

export const Title = styled.a`
  text-decoration: none;
  color: #d700d4;
`;

export const LeftCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8%;
  height: 100%;
  align-items: flex-start;
  padding-top: 120px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-top: 20%;
`;

export const PortraitImg = styled.img`
  width: 170px;
`;

export const ImgCaption = styled.div`
  color: #000;
  font-size: 9px;
  font-weight: 300;
  line-height: 28px;
  text-align: right;
  padding-top: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IntroText = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.1px;
  line-height: 20px;
  text-align: justify;
  padding-top: 35px;
  padding-bottom: 20px;
`;

export const CvText = styled.div`
  color: #666;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 20px;
`;

export const RightCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8%;
  height: 100%;
  align-items: flex-start;
  padding-top: 120px;
`;

export const PersonaText = styled.div`
  color: #666;
  font-size: 10px;
  font-style: oblique;
  font-weight: lighter;
  letter-spacing: 0.1px;
  line-height: 20px;
  text-align: justify;
`;

export const EmailText = styled.div`
  color: #01bf1b;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.2px;
  line-height: 30px;
  text-align: justify;
  padding-top: 20px;
`;
