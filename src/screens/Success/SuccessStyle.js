import styled from 'styled-components/native';
import { colors } from '@styles';
import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  dataContainer: {
    display: 'flex',
    width: deviceWidth * 0.9,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    shadowColor: colors.regularTransparent,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowOffset: {
      width: 6,
      height: 6,
    },
  },
  logoImg: {
    width: 22,
    height: 44,
  },
  imgParsley: {
    height: '40%',
    width: '40%',
    position: 'absolute',
    top: '60%',
  },
});

const Container = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

const ItemsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: ${deviceHeight * 0.6};
  margin-top: 48;
`;

const DataRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DescriptionText = styled.Text`
  font-family: fireSansRegular;
  font-size: 16;
  color: ${colors.regular};
`;

export {
  Styles,
  Container,
  ItemsContainer,
  DescriptionText,
  DataRowContainer,
};
