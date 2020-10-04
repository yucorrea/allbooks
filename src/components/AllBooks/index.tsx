import React from 'react';
import { FlatList } from 'react-native';

import data from './data';

import {
 Wrapper, Image, Title, Price 
} from './styles';

const AllBooks: React.FC = () => (
  <FlatList
    data={data}
    keyExtractor={item => String(item.id)}
    showsHorizontalScrollIndicator={false}
    numColumns={2}
    renderItem={({ item }) => (
      <Wrapper>
        <Image source={{ uri: item.source }} resizeMode="cover" />
        <Title>{item.title}</Title>
        <Price>
          R$
          {item.price}
        </Price>
      </Wrapper>
    )}
    columnWrapperStyle={{
      alignItems: 'flex-start',
      padding: 16,
    }}
  />
);

export default AllBooks;
