import React from 'react'
import Button from '@mui/material/Button'
import exhibit from 'exhibitor'

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
  .build()
