import React, { useState } from 'react';
import { Pager } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';

import * as S from './styles';
import './index.css';

import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Installations from '../Installations';
// import { string } from 'prop-types';

const FullPage = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {i}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <S.Wrapper>
      <React.Fragment>
        <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
          <Home />
          <About />
          <Projects />
          <Installations />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </React.Fragment>
    </S.Wrapper>
  );
};

export default FullPage;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
