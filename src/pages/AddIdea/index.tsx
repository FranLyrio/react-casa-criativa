import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Container } from './style';
import Input from '../../components/Input';

import api from '../../services/api';
import Idea from '../../components/Idea';

interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface IdeaParam {
  id: string;
}

const AddIdea: React.FC = () => {
  const { register, handleSubmit } = useForm<Idea>();
  const { params } = useRouteMatch<IdeaParam>();
  const history = useHistory();
  const [idea, setIdea] = useState<Idea | null>(null);

  const updateIdea = useCallback(async () => {
    await api.get(`idea/${params.id}`).then(response => setIdea(response.data));
  }, [params.id]);

  useEffect(() => {
    if (!params.id) {
      setIdea(null);
    } else {
      updateIdea();
    }
  }, [params.id, updateIdea]);

  const onSubmit = useCallback(
    async (data: Idea) => {
      if (!params.id) {
        await api.post(`idea/`, data);
      } else {
        await api.put(`idea/${params.id}`, data);
      }

      history.push('/ideas');
    },
    [history, params.id],
  );

  return (
    <Container>
      <a href="/">
        <FiChevronLeft size={25} color="#01ffc2" />
        Voltar
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={idea?.title}
          placeholder="Ex.: Brincar com o catioro 🐶"
          name="title"
          register={register({ required: true })}
        />
        <Input
          defaultValue={idea?.category}
          placeholder="Ex.: Lazer"
          name="category"
          register={register({ required: true })}
        />
        <textarea
          defaultValue={idea?.description}
          placeholder="Ex.: Quais brincadeiras, lugares para levá-lo etc."
          name="description"
          ref={register({ required: true })}
        />
        <button type="submit">Salvar ideia!</button>
      </form>
    </Container>
  );
};

export default AddIdea;

// REACT-HOOK-FORM

// <form onSubmit={handleSubmit(onSubmit)}>
// handleSubmit valida os inputs antes de chamar o onSubmit
// "handleSubmit" will validate your inputs before invoking "onSubmit"

// <input name="example" defaultValue="test" ref={register} />
// registre seu input com o hook através da função "register"
// register your input into the hook by invoking the "register" function

// <input name="exampleRequired" ref={register({ required: true })} />
// validação: required, ou qualquer validação html (formato etc)
// include validation with required or other standard HTML validation rules

// {errors.exampleRequired && <span>This field is required</span>}
// se a validação falhar, retornará erros
// errors will return when field validation fails

// value: não dá pra editar
// defaultValue: dá pra editar!!
