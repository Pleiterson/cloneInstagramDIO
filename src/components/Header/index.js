import React from 'react';
import { Image } from 'react-native';

import Logo from '../../assets/img/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
}
