import { transactionData } from "../../data/data"
import { recoverDataUser } from "../../services/api";
import { setDataUser, checkSession } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transaction from "../../components/transaction/Transaction";

function UserPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stateConnect = useSelector((state) => state.user.connect);
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            dispatch(checkSession(
                sessionStorage.getItem("token")
            ))
        }
    }, [dispatch, navigate, stateConnect, token]);

    useEffect(() => {
        recoverDataUser(token).then((data) => {
            dispatch(
                setDataUser({
                firstName: data.body.firstName,
                lastName: data.body.lastName,
                })
            );
        });
    }, [dispatch, token]);

    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {transactionData.map(({ id, title, amount, description }) => {
                return (
                    <Transaction
                        key={id}
                        title={title}
                        amount={amount}
                        description={description}
                    />
                );
            })}
        </main>
    )
}

export default UserPage