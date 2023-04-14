import styled from 'styled-components'
import {
  Container,
  OutlinedInput as MaterialInput,
  InputLabel as MaterialInputLabel
} from '@mui/material'

export const Wrapper = styled(Container)`
  && {
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 4rem;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const InputLabel = styled(MaterialInputLabel)`
  && {
    color: #fff;
    font-weight: 500;
    font-size: 0.92rem;
  }
`

export const OutlinedInput = styled(MaterialInput)`
  && {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #fff; // Replace 'red' with the color you want
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #fff; // Replace 'blue' with the hover color you want
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #fff; // Replace 'green' with the focused color you want
    }

    color: #fff;
  }
`
