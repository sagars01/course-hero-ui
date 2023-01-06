import React, { useState } from "react";

interface Notification {
  id: string;
  message: string;
}

interface NotificationContextValue {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = React.createContext<
  NotificationContextValue | undefined
>(undefined);

interface NotificationProviderProps {
  children: React.ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notification,
    ]);
  }

  function removeNotification(id: string) {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  }
  return (
    <>
      <NotificationContext.Provider
        value={{
          notifications,
          addNotification,
          removeNotification,
        }}
      >
        {children}
      </NotificationContext.Provider>
    </>
  );
}

export function useNotifications(): NotificationContextValue {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
}

export function NotificationList() {
  const { notifications } = useNotifications();

  return (
    <div>
      {notifications.map((n) => (
        <div key={n.id}> {n.message} </div>
      ))}
    </div>
  );
}
