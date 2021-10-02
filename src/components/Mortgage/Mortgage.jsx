import React from "react";
import styled from "styled-components";
import MortgageList from "./MortgageList";
import MortgageCalculator from "./MortgageCalculator";

const Wrapper = styled.div`
  background-color: #ebf0f3;
  padding-bottom: 50px;
`;

const Mortgage = () => {
  return (
    <Wrapper>
      <MortgageCalculator />
      <MortgageList />
    </Wrapper>
  );
};
export default Mortgage;
