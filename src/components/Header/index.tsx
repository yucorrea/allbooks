import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import menu from '../../assets/drawer.png';

import {
 Container, Menu, Image, HeaderTitle, Avatar 
} from './styles';

const url =
  'https://images.unsplash.com/photo-1601575330598-d0d7b6743511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const showDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <Container>
      <Menu onPress={showDrawer}>
        <Image source={menu} />
      </Menu>
      <HeaderTitle>Allbooks</HeaderTitle>
      <Avatar source={{ uri: url }} />
    </Container>
  );
};

export default Header;
