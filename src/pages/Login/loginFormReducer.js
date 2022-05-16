const loginFormReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_EMAIL":
            return { ...state, email: payload }
        case "SET_PASSWORD":
            return { ...state, password: payload }
        default:
            return state;
    }
}
export { loginFormReducer }