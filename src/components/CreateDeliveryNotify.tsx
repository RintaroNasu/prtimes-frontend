import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateDeliveryNotify = (message: string) => {
  return toast.info(message, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
