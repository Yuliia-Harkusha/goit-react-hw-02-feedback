import React from 'react';
import PropTypes from 'prop-types';
import { GiCoffeeCup } from 'react-icons/gi';
import {
  FeedbackBlock,
  FeedbsckItem,
  OptionBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBlock>
      {options.map(option => {
        return (
          <FeedbsckItem key={option}>
            <GiCoffeeCup />
            <OptionBtn onClick={() => onLeaveFeedback(option)} name={option}>
              {option}
            </OptionBtn>
          </FeedbsckItem>
        );
      })}
    </FeedbackBlock>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
