import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CellContainer = styled.TouchableOpacity`
  display: flex;
  width: ${deviceWidth * 0.9};
  height: ${deviceHeight * 0.14};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  border-radius: 8;
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-opacity: 0.75;
  shadow-radius: 2;
  shadow-offset: 6px 6px;
  
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
  CellContainer,
  CellSubTitle,
  IconContainer,
};
