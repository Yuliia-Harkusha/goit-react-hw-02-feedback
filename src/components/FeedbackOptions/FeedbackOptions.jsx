import React from 'react';
import PropTypes from 'prop-types';
import { GiCoffeeCup } from 'react-icons/gi';
import {
  FeedbackBlock,
  FeedbsckItem,
  OptionBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackBlock>
      <FeedbsckItem>
        <GiCoffeeCup />
        <OptionBtn onClick={() => onLeaveFeedback('good')}>Good</OptionBtn>
      </FeedbsckItem>
      <FeedbsckItem>
        <GiCoffeeCup />
        <OptionBtn onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </OptionBtn>
      </FeedbsckItem>
      <FeedbsckItem>
        <GiCoffeeCup />
        <OptionBtn onClick={() => onLeaveFeedback('bad')}>Bad</OptionBtn>
      </FeedbsckItem>
    </FeedbackBlock>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
