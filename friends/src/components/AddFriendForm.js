import React, { useState } from "react"

const initialValues = {
  name: "",
  age: "",
  email: "",
}

const AddFriendForm = () => {
  const [formValues, setFormValues] = useState(initialValues)

  return (
    <div>
      <h3>Here you can add a new friend</h3>
    </div>
  )
}

export default AddFriendForm
