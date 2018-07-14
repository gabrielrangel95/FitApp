import styled from 'styled-components/native';

const StepperContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6;
`;

const StepperItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.activy ? '#1ed677' : 'white')};
`;

export { StepperContainer, StepperItem };
