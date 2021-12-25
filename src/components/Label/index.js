import React from 'react';

import { Container } from './styles';

function Label({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Label;