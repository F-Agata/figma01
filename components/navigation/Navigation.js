import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'
import {FaBars} from "react-icons/fa";
import Box from '../../styles/Box'
import Link from "../../styles/Link";
import Logo from '../Logo'
import menuItems from './menuItems'
import LinksPart from "./LinksPart";
import NavSmall from "./NavSmall";

const Navigation = () => {

    const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

    // const modificationMenuSize = useMediaQuery({ query: `${props => props.theme.breakpoints.tablet} `})
    const modificationMenuSize = useMediaQuery({ query: '(min-width: 768px)'})

    const changeNav = () => {
        setSmallNavIsOpen(!smallNavIsOpen)
            }

    return (
        <BoxNavigation >
            <Link href={`/`}><Logo color={"dark"}/></Link>
            {!modificationMenuSize && <StyledFaBars onClick={changeNav}/>}
            {modificationMenuSize && <LinksPart menuItems={menuItems}/>}
            {!modificationMenuSize && smallNavIsOpen  ?
                <NavSmall menuItems={menuItems}
                          setSmallNavIsOpen={setSmallNavIsOpen}
                          changeNav={changeNav}
                /> : null}
        </BoxNavigation>
    );
}

export default Navigation;

const BoxNavigation = styled(Box)`
    //border: 2px solid red;
  position: fixed;
  top: 0;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 70px;
  padding:  0 40px; 
  z-index: 100;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
  `};
  //@media (min-width: 768px) {
  //  padding:  0 40px;
  //}
`

const StyledFaBars = styled(FaBars)`
  cursor: pointer;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
  `};
`
