 /**
 * @class MyComponent
 */

import * as React from 'react'
import styled from "styled-components";

export type Props = { text: string }

export const Smurf = styled.div`
  border: 1px solid blue;
  padding: 0.5rem;
  width: 15rem;
`;

export default class MyComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <Smurf>
        MyComponent: {text}
      </Smurf>
    )
  }
}