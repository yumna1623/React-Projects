import { React } from "react";
import {useParams} from 'react-router-dom'

function User() {

    const {userid} = useParams()
    return(
        <>
            
            <h2
            className="bg-gray-600
            text-white
            text-3xl
            text-center
            p-3
            py-4"
            >User ID: {userid}</h2>
        </>
    )
}

export default User;