import React, { useState } from "react";
import { Logo } from "../comps/Logo";
import styled from "styled-components";
import Nav from "../comps/Nav";

const globalColours = [
  "#fbfbf0",
  "#2e2e30",
  "#ff4338",
  "#ff6b00",
  "#ffc843",
  "#05ce7c",
  "#00b3e3",
  "#da3ab3",
];

const options = {
  Hairdo: ["none", "hair1"],
  Hair: ["#9e5143", "#a19f9b", ...globalColours],
  Skin: ["#5e3132", "#8d5524", "#deaa87", "#ffdbac", ...globalColours],
  Pants: [...globalColours],
  Trim: [...globalColours],
};

const optionTypes = Object.keys(options);

const BadgeMaker = ({ logoSettings, setLogoSettings }) => {
  const [currCategory, setCurrCategory] = useState(2);
  const currOptionKey = optionTypes[currCategory];
  const currOptions = options[currOptionKey];

  const onOptionSelect = (updatedOption) => {
    setLogoSettings({ ...logoSettings, ...updatedOption });
  };

  return (
    <Outer>
      <Nav />
      <Logo settings={logoSettings} size={400} />

      <Controls>
        <Categories>
          {optionTypes.map((type, index) => (
            <Category
              key={type}
              selected={currCategory === index}
              onClick={() => setCurrCategory(index)}
            >
              {type}
            </Category>
          ))}
        </Categories>

        <CurrentOptions>
          {currOptions.map((option) => (
            <Option
              key={option}
              onClick={() => onOptionSelect({ [currOptionKey]: option })}
            >
              <Logo
                settings={{
                  ...logoSettings,
                  [currOptionKey]: option,
                }}
              />
            </Option>
          ))}
        </CurrentOptions>
      </Controls>
    </Outer>
  );
};

export default BadgeMaker;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Categories = styled.div`
  display: flex;
`;

const Category = styled.div`
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

const CurrentOptions = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Option = styled.div`
  padding: 20px;
`;
