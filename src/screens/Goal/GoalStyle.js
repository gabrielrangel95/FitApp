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
  padding-right: 20;
  padding-left: 20;
`;

const SubTitle = styled.Text`
  font-family: firaSansMedium;
  font-size: 12;
  color: black;
  margin-bottom: 20;
`;

const CellContainer = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 100;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  border-radius: 12;
  shadow-color: 'rgba(0, 0, 0, 0.3)',
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-offset: 2px 10px;
`;


const CellSubTitle = styled.Text`
  font-family: fireSansRegular;
  font-size: 16;
  color: grey;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 8%;
`;


export {
  MainContainer,
  ContentContainer,
  SubTitle,
  CellContainer,
  CellSubTitle,
  IconContainer,
};
