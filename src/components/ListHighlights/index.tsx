import React from 'react';

import data from "./data";

import { List,  Wrapper, Image, Title } from './styles';

const ListHighlights: React.FC = () => {
  return (
   
    <List>
      {data.map(item => (
        <Wrapper key={item.id}>
          <Image source={{uri: item.source}} resizeMode="cover"/>
          <Title>{item.title}</Title>
        </Wrapper>
      ))}
    </List>
  )
}

export default ListHighlights;