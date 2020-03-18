import React from 'react';
import * as S from './styles';
import FullPage from '../FullPage';
// import { string } from 'prop-types';

const App = () => {
  return (
    <S.Wrapper>
      <FullPage />
    </S.Wrapper>
  );
};

export default App;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
