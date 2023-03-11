import React from 'react'
import Button from '@mui/material/Button'
import exhibit, { PropModifierType } from 'exhibitor'

const component = (props: Parameters<typeof Button>[0]) => <Button {...props}>{props.children}</Button>

// eslint-disable-next-line react/jsx-props-no-spreading
exhibit(component, 'Button')
  .options({
    group: 'MUI',
  })
  .events({
    onClick: true,
  })
  .defaults({
    variant: 'contained',
    children: 'Hello World!!!!!!',
  })
  .propModifiers([
    {
      label: 'Variant',
      type: PropModifierType.SELECT,
      options: ['contained', 'outlined', 'text'],
      init: props => props.variant,
      apply: (newVariant, currentProps) => ({ ...currentProps, variant: newVariant as 'contained' | 'outlined' | 'text' }),
    },
    {
      label: 'Button text',
      type: PropModifierType.TEXT_INPUT,
      init: props => props.children.toString(),
      apply: (newAlertText, currentProps) => ({ ...currentProps, children: newAlertText }),
    },
  ])
  .build()
