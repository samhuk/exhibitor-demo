import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline } from '@mui/material'

import exhibit, { PropModifierType } from 'exhibitor'

import { darkTheme } from './theme'

const DIRECTIONS: [value: string, displayText: string][] = [
  ['n', 'North'],
  ['e', 'East'],
  ['s', 'South'],
  ['w', 'West'],
]

const component = (props: Parameters<typeof Select>[0]) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select {...props}>
          {DIRECTIONS.map(dir => <MenuItem value={dir[0]}>{dir[1]}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  </ThemeProvider>
)

exhibit(component, 'select')
  .options({
    group: 'MUI',
  })
  .events({
    onChange: true,
    onFocus: true,
  })
  .defaults({
    label: 'Direction',
    variant: 'filled',
  })
  .variant('filled', p => ({
    ...p,
    variant: 'filled',
  }))
  .variant('standard', p => ({
    ...p,
    variant: 'standard',
  }))
  .variant('outlined', p => ({
    ...p,
    variant: 'outlined',
  }))
  .propModifiers([
    {
      label: 'Variant',
      type: PropModifierType.SELECT,
      options: ['standard', 'outlined', 'filled'],
      init: props => props.variant,
      apply: (newVariant, currentProps) => ({ ...currentProps, variant: newVariant as 'standard' | 'outlined' | 'filled'}),
    },
    {
      label: 'Label',
      type: PropModifierType.TEXT_INPUT,
      init: props => props.label,
      apply: (newLabel, currentProps) => ({ ...currentProps, label: newLabel }),
    },
  ])
  .build()
