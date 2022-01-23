import React, { useContext } from 'react';
import {NotificationContext} from '../../Context/NotificationContext';
import './notification.css'



const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext);
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