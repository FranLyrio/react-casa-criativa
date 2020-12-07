import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import Idea from '../../components/Idea';
import Anchor from '../../components/Anchor';
import Header from '../../components/Header';

import { Container, Content, Ideas } from './style';

interface Idea {
  id: string;
  title: string;
  category: string;
  description: string;
}

const Home: React.FC = () => {
  const [latestIdeas, setLatestIdeas] = useState<Idea[]>([]);
  const history = useHistory();
  const url = 'idea';

  useEffect(() => {
    api.get(`/${url}/`).then(response => {
      setLatestIdeas(response.data);
    });
  }, [latestIdeas]);

  const deleteIdea = useCallback(
    (id: string) => {
      api.delete(`/${url}/${id}`);
      history.push('/');
    },
    [history],
  );

  const updateIdea = useCallback(
    (id: string) => {
      history.push(`/edit/${id}`);
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Header>CASA CRIATIVA</Header>
        <p>
          Ficar em casa em períodos longos não deve ser nada fácil. Por isso,
          iremos catalogar ideias, brincadeiras, jogos, filmes, livros, cursos,
          dicas e tudo que for necessário para tornar esse momento mais
          interessante. Comece clicando em ver ideias para explorar as ideias
          cadastradas e contribua adicionando a sua.
        </p>

        <Anchor href="/create">+ Adicionar ideia</Anchor>
      </Content>

      <Ideas>
        {latestIdeas.map(idea => (
          <Idea key={idea.id}>
            <h3>{idea.title}</h3>
            <p>{idea.category}</p>
            <p>{idea.description}</p>
            <div>
              <button type="button" onClick={() => updateIdea(idea.id)}>
                <FiEdit />
              </button>
              <button type="button" onClick={() => deleteIdea(idea.id)}>
                <FiTrash />
              </button>
            </div>
          </Idea>
        ))}

        <Anchor background="pink" href="ideas">
          Ver mais ideias!
        </Anchor>
      </Ideas>
    </Container>
  );
};

export default Home;
