import React from 'react';

import { Wrapper } from './styles';

const Title: React.FC = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Title;