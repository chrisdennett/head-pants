import React, { useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import { Logo } from "../comps/Logo";
import styled from "styled-components";
import { Nav } from "../comps/Nav";
import TypeColourSelector from "../comps/TypeColourSelector";

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
    "hair8",
  ],
  Hair: ["#9e5143", "#a19f9b", ...globalColours],
  Skin: ["#5e3132", "#8d5524", "#deaa87", "#ffdbac", ...globalColours],
  Pants: [...globalColours],
  Trim: [...globalColours],
  Glasses: ["none", "glasses1", "glasses2", "glasses3"],
  GlassesColour: [...globalColours],
  Beards: [
    "none",
    "beards1",
    "beards2",
    "beards3",
    "beards4",
    "beards5",
    "beards6",
  ],
  BeardColour: ["#9e5143", "#a19f9b", ...globalColours],
  BadgeType: ["text", "noText"],
  BadgeColour: [...globalColours],
};

const optionTypes = Object.keys(options);

export const BadgeMaker = ({ logoSettings, setLogoSettings }) => {
  const [currCategory, setCurrCategory] = useState(0);
  const currOptionKey = optionTypes[currCategory];
  const currOptions = options[currOptionKey];

  const onOptionSelect = (updatedOption) => {
    setLogoSettings({ ...logoSettings, ...updatedOption });
  };

  const saveBadge = () => {
    saveSvgAsPng(document.getElementById("badge"), "headpants-badge.png", {
      left: -40,
      top: -31,
      scale: 3,
    });
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <Outer>
        <Logo
          id="badge"
          settings={logoSettings}
          size={400}
          showAsBadge={true}
        />

        <Controls>
          <button onClick={saveBadge}>SAVE</button>
          <Categories>
            <TypeColourSelector
              title="hair"
              option1="style"
              option2="colour"
              option1Selected={currCategory === 0}
              option2Selected={currCategory === 1}
              onOption1Selected={() => setCurrCategory(0)}
              onOption2Selected={() => setCurrCategory(1)}
            />
            <TypeColourSelector
              title="skin"
              option1="tone"
              option1Selected={currCategory === 2}
              onOption1Selected={() => setCurrCategory(2)}
            />
            <TypeColourSelector
              title="pants"
              option1="main"
              option2="trim"
              option1Selected={currCategory === 3}
              option2Selected={currCategory === 4}
              onOption1Selected={() => setCurrCategory(3)}
              onOption2Selected={() => setCurrCategory(4)}
            />
            <TypeColourSelector
              title="glasses"
              option1="style"
              option2="colour"
              option1Selected={currCategory === 5}
              option2Selected={currCategory === 6}
              onOption1Selected={() => setCurrCategory(5)}
              onOption2Selected={() => setCurrCategory(6)}
            />
            <TypeColourSelector
              title="beards"
              option1="type"
              option2="colour"
              option1Selected={currCategory === 7}
              option2Selected={currCategory === 8}
              onOption1Selected={() => setCurrCategory(7)}
              onOption2Selected={() => setCurrCategory(8)}
            />
            <TypeColourSelector
              title="badge"
              option1="type"
              option2="colour"
              option1Selected={currCategory === 9}
              option2Selected={currCategory === 10}
              onOption1Selected={() => setCurrCategory(9)}
              onOption2Selected={() => setCurrCategory(10)}
            />
          </Categories>

          <CurrentOptions>
            {currOptions.map((option) => (
              <Option
                key={option}
                onClick={() => onOptionSelect({ [currOptionKey]: option })}
              >
                <Logo
                  showAsBadge={currCategory > 8}
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
