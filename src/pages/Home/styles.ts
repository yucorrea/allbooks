import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Search = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px;
  margin: 32px 16px;
  border-radius: 5px;
  height: 56px;
  background:  #f2f2f2;
  
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0px 8px;
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #777;
`;

export const Clear = styled.TouchableOpacity``;
