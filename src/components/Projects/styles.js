import styled from 'styled-components';
import projectsImg from './assets/projects.png';

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
  background: url(${projectsImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 780px;
  display: flex;
  align-items: center;
`;

export const LeftCol = styled.div`
  width: 100%;
  padding: 0 8%;
`;

export const RightCol = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 0 8%;
`;

export const RightTitle = styled.div`
  color: #3f3f3f;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.28px;
  line-height: 26px;
  text-align: right;
  padding-top: 50px;
`;
