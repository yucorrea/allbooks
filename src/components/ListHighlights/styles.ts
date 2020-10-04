import styled from 'styled-components/native';

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0px;
`;

export const Wrapper = styled.View`
  margin: 0 10px;
`;

export const Image = styled.Image`
  height: 135px;
  width: 115px;
  border-radius: 10px;
  background: #ccc;
`;

export const Title = styled.Text`
  width: 115px;
  font-size: 12px;
  font-family: 'Montserrat-Regular';
  color: #f2f2f2;
  margin-top: 8px;
`;
