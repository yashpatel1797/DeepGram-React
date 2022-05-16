import { useAuth } from 'hooks/selectors';
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from 'store/feature/authSlice';
import { loginFormReducer } from './loginFormReducer';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [{ email, password }, loginDispatch] = useReducer(loginFormReducer, { email: "", password: "" })

    const testHandler = () => {
        loginDispatch({ type: "SET_EMAIL", payload: "yashpatel@gmail.com" })
        loginDispatch({ type: "SET_PASSWORD", payload: "yashpatel" })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser({ username: email, password }))

    }

    useEffect(() => {
        if (user) {
            return navigate(location.state?.from?.pathname || "/", { replace: true });
        }
    }, [user, location, navigate])
    return (
        <div className="w-full flex justify-center mt-20">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => loginDispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password}
                        onChange={(e) => loginDispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                        required />
                </div>

                <div>
                    <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" onClick={testHandler}>Test credentials</button>
                </div>
                <div>

                    <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Log In
                    </button>
                </div>
                <div className='mt-4'>Don't have an account yet? <Link to="/signup" className='text-sky-500 hover:text-sky-700'>Signup</Link></div>
            </form>
        </div>
    )
}

export { Login }