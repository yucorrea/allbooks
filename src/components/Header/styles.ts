import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Menu = styled.TouchableOpacity``;

export const Image = styled.Image``;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-SemiBold';
  text-transform: uppercase;
`;

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 2px;
  border-color: #ccc;
`;
