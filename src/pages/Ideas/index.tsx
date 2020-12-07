import React, { useCallback, useEffect, useState } from 'react';

import { FiChevronLeft, FiTrash } from 'react-icons/fi';
import api from '../../services/api';
import { Container } from './style';

import Idea from '../../components/Idea';
import Pagination from '../../components/Pagination';

interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
}

const Ideas: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    api.get(`idea/${currentPage}`).then(response => {
      const [dataPerPage, count] = response.data;

      setIdeas(dataPerPage);
      setTotal(count / 4);
    });
  }, [total, currentPage]);

  const deleteIdea = useCallback((id: string) => {
    api.delete(`idea/${id}`);
    window.location.reload();
  }, []);

  return (
    <Container>
      <a href="/">
        <FiChevronLeft size={25} color="#01ffc2" />
        Voltar
      </a>
      {ideas.map(idea => (
        <Idea key={idea.id}>
          <h3>{idea.title}</h3>
          <p>{idea.category}</p>
          <p>{idea.description}</p>
          <div>
            <button type="button" onClick={() => deleteIdea(idea.id)}>
              <FiTrash />
            </button>
          </div>
        </Idea>
      ))}

      <Pagination
        totalPages={total}
        goToPage={(page: number) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default Ideas;
