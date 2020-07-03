import React from "react";
import styled from "styled-components";

const TypeColourSelector = ({
  title,
  option1,
  option2,
  option1Selected,
  option2Selected,
  onOption1Selected,
  onOption2Selected,
}) => {
  return (
    <Outer>
      <Title>{title}</Title>
      <Options>
        <Option selected={option1Selected} onClick={onOption1Selected}>
          {option1}
        </Option>
        {option2 && (
          <Option isLast selected={option2Selected} onClick={onOption2Selected}>
            {option2}
          </Option>
        )}
      </Options>
    </Outer>
  );
};

export default TypeColourSelector;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`;

const Title = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: white;
`;

const Options = styled.div`
  display: flex;
`;

const Option = styled.div`
  padding: 5px;
  font-size: 18px;
  flex: 1;
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: 2px solid black;
  border-left: ${(props) => (props.isLast ? "none" : "2px solid black")};
  font-weight: bold;
  border-radius: ${(props) => (props.isLast ? "0 3px 3px 0" : "3px 0 0 3px")};
`;
