import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import { Button } from './button'
import { Icon, icons } from '../icon'

export const IconButton = ({ icon, children, iconFill, iconSize, ...props }) => {
  const theme = useTheme()
  return (
    <Button style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: theme.spacing.small }} { ...props }>
      <Icon
        icon={ icon }
        size={ iconSize || 32 }
        fill={ iconFill || theme.color.primary.main }
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

