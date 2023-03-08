import { Link } from "react-router-dom";

function Error() {
    return (
        <main id="error-page">
            <h1 id={"title-error"}>404</h1>
            <p id={"description-error"}>
                Oops! This page doesn't exist.
            </p>
            <Link to={"/"} id={"link-home"}>
                Go back to home ?
            </Link>
        </main>
    )
}

export default Error