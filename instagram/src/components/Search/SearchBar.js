import React from 'react';
import styled from 'styled-components';
import Logout from './Logout';

const SearchBarDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: white;`

const LeftSearchBar = styled.div `
  display: flex; `

const Camera = styled.i `
  font-size: 23px;
  margin: 15px 0 0px 10px;
  border-right: 1px solid black;
  padding-right: 5px;`

const IgLogo = styled.img `
  width: 100px;
  height: 45px;
  margin: 5px;`

const CenterSearchBar = styled.div `
  margin-top: 18px;`

const SearchInputBox = styled.input `
  text-align: center;`

const RightSearchBar = styled.div `
  margin-top: 18px;`

const SearchBarIcons = styled.i `
  margin-right: 18px;`



function SearchBar(props) {



  return (
    <SearchBarDiv>
      <LeftSearchBar>
        <div>
          <Camera className="fas fa-camera-retro"></Camera>
        </div>
        <IgLogo src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png?w=600" alt="instagram" />
      </LeftSearchBar>
      <CenterSearchBar>
        <SearchInputBox
          type="text"
          placeholder="Search"
          onKeyDown={props.search}
        />
      </CenterSearchBar>
      <RightSearchBar>
        <SearchBarIcons className="far fa-compass"></SearchBarIcons>
        <SearchBarIcons className="far fa-heart"></SearchBarIcons>
        <Logout />
        {/* <SearchBarIcons className="far fa-user"></SearchBarIcons> */}
      </RightSearchBar>
    </SearchBarDiv>
  );
}

export default SearchBar;