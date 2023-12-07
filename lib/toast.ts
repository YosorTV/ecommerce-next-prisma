import { ToasterProps, ToastResponse } from '@/types';
import { toast } from 'sonner';

export const toaster = ({ key, message }: ToasterProps): void => {
  const response: ToastResponse = {
    success: () => toast.success(message),
    error: () => toast.error(message),
    info: () => toast.info(message),
    warning: () => toast.warning(message),
  };

  return response[key](message);
};
