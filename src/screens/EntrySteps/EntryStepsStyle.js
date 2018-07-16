import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '@styles';

const deviceWidth = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

const DataContainer = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 24;
  margin-bottom: 20;
  max-height: 50%;
`;

const EntryContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DataInput = styled.TextInput`
  ${props => (props.flex1 ? 'flex: 1' : 'display: flex')}
  width: ${props => (props.full ? (deviceWidth * 0.8) : '100%')};
  font-family: firaSansBold;
  font-size: 32;
  color: ${colors.black};
  text-align: center;
  margin-left: 12;
  margin-right: 12;
`;

const InputTypeText = styled.Text`
  position: relative;
  top: 2%;
  left: ${props => (props.smallItem ? '-150%' : '-320%')};
  font-family: fireSansRegular;
  font-size: 16;
  color: ${colors.dark};
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 12;
`;

const ErrorText = styled.Text`
  font-family: fireSansRegular;
  font-size: 16;
  color: ${colors.danger};
  margin-bottom: 12;
`;

export {
  Container,
  DataContainer,
  EntryContainer,
  DataInput,
  InputContainer,
  InputTypeText,
  ErrorText,
};
