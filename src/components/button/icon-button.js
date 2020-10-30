import React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import { Button } from './button'
import { Icon, icons } from '../icon'

export const IconButton = ({ icon, children, ...props }) => {
  const theme = useTheme()
  return (
    <Button style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: theme.spacing.small }} { ...props }>
      <Icon
        icon={ icon }
        size={ 32 }
        fill={ theme.color.primary.main }
        style={{ marginTop: theme.spacing.extraSmall, marginBottom: theme.spacing.extraSmall }}
      />
      { children }
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
}

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
}

