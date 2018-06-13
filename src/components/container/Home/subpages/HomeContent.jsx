import React from 'react';
import { Content } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';

const HomeContent = () => (
  <Content hasTextAlign="centered">
    <h1>Bem vindo a sua carteira virtual!</h1>
    <p>Comece a fazer suas transações de forma rápida e segura!</p>
    <FontAwesomeIcon icon={Icons.faMoneyCheck} size="5x"></FontAwesomeIcon>
  </Content>
);

export default HomeContent;
