import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google/login";
  };

  const buttonClasses = "bg-foreground/10 dark:bg-foreground/20";

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#008556] to-[#2B4052] p-2 sm:p-4 lg:p-8">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-background/60 px-8 pb-10 pt-6 shadow-small backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <p className="pb-2 text-xl font-medium">Log In</p>
        <div className="flex flex-col gap-2">
          <Button
            className={buttonClasses}
            startContent={<Icon icon="fe:google" width={24} />}
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
