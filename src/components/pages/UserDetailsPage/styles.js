import styled from 'styled-components'
import {
  Container,
  Typography as MaterialTypograph,
  CardContent as MaterialCardContent,
  Card as MaterialCard
} from '@mui/material'

export const Wrapper = styled(Container)`
  && {
    display: flex;
    padding: 0px;
    margin-top: 4rem;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    background-color: '#373F47';
  }
`

export const Typography = styled(MaterialTypograph)`
  && {
    font-family: 'Roboto';
    color: #fff;
  }
`

export const Card = styled(MaterialCard)`
  && {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const CardIlustration = styled.div`
  display: flex;
  height: 3rem;
  background-color: var(--silver-lake-blue);
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const CardContent = styled(MaterialCardContent)`
  && {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
  }
`
