import styled from 'styled-components';
import installationsImg from './assets/installations.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 35px;
  padding-top: 30px;
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

export const Container = styled.div`
  background: url(${installationsImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 780px;
  display: flex;
  align-items: center;
`;
