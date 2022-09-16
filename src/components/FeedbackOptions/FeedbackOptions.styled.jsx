import styled from 'styled-components';

export const FeedbackBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px auto;
`;

export const FeedbsckItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding-top: 10px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const OptionBtn = styled.button`
  padding: 10px;
  width: inherit;
  font-size: 20px;
  font-weight: 500;
  color: #f1e1e1;
  background-color: #a60ea1;
  border: none;
  border-radius: 0 0 5px 5px;
  :hover {
    background-color: #ce10c7;
  }
`;
