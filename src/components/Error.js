import { useRouteError } from "react-router-dom/dist/umd/react-router-dom.development"

const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>Error</h1>
            <h3>{err.status}: {err.statusText}</h3>
            <p>{err.data}</p>
        </div>
    )
}

export default Error;