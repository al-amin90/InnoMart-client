import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const authInfo = {
    a: 4,

}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;