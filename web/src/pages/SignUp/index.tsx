import React, { useCallback, useRef } from 'react';
import { FiLock, FiUser, FiMail } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import logoImg from '../../images/landing.svg';

import { Container, Logo, Title, SubTitle } from './styles';

interface DataProps {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const handleSignUp = useCallback(
    async (data: DataProps) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', {
          name: data.name,
          email: data.email,
          password: data.password,
        });
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no Proffy!',
        });

        history.push('/signin');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no Cadastro',
          description: ' Ocorreu um erro ao fazer Cadastro',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Logo>
        <h2>Sua plataforma de orfantos para visitação.</h2>
        <img src={logoImg} alt="Happy" />
      </Logo>
      <Form onSubmit={handleSignUp} ref={formRef}>
        <Link to="/">
          <FaArrowLeft size={24} color="#565656" />
        </Link>
        <Title>Cadastro</Title>
        <SubTitle>Preencha os dados abaixo para começar.</SubTitle>

        <Input
          icon={FiUser}
          name="name"
          id="name"
          label="nome"
          placeholder="Nome"
        />
        <Input
          icon={FiMail}
          name="email"
          id="email"
          label="E-mail"
          placeholder="example@seuemail.com "
        />
        <Input
          icon={FiLock}
          name="password"
          label="senha"
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Concluir cadastro</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
