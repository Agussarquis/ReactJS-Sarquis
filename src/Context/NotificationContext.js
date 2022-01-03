import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('');
            setSeverity('');
        }, 2000);
    }

    return (
        <NotificationContext.Provider
            value={{
                notification: {
                    message,
                    severity,
                },
                setNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;