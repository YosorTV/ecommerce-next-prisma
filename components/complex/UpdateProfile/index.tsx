import { Title, UpdatePasswordForm } from '@/components';

export const UpdateProfile = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center'>
      <div className='absolute -top-32 flex flex-col items-center gap-2.5'>
        <Title level='1' className='text-4xl font-semibold'>
          Update your password
        </Title>
      </div>
      <UpdatePasswordForm />
    </div>
  );
};
