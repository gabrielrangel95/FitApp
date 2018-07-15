import styled from 'styled-components/native';

const SegmentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
`;

const SegmentOption = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30;
  width: 80;
  background-color: ${props => (props.selected ? 'black' : 'white')}
  border-top-left-radius: ${props => (props.left ? 20 : 0)};
  border-bottom-left-radius: ${props => (props.left ? 20 : 0)};
  border-top-right-radius: ${props => (props.right ? 20 : 0)};
  border-bottom-right-radius: ${props => (props.right ? 20 : 0)};
  border-color: black;
  border-width: 1;
  border-style: solid;
  shadow-color: 'rgba(0, 0, 0, 0.3)',
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-offset: 2px 10px;
`;

const SegmentText = styled.Text`
  font-family: firaSansMedium;
  font-size: 12;
  color: ${props => (props.selected ? 'white' : 'black')};
`;

export { SegmentContainer, SegmentOption, SegmentText };

