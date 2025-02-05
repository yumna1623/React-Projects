import { React } from "react";
import {useParams} from 'react-router-dom'

function User(params) {

    const {userid} = useParams()
    return(
        <>
            <h1>User</h1>
            <h2>User ID: {userid}</h2>
        </>
    )
}

export default User;