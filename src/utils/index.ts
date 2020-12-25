import { notificationSound } from '../config';

type NotificationType = {
  title: string;
  body: string;
};

export const showNotification = (payload: NotificationType) => {
  const notification = {
    title: payload.title,
    body: payload.body,
    silent: true,
  };
  let audio = new Audio(notificationSound);
  audio.play();
  return new window.Notification(payload.title, notification);
};
