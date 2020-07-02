import React, { useState } from "react";
import { Logo } from "../comps/Logo";
import styled from "styled-components";
import { Nav } from "../comps/Nav";

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
  Hairdo: [
    "none",
    "hair1",
    "hair2",
    "hair3",
    "hair4",
    "hair5",
    "hair6",
    "hair7",
    "hair8",
  ],
  Hair: ["#9e5143", "#a19f9b", ...globalColours],
  Skin: ["#5e3132", "#8d5524", "#deaa87", "#ffdbac", ...globalColours],
  Pants: [...globalColours],
  Trim: [...globalColours],
};

const optionTypes = Object.keys(options);

export const BadgeMaker = ({ logoSettings, setLogoSettings }) => {
  const [currCategory, setCurrCategory] = useState(2);
  const currOptionKey = optionTypes[currCategory];
  const currOptions = options[currOptionKey];

  const onOptionSelect = (updatedOption) => {
    setLogoSettings({ ...logoSettings, ...updatedOption });
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <Outer>
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
    </>
  );
};

// STYLES
const Outer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  flex: 1;
  text-align: center;
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
  padding: 5px 20px;
  width: 100px;
  min-width: 100px;
`;
