import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Notification extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.notify = this.notify.bind(this);
  }

  public notify(message: string) {
    toast(message);
    this.showSuccessNotification(message);
    this.showErrorNotification(message);
    this.showWarningNotification(message);
    this.showInfoNotification(message);
    this.showCustomNotification(message);
  }

  showSuccessNotification(message: string) {
    toast.success(message, {
      position: "top-center",
    });
  }

  showErrorNotification(message: string) {
    toast.error(message, {
      position: "top-center",
    });
  }

  showWarningNotification(message: string) {
    toast.warn(message, {
      position: "top-center",
    });
  }

  showInfoNotification(message: string) {
    toast.info(message, {
      position: "top-center",
    });
  }

  showCustomNotification(message: string) {
    toast(message, {
      position: "top-center",
      className: "foo-bar",
    });
  }
}



export const Notify = () => {
  const notification = new Notification({});
  return notification;
};
