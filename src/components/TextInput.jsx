import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useField } from '@unform/core'

import { uniqueId } from 'lodash/util'

function TextInput({ name, label, ...rest }) {
  const inputRef = useRef()

  const [id] = useState(uniqueId('textinput-'))

  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={fieldName} ref={inputRef} {...rest} />
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default TextInput
