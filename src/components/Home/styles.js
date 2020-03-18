import styled from 'styled-components';
import homeImg from './assets/home.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 35px;
`;

export const LeftCol = styled.div`
  padding-top: 15px;
  color: #01bf1b;
  // font-family: Avenir;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.24px;
  line-height: 26px;
  min-width: 200px;
  width: 10%;
`;

export const Container = styled.div`
  background: url(${homeImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 780px;
`;

export const RightCol = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  text-align: center;
  width: 20%;
`;
