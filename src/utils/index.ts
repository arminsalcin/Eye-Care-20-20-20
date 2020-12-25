type NotificationType = {
  title: string;
  body: string;
};

export const showNotification = (payload: NotificationType) => {
  const notification = {
    title: payload.title,
    body: payload.body,
    silent: false,
  };
  return new window.Notification(payload.title, notification);
};
