import React from 'react'
import styled from 'styled-components/macro';

export const ListaPosts = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

const Container = styled.div`
  width:375px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
  top:114px;
  @media (min-width: 1024px) {
    left:140px;
    width: 1000px;
  }
`