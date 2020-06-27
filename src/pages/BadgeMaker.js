import React, { useState } from "react";
import { Logo } from "../comps/Logo";
import styled from "styled-components";
import Nav from "../comps/Nav";

const options = {
  hairdo: ["none", "hair1"],
  hair: ["#000000", "#FF0000"],
  skin: ["#000000", "#FF0000"],
};

const optionTypes = ["Hairdo", "Hair", "Skin", "Pants", "Trim"];

const BadgeMaker = ({ logoSettings, setLogoSettings }) => {
  const [currType, setCurrType] = useState(0);

  return (
    <Outer>
      <Nav />
      <Logo settings={logoSettings} size={400} />
      <OptionTypes>
        {optionTypes.map((type, index) => (
          <OptionType
            key={type}
            selected={currType === index}
            onClick={() => setCurrType(index)}
          >
            {type}
          </OptionType>
        ))}
      </OptionTypes>
    </Outer>
  );
};

export default BadgeMaker;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionTypes = styled.div`
  margin-top: 20px;
  display: flex;
`;

const OptionType = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  margin: 5px;
  border: 2px solid black;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;
`;
