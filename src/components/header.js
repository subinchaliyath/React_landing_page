import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Nav from "./nav";

import menu from "../images/menu.svg";

export const HeaderStyled = styled.div`
  padding: 2em 0em 0.5em 0em;
  position: fixed;
  background: white;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  .content-header {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .icon-menu {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    .icon-menu {
      display: none;
    }

    .content-header {
      position: relative;
      display: grid;
      grid-template-columns: 130px auto;
      justify-content: normal;
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: 0
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }
  componentWillMount = () => {
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
  };
  handleClickMenu = () => {
    console.log("funciona");
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <HeaderStyled>
        <Wrapper>
          <div className="content-header">
            <h1 style={{display:"inline",margin:0}}>pinIT</h1>
            {(this.state.open || this.state.width >= 1200) && <Nav />}
            <span className="icon-menu" onClick={this.handleClickMenu}>
              <img src={menu} alt="icon-menu" />
            </span>
          </div>
        </Wrapper>
      </HeaderStyled>
    );
  }
}

export default Header;
