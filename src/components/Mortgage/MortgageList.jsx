import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import mortgageApi from "../../api/mortgageApi";
import { actionGetMortgages } from "../../store/actions/mortgageActions";
import MortgageSort from "./MortgageSort";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  background-color: #fff;
`;
const MortageWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 20px 0;
  }
`;
const Text = styled.div`
  font-size: 12px;
  line-height: 1.8;
`;
const Percent = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const Payment = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  width: 300px;
  max-width: 300px;
`;
const ImgBank = styled.img`
  max-width: 125px;
  max-height: 36px;
`;
const StyledButton = styled.button`
  border: 1px solid rgb(13, 209, 73);
  background-color: rgb(13, 209, 73);
  border-radius: 4px;
  width: 100%;
  height: 40px;
  color: #fff;
  cursor: pointer;
`;
const LoadInformation = styled.div`
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
`;

const MortgageList = () => {
  const [initialMortages, setInitialMortages] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const mortgages = useSelector((state) => state.mortgages);
  const [remainUpdate, setRemainUpdate] = useState(
    mortgages.length - initialMortages.length,
  );

  useEffect(() => {
    setInitialMortages(mortgageApi.slice(0, 9));
    dispatch(actionGetMortgages(mortgageApi));
  }, []);

  useEffect(() => {
    setRemainUpdate(mortgages.length - initialMortages.length);
  }, [initialMortages.length]);

  const loadNewMortgages = () => {
    setInitialMortages(mortgages.slice(0, initialMortages.length + 15));
  };

  return (
    <Wrapper>
      <MortgageSort
        initialMortages={initialMortages}
        setInitialMortages={setInitialMortages}
      />
      {initialMortages.map((mortage, index) => (
        <MortageWrapper key={index}>
          <DataBlock>
            <ImgBank src={mortage.organization.logo} alt="Bank img" />
          </DataBlock>
          <DataBlock>
            <Percent>{mortage.rate.periods[0].rate.from + "%"}</Percent>
            <Text>{mortage.name}</Text>
          </DataBlock>
          <DataBlock>
            <Payment>{"???? " + mortage.rate.creditAmount.from + " ???"}</Payment>
            <Text>
              {"???? ???????? ???? " + mortage.rate.initialAmount.from + " ??????"}
            </Text>
          </DataBlock>
          <DataBlock>
            <Text>
              {"?????????????? ???? " + mortage.customerRequirements.age + " ????????"}
            </Text>
            <Text>
              {"???????? ???? " +
                mortage.customerRequirements.lastExperience +
                " ??????????????"}
            </Text>
            <Text>{mortage.customerRequirements.documents + " ??????????????????"}</Text>
          </DataBlock>
          <DataBlock>
            <StyledButton
              onClick={() => {
                history.push({
                  pathname: "/choosedMortgage",
                  state: mortage,
                });
              }}
            >
              ??????????????????
            </StyledButton>
          </DataBlock>
        </MortageWrapper>
      ))}
      {mortgages.length !== initialMortages.length && (
        <LoadInformation onClick={() => loadNewMortgages()}>
          {"???????????????? ?????? " +
            (remainUpdate >= 15 ? "15" : remainUpdate) +
            " ???? " +
            remainUpdate}
        </LoadInformation>
      )}
    </Wrapper>
  );
};
export default MortgageList;
