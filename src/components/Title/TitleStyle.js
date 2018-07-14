import styled from 'styled-components/native';

const TextTitle = styled.Text`
  font-family: firaSansBold;
  font-size: ${props => (props.big ? 32 : props.medium ? 24 : 20)};
  margin-bottom: ${props => (props.big ? 60 : props.medium ? 30 : 8)};
  color: black;
`;

export { TextTitle };
