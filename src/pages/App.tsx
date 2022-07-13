import React, { Suspense } from 'react'
import styled from 'styled-components/macro'
import Header from 'components/Header'
import Loader from 'components/Loader'
import Polling from 'components/Header/Polling'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 4rem 8px 16px 8px;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

export default function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyWrapper>
        <Polling />
        <Suspense fallback={<Loader />}>
          <h1>Hello web3!</h1>
        </Suspense>
      </BodyWrapper>
    </AppWrapper>
  )
}