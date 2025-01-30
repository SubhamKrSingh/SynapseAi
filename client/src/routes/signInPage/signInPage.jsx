import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";

const SignInPage = () => {
  return (
    <div className="signInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="https://synapse-ai-beta.vercel.app/dashboard"
      />
    </div>
  );
};

export default SignInPage;
