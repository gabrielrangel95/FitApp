import styled from 'styled-components/native';
import { colors } from '@styles';

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42;
  width: 120;
  background-color: ${props => (props.blocked ? 'grey' : 'black')};
  border-radius: 28;
  shadow-color: ${colors.regularTransparent};
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-offset: 2px 10px;
`;

const ButtonText = styled.Text`
  font-family: firaSansMedium;
  font-size: 16;
  color: ${colors.white};
`;

export { ButtonContainer, ButtonText };

