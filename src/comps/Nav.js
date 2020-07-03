import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { MdFace } from "react-icons/md";

export const Nav = () => {
  return (
    <div>
      <StyledNav>
        <NavLink to="/">
          <FaHome />
          <span className="hideOnMobile"> Home</span>
        </NavLink>{" "}
        <NavLink to="/application" ismiddle="true">
          <TiDocumentText /> <span className="hideOnMobile"> Application</span>
        </NavLink>
        <NavLink to="/badge">
          <MdFace />
          <span className="hideOnMobile"> Badge Maker</span>
        </NavLink>
      </StyledNav>
    </div>
  );
};

const NavLink = (props) => {
  return (
    <StyledLink
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            background: isCurrent ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)",
            color: isCurrent ? "whitesmoke" : "rgba(0,0,0,0.8)",
          },
        };
      }}
    />
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  padding: 5px;
  height: 42px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background: whitesmoke;
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
  border-left: ${(props) =>
    props.ismiddle ? "2px solid rgba(0, 0, 0, 0.8)" : "none"};
  border-right: ${(props) =>
    props.ismiddle ? "2px solid rgba(0, 0, 0, 0.8)" : "none"};

  svg {
    margin-right: 5px;
    margin-top: 1px;
  }
`;
