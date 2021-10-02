import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid grey;
`;
const Text = styled.div`
  ${({ sortBy, sort }) => `
    font-size: 14px;
    margin-right: 15px;
    cursor: ${sortBy === sort ? "default" : "pointer"};
    &:hover {
        color: ${sortBy === sort ? "black" : "blue"};
    }
  `}
`;
const SubTitle = styled.h3`
  font-size: 14px;
  margin-right: 15px;
`;

const MortgageSort = ({ initialMortages, setInitialMortages }) => {
  const [sortBy, setSortBy] = useState("");

  const sortMortage = (sortInfo) => {
    setSortBy(sortInfo);
    if (sortInfo === "byRate") {
      const sorted = [...initialMortages].sort(
        (a, b) => a.rate.periods[0].rate.from - b.rate.periods[0].rate.from,
      );
      setInitialMortages(sorted);
    } else {
      const sorted = [...initialMortages].sort(
        (a, b) => a.rate.creditAmount.from - b.rate.creditAmount.from,
      );
      setInitialMortages(sorted);
    }
  };

  return (
    <Wrapper>
      <SubTitle>Сортировать:</SubTitle>
      <Text onClick={() => sortMortage("byRate")} sortBy={sortBy} sort="byRate">
        по ставке
      </Text>
      <Text onClick={() => sortMortage("bySumm")} sortBy={sortBy} sort="bySumm">
        по сумме
      </Text>
    </Wrapper>
  );
};
export default MortgageSort;
