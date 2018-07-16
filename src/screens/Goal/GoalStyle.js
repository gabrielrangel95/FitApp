import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors } from '@styles';

const Styles = StyleSheet.create({
  beansImage: {
    height: '80%',
    width: '50%',
    position: 'absolute',
    top: '16%',
  },
  matImage: {
    height: '10%',
    width: '30%',
    position: 'absolute',
    top: '80%',
  },
  dumbbellImage: {
    height: '38%',
    width: '29%',
    position: 'absolute',
    top: '50%',
  },
  dataContainer: {
    flex: 1,
    width: '100%',
  },
  logoImg: {
    width: 22,
    height: 44,
    marginBottom: 10,
  },
});

const MainContainer = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48;
  background-color: ${colors.white};
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
  color: ${colors.black};
  margin-bottom: 20;
`;

export {
  Styles,
  MainContainer,
  ContentContainer,
  SubTitle,
};
