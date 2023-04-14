import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './index'

describe('Button component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Button />)
    expect(getByTestId('Button')).toBeInTheDocument()
  })

  it('should render label prop', () => {
    const label = 'Click me'
    const { getByText } = render(<Button label={label} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('should handle onClick prop', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button onClick={onClick} />)
    fireEvent.click(getByTestId('Button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render children prop', () => {
    const { getByText } = render(
      <Button>
        <p>Child element</p>
      </Button>
    )
    expect(getByText('Child element')).toBeInTheDocument()
  })

  it('should render startIcon prop', () => {
    const startIcon = (
      <i data-testid={'startIcon'} className="fa fa-arrow-left" />
    )
    const { getByTestId } = render(<Button startIcon={startIcon} />)
    expect(getByTestId('startIcon')).toBeInTheDocument()
  })
})
