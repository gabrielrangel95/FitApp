import styled from 'styled-components/native';
import { colors } from '@styles';
import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

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
});

const Container = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
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
  DescriptionText,
  DataRowContainer,
};
