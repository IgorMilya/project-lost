import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { Button, SelectInput, TableInfoBox } from 'UI'
import { mockData } from 'utils'
import { NewOrderFormValuesType } from 'types'
import { RadioButtonsGroup } from './radio-buttons-group'
import { radioButtonGroupContent } from './radio-buttons-group/radioButtonGroup.utils'
import { MAIN_ORDER_TYPE, initialValue, validationSchema } from './newOrderForm.utils'

import s from './NewOrderForm.module.scss'

interface NewOrderFormProps {
  onSubmit: (values: NewOrderFormValuesType) => void
}

const NewOrderForm: FC<NewOrderFormProps> = ({ onSubmit }) => {
  const [selectValue, setSelectValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [hidden, setHidden] = useState(false)

  const handleValue = (value: string) => {
    setSelectValue(value)
    setDisabled(false)
  }

  const handleHideSelect = (value: string) => {
    setHidden(value === MAIN_ORDER_TYPE)
    setDisabled(value === MAIN_ORDER_TYPE)
  }

  // getFreeTables data here and pass it to SelectInput `data` prop
  // handleFormSubmit must be in parent component
  //  const handleFormSubmit = (values: NewOrderFormValuesType) => {
  //     console.log(values)
  //   }

  return (
    <div className={s.newOrderForm}>
      <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Stack spacing={6}>
            <RadioButtonsGroup
              name="orderType"
              content={radioButtonGroupContent}
              handleHideSelect={handleHideSelect}
            />
            <SelectInput
              name="table"
              label="Select table"
              hidden={hidden}
              data={mockData}
              handleValue={handleValue}
            />
          </Stack>
          <Stack sx={{ height: '100%' }}>
            <TableInfoBox tableNumber={selectValue} />
            <Button variant="contained" size="default" type="submit" disabled={disabled} fullWidth>
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  )
}

export default NewOrderForm
