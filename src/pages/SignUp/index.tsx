import React from "react";

import { Link } from "react-router-dom";

import { Form } from "@unform/web";

import { Container, Content, Background } from "./styles";

import logoImg from "../../assets/logo.svg";

import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="user" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="senha"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
