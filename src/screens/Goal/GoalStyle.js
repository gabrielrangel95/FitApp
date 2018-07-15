import styled from 'styled-components/native';

const MainContainer = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48;
`;

const ContentContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const SubTitle = styled.Text`
  font-family: firaSansMedium;
  font-size: 12;
  color: black;
  margin-bottom: 20;
`;

export {
  MainContainer,
  ContentContainer,
  SubTitle,
};
