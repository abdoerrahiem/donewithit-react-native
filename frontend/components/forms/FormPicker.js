import React from 'react'
import { useFormikContext } from 'formik'

import Picker from '../Picker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <Picker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
