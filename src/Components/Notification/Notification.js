import React, { useContext } from 'react';
import NotificationContextProvider from '../../Context/NotificationContext';



const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContextProvider);
    if (notification.message === '') {
        return null;
    }
    return (
        <div className="notification" style={{color: notification.severity === 'error' ? 'red' : 'green' }} onClick={() => setNotification('succes', '')}>
            <h1>{notification.message}</h1>
        </div>
    );
};

export default Notification;