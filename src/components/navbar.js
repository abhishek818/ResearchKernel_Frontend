import React from "react";
import styled from "styled-components";
import DropdownMenu from "./dropdownMenu";

const cLink =`https://researchkernel.org`;
const popularLink = `${cLink}/popular`;
const allLink = `${cLink}/all`;

const Navbar1 = styled.div`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  font-weight: bold;
  font-size: 20px;
  padding: .7rem 1.5rem .2rem 1.5rem;
  display: flex;
  flex-direction: row;
  `;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  margin-left: 5px;
  padding: .3rem .3rem .3rem .3rem;  
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
    color: #007bff; 
   }
`;

const SearchBar = styled.input`
    background-color: rgb(246, 247, 248);
    box-shadow: none;
    color: rgb(28, 28, 28);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 239, 241);
    border-image: initial;
    outline: none;
    width: 40%;
    padding: 0rem .5rem 1.2rem .5rem;
    margin-left: 350px;  
    margin-bottom: 9px;
    margin-right: 370px;
    height: 20px;
     
   &:hover {
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 121, 211);
    border-image: initial;
 }
 `;


export default class Navbar extends React.Component {
  
  render() {
    return (
     <Navbar1>
       Logo
       
       <SearchBar placeholder="Search Research Papers" />
       <Link href={popularLink} > Popular </Link>
       <Link href={allLink} > All </Link>
       <DropdownMenu />
              
     </Navbar1>
    )};
};


