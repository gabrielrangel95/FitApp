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
`;

export {
  ArrowLeftContainer,
  Container,
};
