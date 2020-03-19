import React from 'react';
import * as S from './styles';
import IconCol from '../IconCol';

// import { string } from 'prop-types';

const Projects = () => {
  return (
    <S.Wrapper>
      <S.TitleCol>
        <S.Title>Projects</S.Title>
      </S.TitleCol>
      <S.Container>
        <S.LeftCol></S.LeftCol>
        <S.RightCol>
          <S.RightTitle>
            Sample Frontend web applications
            <br />
            <b>
              <i>Play</i>
            </b>{' '}
            to interact,{' '}
            <b>
              <i>Githab</i>
            </b>{' '}
            to browse the c0de
          </S.RightTitle>
        </S.RightCol>
      </S.Container>
      <IconCol />
    </S.Wrapper>
  );
};

export default Projects;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
