import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
const cLink =`https://researchkernel.org`;

const Navbar1 = styled.div`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: row;
  `;

const Link = styled.a`
  //float: right;
  position: relative;
  
  padding: 0rem .5rem 1.2rem .5rem;  
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
    color: #007bff; 
  }
`;

const SearchBar = styled.input`
position: relative;
  float: right;
  padding: 0rem .5rem 1.2rem .5rem;  
 margin-bottom: 9px;
 display: inline-block;
 `;

const placeholder = "Search Research Papers";
const popularLink=`${cLink}/popular`;

export default class Navbar extends React.Component {
  
  render() {
    return (
      <Navbar1>
      Logo
      <Link href={popularLink}> Popular </Link>
        <Link href={popularLink}> Popular </Link>
        <SearchBar placeholder={placeholder} />
        </Navbar1>
    )}
}


