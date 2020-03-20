import React from 'react';
import * as S from './styles';
import IconCol from '../IconCol';

// import { string } from 'prop-types';

const Projects = () => {
  const leftInfo = [
    {
      title: 'Algobabe',
      info: '16 step sequencer to make your 808 dreams a reality, React, 2020',
      appLink: 'http://algobabe.herokuapp.com/',
      githubLink: 'https://github.com/habin-isa/algobabe'
    },
    {
      title: 'Wheeler Dealer',
      info: 'If bargain hunt was a dot com empire, React, 2020',
      appLink: 'https://wheeler-dealer-dot.herokuapp.com/',
      githubLink: 'https://github.com/habin-isa/wheeler-dealer'
    }
  ];

  const rightInfo = [
    {
      title: 'Stream Dream',
      info: 'Watch PAQ grow, Youtube data API app, React, 2019',
      appLink: 'https://stream-dream-kyra.herokuapp.com/',
      githubLink: 'https://github.com/habin-isa/stream-dream'
    },
    {
      title: 'Abraham Linkoln',
      info: 'Bookmarks manager. Never lose a link again brah, Angular, 2019',
      appLink: 'https://abraham-linkoln.herokuapp.com/',
      githubLink: 'https://github.com/habin-isa/phantom-abraham-linkoln'
    }
  ];

  const renderedProjects = (val) => {
    return val.map((project, i) => (
      <S.ProjectsContainer key={i}>
        <S.ProjectsTitle>
          <b>{project.title}</b>
          <br />
          {project.info}
        </S.ProjectsTitle>
        <S.ProjectLinks>
          <S.AppLink href={project.appLink}>
            <b>Play</b>
          </S.AppLink>
          <S.GithubLink href={project.githubLink}>
            <b>Githab</b>
          </S.GithubLink>
        </S.ProjectLinks>
      </S.ProjectsContainer>
    ));
  };

  return (
    <S.Wrapper>
      <S.TitleCol>
        <S.Title>Projects</S.Title>
      </S.TitleCol>
      <S.Container>
        <S.LeftCol>{renderedProjects(leftInfo)}</S.LeftCol>
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
          <div>{renderedProjects(rightInfo)}</div>
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
