import React from 'react';
import * as S from './styles';
import IconCol from '../IconCol';

// import { string } from 'prop-types';

const Home = () => {
  return (
    <S.Wrapper>
      <S.TitleCol>
        <S.Link href="https://github.com/habin-isa/githab">Browse the c0de</S.Link>
      </S.TitleCol>
      <S.Container />
      <IconCol />
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
