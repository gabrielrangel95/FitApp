import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const DataRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DescriptionText = styled.Text`
  font-family: fireSansRegular;
  font-size: 16;
  color: grey;
`;

export { Container, DescriptionText, DataRowContainer };
