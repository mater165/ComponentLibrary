/**
 * @class MyComponent
 */

import * as React from 'react';
import styled from 'styled-components';

export const YourComponent = () => {
  const Container = styled.div`
    border: 1px solid red;
    padding: 0.5rem;
    width: 15rem;
  `;

  return (
    <Container>
      Smurf och Gnu
    </Container>
  );
};

export default YourComponent;