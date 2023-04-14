import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: 'transparent';
  color: #fff;
  padding: 8px 16px;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
`

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 8px;
  width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  gap: 0.4rem;
  max-height: 2rem;
`
