import { useState } from "react";

export function useForm(initialState, submitCallBack) {
    const [state, setState] = useState(initialState);

    const changeHandler = (e) => {
        setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallBack(state);
    };

    return {
        state,
        changeHandler,
        submitHandler,
    };
}