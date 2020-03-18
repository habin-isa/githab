import React from 'react';
import * as S from './styles';
// import { string } from 'prop-types';

const Home = () => {
  return (
    <S.Wrapper>
      <S.LeftCol>Browse the c0de</S.LeftCol>
      <S.Container />
      <S.RightCol>
        <div>Icons</div>
        <div>Arrow</div>
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Home;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
