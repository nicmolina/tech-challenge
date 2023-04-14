import styled from 'styled-components'
import { Button as MaterialButton } from '@mui/material'

export const Button = styled(MaterialButton)`
  && {
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`
