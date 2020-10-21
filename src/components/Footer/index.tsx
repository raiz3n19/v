import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        © 2020 Built With
        <Styled.Link href="https://facebook.com/rai.aspx5" rel="noreferrer noopener" target="_blank">Gatsby.js
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
  
);

export default Footer;
