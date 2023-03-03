import { transactionData } from "../../data/data"
import { recoverDataUser, changeUsername } from "../../services/api";
import { setDataUser, checkSession } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
        else {
            navigate("/sign-in")
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

    const [open, setOpen] = useState(false);
    const handleOpenFormUser = () => {
        setOpen(true);
    };

    const [editFirstName, setFirstname] = useState("");
    const [editLastName, setLastname] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        changeUsername(token, editFirstName, editLastName)
        .then((data) => {
            dispatch(
                setDataUser({
                    firstName: data.body.firstName,
                    lastName: data.body.lastName,
                })
            );
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleCloseForm = () => {
        setOpen(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className={
                    open === false
                    ? "edit-button display-initial"
                    : "edit-button display-none"
                } onClick={handleOpenFormUser}>
                    Edit Name
                </button>
                <div className={
                    open === false
                    ? "form-change-name display-none"
                    : "form-change-name display-block"
                }>
                    <form onSubmit={handleForm}>
                        <div className={"form-change-name-inputs"}>
                            <input placeholder={"Firstname"} onChange={(e) => setFirstname(e.target.value)} />
                            <input placeholder={"Lastname"} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className={"form-change-name-buttons"}>
                            <button id={"form-change-name-buttons-save"} type="submit" onClick={handleCloseForm}>
                                Save
                            </button>
                            <button id={"form-change-name-buttons-cancel"} type="reset" onClick={handleCloseForm}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
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