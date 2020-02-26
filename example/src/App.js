import React, { Component } from 'react'
import styled from 'styled-components'
import { MyComponent, YourComponent } from 'materi-components'

export const Container = styled.div`
  margin: 1rem;
`;

export default class App extends Component {
  render () {
    return (
      <div>
        <Container>
          <div>MyComponent:</div>
          <MyComponent text='Cool text' />
        </Container>
        <Container>
          <div>YourComponent:</div>
          <YourComponent />
        </Container>
      </div>
    )
  }
}
