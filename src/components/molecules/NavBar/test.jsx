import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '.'

describe('NavBar component', () => {
  it('renders the component with client name', () => {
    const client = { first_name: 'John' }
    render(
      <MemoryRouter>
        <NavBar client={client} />
      </MemoryRouter>
    )

    const welcomeButton = screen.getByRole('button', { name: /Welcome John!/i })
    expect(welcomeButton).toBeInTheDocument()
  })

  it('renders the component without client name', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    const welcomeButton = screen.queryByRole('button', { name: /Welcome/i })
    expect(welcomeButton).not.toBeInTheDocument()
  })
})
