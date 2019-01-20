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
// 
font-size: 14px;
width: 20%;
display: table;
  padding: 0rem .5rem 1.2rem .5rem;
  margin-left: 350px;  
 margin-bottom: 9px;
 margin-right: 450px;
 display: inline-block;
 `;
const Dropdown = styled.select.attrs({
  name: "Profile"
})`
 font-size: inherit; 
   padding: 0rem .5rem 1.2rem .5rem;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
  background-color: inherit;
  
  //font: 0.8em "Montserrat", sans-serif;
  //height: 3em;
  //width: 18em; 
`

const Profile = styled.button`
  
   font-size: inherit; 
   padding: 0rem .5rem 1.2rem .5rem;
  border: none;
  display: inline-block;
  cursor: pointer;
  background-color: inherit;
  //font-family: inherit;
  //margin: 0;
`;

const ProfileContent = styled.div`
  
// .navbar a:hover, .dropdown:hover .dropbtn {
  ${Profile}: hover{
    display: inline-grid;
   background-color: #fafafa;
    color: #007bff;
  }
`;


const popularLink=`${cLink}/popular`;
const allLink = `${cLink}/all`;

export default class Navbar extends React.Component {
  
  render() {
    return (
      <Navbar1>
      Logo
      <SearchBar placeholder="Search Research Papers" />
      <Link href={popularLink} > Popular </Link>
        <Link href={allLink} > All </Link>
     
     
        // <Profile>
      // <ProfileContent>
      // </ProfileContent></Profile>        

        < Dropdown >
          <option value="val1" ><a href=""></a></option>
          <option value="val2" selected>Night Mode</option>
          <option value="val3" >Login</option>
          <option value="val4"></option>
        </Dropdown >    </Navbar1>
    )};
};


