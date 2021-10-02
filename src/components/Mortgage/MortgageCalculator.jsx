import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  min-height: 200px;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;

const MortgageCalculator = () => (
  <Wrapper>
    <Title>Ипотечный калькулятор</Title>
  </Wrapper>
);
export default MortgageCalculator;
