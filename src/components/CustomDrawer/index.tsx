import React from 'react';

import { DrawerItemList, DrawerContentComponentProps} from "@react-navigation/drawer"
import { Container, Header, HeaderTitle } from './styles';

type CustomProps = DrawerContentComponentProps;

const CustomDrawer: React.FC<CustomProps> = ({...rest}) => {

  return (
    <Container>

      <Header>
        <HeaderTitle>Categorias</HeaderTitle>
      </Header>
      
      <DrawerItemList {...rest}/>
    </Container>
  )
}

export default CustomDrawer;