import React from 'react';

import { Container } from './style';

interface PaginationProps {
  totalPages?: number;
  goToPage: any;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, goToPage }) => {
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <Container>
      {paginationItems.map(item => (
        <button type="button" key={item} onClick={() => goToPage(item + 1)}>
          {item + 1}
        </button>
      ))}
    </Container>
  );
};

export default Pagination;
