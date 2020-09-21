import React from "react";

import { Container, Content, Background } from "./styles";

import logoImg from "../../assets/logo.svg";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <form>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="senha"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="cadastro">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
