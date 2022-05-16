import React, { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signupFormReducer } from './signupFormReducer'
import { signupUser } from 'store/feature/authSlice'
import { useAuth } from 'hooks/selectors'
const Signup = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [{ firstName, lastName, username, email, password, confirmPassword }, signupDispatch
    ] = useReducer(signupFormReducer, { firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: "" })

    const submitHandler = async (e, firstName, lastName, username, email, password, confirmPassword) => {
        e.preventDefault();
        dispatch(signupUser({ firstName, lastName, username, email, password, confirmPassword }));
    }
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate])
    return (
        <div className="flex justify-center items-center w-full mt-20">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={(e) => submitHandler(e, firstName, lastName, username, email, password, confirmPassword)}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="firstname">
                        Firstname
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                        type="text"
                        placeholder="Firstname"
                        value={firstName}
                        onChange={(e) => signupDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="lastname">
                        Lastname
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastname"
                        type="text"
                        placeholder="Lastname"
                        value={lastName}
                        onChange={(e) => signupDispatch({ type: "SET_LASTNAME", payload: e.target.value })} />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => signupDispatch({ type: "SET_USERNAME", payload: e.target.value })} />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => signupDispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => signupDispatch({ type: "SET_PASSWORD", payload: e.target.value })} />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="con-password">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="******************"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => signupDispatch({ type: "SET_CONFIRMPASSWORD", payload: e.target.value })} />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                    >
                        Signup
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-700" to="#">
                        Forgot Password?
                    </Link>
                </div>
                <div className='mt-4'>Already a user? <Link to="/login" className='text-sky-500 hover:text-sky-700'>Login</Link></div>
            </form>
        </div>
    )
}

export { Signup }