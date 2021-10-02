import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #ebf0f3;
  height: 100%;
`;
const Container = styled.div`
  margin: 20px auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid grey;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 25px;
  padding: 20px 0;
  text-align: center;
`;
const SubTitle = styled.h3`
  font-size: 14px;
  colort grey;
  padding-bottom: 10px;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  flex-grow: 1;
  height: 100px;
`;
const ImgBank = styled.img`
  max-width: 125px;
  max-height: 36px;
  margin: 45px;
`;

const ChoosedMortgage = () => {
  const history = useHistory();
  const choosedMortgages = history.location.state;
  const { organization, rate, customerRequirements } = choosedMortgages;

  return (
    <Wrapper>
      <Title>{organization.name}</Title>
      <Container>
        <DataBlock>
          <ImgBank src={organization.logo} alt="Bank img" />
        </DataBlock>
        <DataBlock>
          <SubTitle>Процентная ставка</SubTitle>
          <Text>{"от " + rate.periods[0].rate.from + " %"}</Text>
        </DataBlock>
        <DataBlock>
          <SubTitle>Сумма кредита</SubTitle>
          <Text>{"от " + rate.creditAmount.from + " ₽"}</Text>
        </DataBlock>
        <DataBlock>
          <SubTitle>Срок</SubTitle>
          <Text>{"1 год - " + rate.initialAmount.from + " лет"}</Text>
        </DataBlock>
        <DataBlock>
          <SubTitle>Возраст заёмщика</SubTitle>
          <Text>{"от " + customerRequirements.age + " года"}</Text>
        </DataBlock>
      </Container>
    </Wrapper>
  );
};
export default ChoosedMortgage;
