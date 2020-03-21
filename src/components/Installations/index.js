import React from 'react';
import * as S from './styles';
import IconCol from '../IconCol';
// import { string } from 'prop-types';

const Installations = () => {
  return (
    <S.Wrapper>
      <S.TitleCol>
        <S.Title>Installations</S.Title>
      </S.TitleCol>
      <S.Container>Content content content</S.Container>
      <IconCol />
    </S.Wrapper>
  );
};

export default Installations;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
