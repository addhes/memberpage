import { useState } from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValues) => {
    const [state, setState] = useState(initialValues);

    return [
        state,
        (e) => {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            });
        },
        (newState) => {
            setState({
                ...state,
                ...newState,
            });
        },
    ];
};