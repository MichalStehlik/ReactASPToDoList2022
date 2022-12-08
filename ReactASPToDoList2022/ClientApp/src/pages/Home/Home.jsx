import { useState } from "react"
import {useAuthContext} from "../../providers/AuthProvider"

export const Home = props => {
    const [{profile, accessToken}] = useAuthContext();
    return (
        <>
        <pre>{accessToken}</pre>
        <pre>{JSON.stringify(profile, " ", 4)}</pre>
        </>
    );
}

export default Home;