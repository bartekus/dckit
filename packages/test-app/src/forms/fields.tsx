import React from 'react'
import * as V from 'yup'
import { FieldsConfig, FormContext } from '@dckit/forms'

export const fields = [
  'login',
  'password',
  'number',
  'date',
  'select',
  'radio',
  'toggle',
  'multicheck',
  'multitoggle',
  'multiswitch',
  'nested.notes',
  'nested.check',
]

export const fieldsConfig: FieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    controlProps: {
      endAdornment: 'abc',
    },
    helperText: 'Login helper text',
  },
  password: {
    label: 'Password',
    type: 'password',
    required: (value?: any, form?: FormContext) => Boolean(form?.values?.login),
    size: 6,
    controlProps: {
      visibility: true,
    },
    helperText: (value?: any) =>
      value?.length < 6 && (
        <span style={{ color: 'green' }}>use at least 6 symbols</span>
      ),
  },
  number: {
    label: 'Number',
    type: 'number',
    required: true,
    size: 4,
    controlProps: {
      endAdornment: '123',
    },
    helperText: 'Number helper text',
  },
  date: {
    label: 'Date picker',
    type: 'date',
    required: true,
    size: 4,
  },
  radio: {
    label: 'Radio',
    type: 'radio',
    required: true,
    /*     style: {
      marginBottom: 16,
    }, */
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      small: true,
      //size: 6,
    },
    helperText: 'radio options',
  },
  select: {
    label: 'Select',
    type: 'select',
    required: true,
    size: 4,
    initialValue: '5',
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    helperText: 'select options',
    onChange: (value: any, form: FormContext) =>
      form.setFieldValue('toggle', value || ''),
  },
  toggle: {
    label: 'Toggle',
    type: 'toggle',
    required: true,
    size: 6,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      fullWidth: true,
      //small: true,
      size: 4,
    },
    helperText: (value?: any) => `toggle options: ${value}`,
  },
  multicheck: {
    label: 'Multi check',
    type: 'multiCheck',
    required: true,
    size: 6,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      //fullWidth: true,
      small: true,
      size: 4,
    },
    helperText: 'multicheck options',
  },
  multiswitch: {
    label: 'Multi switch',
    type: 'multiSwitch',
    required: true,
    size: 6,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      fullWidth: true,
      //small: true,
      size: 12,
    },
    helperText: 'multiswitch options',
  },
  multitoggle: {
    label: 'Multi toggle',
    type: 'multiToggle',
    required: true,
    size: 6,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      fullWidth: true,
      small: true,
      size: 6,
    },
    helperText: (value?: any) => `multitoggle options: ${value}`,
  },
  'nested.notes': {
    label: 'Notes',
    size: 8,
  },
  'nested.check': {
    label: 'Check',
    type: 'check',
    size: 4,
    optionsConfig: {
      //fullWidth: true,
      small: true,
    },
    helperText: 'checkbox helper text',
  },
}

const label = (name: string): string => fieldsConfig[name]?.label || ''

const msg = `REQUIRED. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`

export const validationSchema = V.object({
  login: V.string()
    .label(label('login'))
    .required(msg),
  number: V.number()
    .label(label('number'))
    .typeError('Must be a number')
    .required(msg),
  radio: V.string()
    .label(label('radio'))
    .required(msg),
  date: V.string()
    .label(label('date'))
    .required(msg)
    .nullable(),
  select: V.string()
    .label(label('select'))
    .required(msg)
    .nullable(),
  toggle: V.string()
    .label(label('toggle'))
    .required(msg),
  multicheck: V.array()
    .label(label('multicheck'))
    .required(msg),
  multiswitch: V.array()
    .label(label('multiswitch'))
    .required(msg),
  multitoggle: V.array()
    .label(label('multitoggle'))
    .required(msg),
  password: V.string()
    .label(label('password'))
    .when('login', (value: string, schema: any) =>
      value ? schema.required(msg) : schema
    ),
})
