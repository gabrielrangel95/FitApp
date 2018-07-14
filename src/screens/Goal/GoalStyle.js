import styled from 'styled-components/native';

const MainContainer = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48;
`;

const BeansImage = styled.Image`
  height: 80%;
  width: 50%;
  position: absolute;
  top: 16%;
  left: 0;
`;

const DumbbellImage = styled.Image`
  height: 38%;
  width: 29%;
  position: absolute;
  right: 0;
  top: 50%;
`;

const MatImage = styled.Image`
  height: 10%;
  width: 30%;
  position: absolute;
  right: 0;
  top: 80%;
`;

const Logo = styled.Image`
  width: 22px;
  height: 44px;
  margin-bottom: 10;
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

const Title = styled.Text`
  font-family: firaSansBold;
  font-size: 24;
  color: black;
  margin-bottom: 30;
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

const CellTitle = styled.Text`
  font-family: firaSansBold;
  font-size: 20;
  color: black;
  margin-bottom: 8;
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
  BeansImage,
  DumbbellImage,
  MatImage,
  Logo,
  ContentContainer,
  SubTitle,
  Title,
  CellContainer,
  CellTitle,
  CellSubTitle,
  IconContainer,
};
