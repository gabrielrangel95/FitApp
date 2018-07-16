import styled from 'styled-components/native';
import { colors } from '@styles';

const TextTitle = styled.Text`
  font-family: firaSansBold;
  font-size: ${props => (props.medium ? 24 : 20)};
  margin-bottom: ${props => (props.medium ? 30 : 8)};
  color: ${colors.black};
`;

export { TextTitle };
