import ArgentBankIcon from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkSession, setDataUser, setLogout } from "../../features/userSlice";
import { recoverDataUser } from "../../services/api";
import { useEffect } from "react";

function Header() {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.firstName);
    const stateConnectUser = useSelector((state) => state.user.connect);
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            dispatch(checkSession(
                sessionStorage.getItem("token")
            ))
            recoverDataUser(token).then((data) => {
                dispatch(
                    setDataUser({
                        firstName: data.body.firstName,
                    })
                );
            });
        }
    }, [dispatch, token]);

    const handleLogout = () => {
        dispatch(setLogout());
    };

    return (
        <nav className={stateConnectUser === true
            ? "main-nav main-nav-user-connect"
            : "main-nav"
        }>
            <Link className="main-nav-logo" to={"/"}>
            <img
                className="main-nav-logo-image"
                src={ArgentBankIcon}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {stateConnectUser === true ? (
            <div>
                <Link to={"/user"} className={"main-nav-item"}>
                    {firstName}
                </Link>
                <Link className="main-nav-item" to={"/"} onClick={handleLogout}>
                    <i className="fa fa-user-circle"></i>
                    Sign out
                </Link>
            </div>
            ) : (
            <div>
                <Link className="main-nav-item" to={"/sign-in"}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
            )}
        </nav>
    )
}

export default Header