import React, { Component } from "react"
import styled from "styled-components"
import PeopleListWithData from "./components/PeopleListWithData"
const AppContainer = styled.div`
    text-align: center;
  `,
  Header = styled.header`
    background-color: #222;
    height: 50px;
    padding: 20px;
    color: white;
  `,
  Title = styled.h1`
    font-size: 1.5em;
  `,
  Intro = styled.p`
    font-size: large;
  `

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <Title>Star wars wiki</Title>
        </Header>
        <Intro>
          Just about every detail of the films, characters, vehicles, starhips,
          species and planets.
        </Intro>
        <PeopleListWithData />
      </AppContainer>
    )
  }
}

export default App
