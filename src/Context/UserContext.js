import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [email, setEmail] = useState('');

    const updateEmail = (email) => {
        setEmail(email);
    };

    return (
        <UserContext.Provider
            value={{
                values: {
                    email,
                },
                updateEmail,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;