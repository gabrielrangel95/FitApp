import React from 'react';
import { Title } from '@components';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {
  CellContainer,
  CellSubTitle,
  IconContainer,
} from './CardStyle';

const Card = props => (
  <CellContainer onPress={() => props.onGoalPress(props.item)}>
    <Title>{props.item.title}</Title>
    <CellSubTitle>{props.item.subTitle}</CellSubTitle>
    <IconContainer>
      <Feather name="chevron-right" size={24} color="grey" />
    </IconContainer>
  </CellContainer>
);

Card.propTypes = {
  onGoalPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }).isRequired,
};

export { Card };

