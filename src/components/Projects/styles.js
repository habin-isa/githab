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
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 52%;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.24px;
  line-height: 16px;
  margin-bottom: 40px;
`;

export const ProjectsTitle = styled.div`
  text-align: justify;
`;

export const ProjectLinks = styled.div`
  padding-top: 20px;
`;

export const AppLink = styled.a`
  color: #d700d4;
  text-decoration: none;
  &:hover {
    color: #3f3f3f;
  }
`;

export const GithubLink = styled.a`
  color: #01bf1b;
  text-decoration: none;
  padding-left: 10px;
  &:hover {
    color: grey;
  }
`;

export const RightCol = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const RightTitle = styled.div`
  color: #3f3f3f;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.28px;
  line-height: 26px;
  text-align: right;
  padding-top: 50px;
  padding-bottom: 85px;
`;
