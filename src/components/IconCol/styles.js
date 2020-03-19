import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
`;

export const IconContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  text-align: center;
  width: 20%;
  padding-left: 100px;
`;

export const Icon = styled.img`
  width: 16px;
  padding-top: 20px;
  &:hover {
    opacity: 0.6;
  }
`;

export const Link = styled.a`
  text-align: left;
`;

export const Arrow = styled.img`
  width: 25px;
  padding-left: 90px;
`;
