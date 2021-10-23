import { AddToast } from "react-toast-notifications";

export const registerRejectedPromise = (addToast: AddToast) => {
  window.onunhandledrejection = (err: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    handleErrors(err, addToast);
  };
};

export const handleErrors = (e: any, addToast: AddToast) => {
  addToast(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    e.message ? e.message : e.reason ? e.reason : "Undefined Error",
    { appearance: "error", autoDismiss: true }
  );
};
