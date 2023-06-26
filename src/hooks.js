import { useState } from "react";

// this is a Custom Hooks function
export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange,
    };
}
