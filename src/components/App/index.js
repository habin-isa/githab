import React from 'react';
import * as S from './styles';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Installations from '../Installations';
// import { string } from 'prop-types';

const App = () => {
  return (
    <S.Wrapper>
      <Home />
      <About />
      <Projects />
      <Installations />
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
