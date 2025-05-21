import SignUpForm from '@/components/signup/SingnUpForm';

const SignUpPage = () => {
  return (
    <div className="flex flex-col fixed max-w-[425px] w-full top-[60px] gap-6 p-4">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
