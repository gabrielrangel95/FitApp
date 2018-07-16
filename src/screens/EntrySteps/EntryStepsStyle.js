import styled from 'styled-components/native';

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

const EntryContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DataInput = styled.TextInput`
  ${props => (props.flex1 ? 'flex: 1' : 'display: flex')}
  font-family: firaSansBold;
  font-size: 32;
  color: black;
  text-align: center;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24;
`;

export {
  Container,
  DataContainer,
  EntryContainer,
  DataInput,
  InputContainer,
};
