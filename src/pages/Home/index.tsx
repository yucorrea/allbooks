import React, { useState, useMemo, useCallback } from 'react';

import { FlatList } from "react-native";

import Icon from "react-native-vector-icons/Feather"
import Header from  "../../components/Header";
import Title from "../../components/Title";
import ListHighlights from "../../components/ListHighlights";
import AllBooks from "../../components/AllBooks";

import { Container, Search,Input, Clear } from './styles';

interface Item {
  id: string;
  render(): JSX.Element;
  isTitle?: boolean;
}

const Home: React.FC = () => {

  const [searchText, setSearchText] = useState('');

  const { items } = useMemo(() => {
    const items : Item[] = [
      {
        id: 'HIGHLIGHTS_BOOKS_TITLE',
        render: () => <Title>Destaques</Title>,
        isTitle: true
      },
      {
        id: 'HIGHLIGHTS_BOOKS',
        render: () => <ListHighlights />,
      },
      {
        id: 'ALL_BOOKS_TITLE',
        render: () => <Title>Todos os livros</Title>,
        isTitle: true
      },
      {
        id: 'ALL_BOOKS',
        render: () => <AllBooks />,
      }
    ]

    return { items }
  },[])


  const handleClean = useCallback(() => {
      setSearchText('');
  },[])

  return (
    <Container>
      <Header />

      <Search>
        <Icon name="search" color="#777" size={24}/>
        <Input 
          value={searchText}
          placeholderTextColor="#777" 
          placeholder="Pesquise seu livro"
          onChangeText={(text) => setSearchText(text)}
        />
        
        {searchText.length > 0 && 
        (
         <Clear onPress={handleClean}>
            <Icon name="x" color="#777" size={24}/>
          </Clear>
        )}

      </Search>

      <FlatList<Item> 
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => item.render()}
        showsVerticalScrollIndicator={false}
        onRefresh={() => {}}
        refreshing={false}
        style={{
          backgroundColor: "#00030D",
          flex: 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 8,
          paddingVertical: 16
        }}
      />
    </Container>
  )
}

export default Home;