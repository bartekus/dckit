import * as V from 'yup'

export const fields = ['login', 'password', 'notes']

export const fieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    initialValue: '111',
    suffix: 'abc',
  },
  password: {
    label: 'Password',
    size: 6,
    initialValue: '222',
    hint: 'use at least 6 symbols',
  },
  notes: {
    label: 'Notes',
    size: 8,
  },
  check: {
    label: 'Check',
    type: 'check',
    initialValue: false,
    size: 4,
  },
}

export const validationSchema = V.object({
  login: V.string()
    .label(fieldsConfig.login.label)
    .required(),
  password: V.string()
    .label(fieldsConfig.password.label)
    .when('login', (value: string, schema: any) =>
      value ? schema.required() : schema
    ),
})
