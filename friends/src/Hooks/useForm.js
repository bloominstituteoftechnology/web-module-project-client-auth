import { useState } from "react";

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState)
    
    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return [formState, handleChange]
}

export default useForm;