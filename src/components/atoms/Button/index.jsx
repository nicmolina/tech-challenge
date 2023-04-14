import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Button = ({ label, onClick, variant, children, startIcon }) => {
  return (
    <S.Button
      data-testid="Button"
      startIcon={startIcon}
      onClick={onClick}
      variant={variant}
    >
      {children}
      <span>{label}</span>
    </S.Button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  children: PropTypes.element,
  startIcon: PropTypes.element
}

export default Button
