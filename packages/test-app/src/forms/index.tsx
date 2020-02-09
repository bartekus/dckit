import React, { useState, useEffect } from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { Form } from '@dckit/ui'

export const DemoForm = () => {
  const [initialValues, setInitialValues] = useState({})
  useEffect(() => {
    setTimeout(() => {
      setInitialValues({
        login: 'login',
        notes: '######',
      })
    }, 2000)
  }, [setInitialValues])

  const renderActions = (form: any) => {
    const onSubmit1 = () => {
      form.submitForm()
    }
    const onSubmit2 = () => {
      form.submitForm()
    }

    return (
      <Grid item container justify="flex-end">
        <Grid item>
          <Button color="secondary" variant="contained" onClick={onSubmit1}>
            submit1
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={onSubmit2}>
            submit2
          </Button>
        </Grid>
      </Grid>
    )
  }

  const handleSubmit = (data: any) => console.log(data)

  return (
    <Paper style={{ margin: 50, padding: 32, width: '70%' }}>
      <Form
        fields={fields}
        fieldsConfig={fieldsConfig}
        initialValues={initialValues}
        validationSchema={validationSchema}
        renderActions={renderActions}
        onSubmit={handleSubmit}
      />
    </Paper>
  )
}
