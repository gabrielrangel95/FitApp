import styled from 'styled-components/native';

const ArrowLeftContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 12;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`;

const DataContainer = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 24;
  margin-bottom: 20;
  max-height: 54%;
`;

const DataInput = styled.TextInput`
  font-family: firaSansBold;
  font-size: 32;
  color: black;
`;


export {
  ArrowLeftContainer,
  Container,
  DataContainer,
  DataInput,
};
