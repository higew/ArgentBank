import { transactionData } from "../../data/data"
import Transaction from "../../components/transaction/Transaction";

function UserPage() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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