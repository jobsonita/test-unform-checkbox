import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useField } from '@unform/core'

import { uniqueId } from 'lodash/util'

function CheckboxInput({ name, value, label, ...rest }) {
  const inputRef = useRef()

  const [id] = useState(uniqueId('checkboxinput-'))

  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: value ? `${fieldName}[${value}]` : fieldName,
      ref: inputRef.current,
      path: 'checked',
    })
  }, [fieldName, registerField, value])

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={fieldName}
        ref={inputRef}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
}

export default CheckboxInput
