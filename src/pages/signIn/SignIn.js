import { useState } from "react";
import { loginUser } from "../../services/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../features/userSlice";

function SignIn() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        loginUser(user, password).then((data) => {
            dispatch(setLogin({ connect: true, token: data.body.token }));
            navigate("/user");
        });
    };

    const onChangeUser = (e) => {
        setUser(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

            <form onSubmit={handleForm}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={onChangeUser}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChangePassword}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
            </section>
        </main>
    )
}

export default SignIn