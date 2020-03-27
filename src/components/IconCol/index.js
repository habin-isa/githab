import React from 'react';
import * as S from './styles';
import githubIcon from './assets/github.png';
import emailIcon from './assets/email.png';
import linkedinIcon from './assets/linkedin.png';
import arrow from './assets/arrow-down.png';

// import { string } from 'prop-types';

const IconCol = () => {
  return (
    <S.Wrapper>
      <S.IconContainer>
        <S.Link href="https://github.com/habin-isa/">
          <S.Icon src={githubIcon} alt="gthub-icon" />
        </S.Link>
        <S.Link href="mailto:studio@habin-isa.com">
          <S.Icon src={emailIcon} alt="email-icon" />
        </S.Link>
        <S.Link href="https://www.linkedin.com/in/habin-isa/">
          <S.Icon src={linkedinIcon} alt="linkedin-icon" />
        </S.Link>
      </S.IconContainer>
      {/* <S.Arrow src={arrow} alt="arrow-icon" /> */}
    </S.Wrapper>
  );
};

export default IconCol;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
