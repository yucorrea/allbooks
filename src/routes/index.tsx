import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import AppRoutes from "./app.route";

const {Navigator, Screen} = createStackNavigator();

const StackRoutes : React.FC = () => (
  <Navigator screenOptions={{
    headerShown: false
  }}>
    <Screen name="Início" component={AppRoutes}/>
  </Navigator>
);

export default StackRoutes;