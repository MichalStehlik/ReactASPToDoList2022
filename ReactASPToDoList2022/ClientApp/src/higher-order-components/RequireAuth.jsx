import React from "react"
import { useAuthContext } from "../providers/AuthProvider"

export const RequireAuth = (WrappedComponent) => props => {
    const [{accessToken}] = useAuthContext();
    if (accessToken === null) {
        return <p>Unknown user.</p>
    } else {
        return (
            <WrappedComponent {...props}>
                {props.children}
            </WrappedComponent>
        );
    }    
}

export default RequireAuth;