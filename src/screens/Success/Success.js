import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { Title } from '@components';
import { Container, DescriptionText, DataRowContainer } from './SuccessStyle';

class Success extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { goal, age, height } = this.props.user;
    console.log(this.props.user);
    return (
      <Container>
        <Title medium>All Ready!</Title>
        <Title>We have done a personalized training plan for you!</Title>
        <DataRowContainer>
          <Title>Goal: </Title>
          <DescriptionText>{goal.title}</DescriptionText>
        </DataRowContainer>
        <DataRowContainer>
          <Title>Age: </Title>
          <DescriptionText>{age} years</DescriptionText>
        </DataRowContainer>
        <DataRowContainer>
          <Title>Height: </Title>
          {
              (height.feet && height.inches) ? (
                <DescriptionText>
                  {height.feet} Ft {height.inches} In
                </DescriptionText>
              ) : (
                <DescriptionText>
                  {height.centimetres} Cm
                </DescriptionText>
              )
            }
        </DataRowContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const SuccessConnect = connect(mapStateToProps, null)(Success);
export { SuccessConnect as Success };
