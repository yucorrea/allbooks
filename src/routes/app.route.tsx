import React from 'react';

import { View } from "react-native";

import Home from "../pages/Home";

import CustomDrawer from "../components/CustomDrawer"
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerAvatar from "../components/DrawerAvatar"
const {Navigator, Screen} = createDrawerNavigator();

const DrawerRoutes : React.FC = () => (
  <Navigator 
    drawerContentOptions={{
      activeTintColor: "#00030D"
    }}
  screenOptions={() => ({
    drawerIcon: () => <DrawerAvatar />
  })}
    drawerContent ={ ({...rest}) => <CustomDrawer {...rest} />}
  >
    <Screen name="Todos os livros" component={Home}/>
    <Screen name="Ação" component={View}/>
    <Screen name="Romance" component={View}/>
    <Screen name="Drama" component={View}/>
    <Screen name="Terror" component={View}/>
    <Screen name="Suspense" component={View}/>
  </Navigator>
);

export default DrawerRoutes;