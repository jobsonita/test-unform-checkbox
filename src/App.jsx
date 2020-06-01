import React, { useCallback, useRef } from 'react'

import { Scope } from '@unform/core'
import { Form } from '@unform/web'

import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import TextInput from './components/TextInput'

const App = () => {
  const formRef = useRef()

  const handleSubmit = useCallback((formData) => {
    console.log(formData)
  }, [])

  return (
    <div className="App">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextInput
          required
          name="email"
          type="email"
          label="E-mail address:"
          placeholder="Email"
        />
        <br />
        <p>What&apos;s your choice?</p>
        <RadioInput name="choice" value="agree" label="I agree" />
        <RadioInput name="choice" value="disagree" label="I disagree" />
        <RadioInput
          name="choice"
          value="none"
          label="Refrain from voting"
          defaultChecked
        />
        <br />
        <CheckboxInput
          name="subscribe"
          label="Subscribe to mailing list"
          defaultChecked
        />
        <br />
        <p>Pick from this list to customize which emails get sent to you</p>
        <CheckboxInput name="mailing_lists" value="node" label="Node.js" />
        <CheckboxInput name="mailing_lists" value="react" label="ReactJS" />
        <CheckboxInput
          name="mailing_lists"
          value="react_native"
          label="React-Native"
        />
        <br />
        <p>Have you used any of these libraries in the past?</p>
        <Scope path="experience">
          <CheckboxInput name="libraries" value="unform" label="Unform" />
          <CheckboxInput name="libraries" value="yup" label="Yup" />
          <CheckboxInput name="libraries" value="express" label="Express" />
        </Scope>
        <br />
        <button type="submit">Send</button>
      </Form>
    </div>
  )
}

export default App
