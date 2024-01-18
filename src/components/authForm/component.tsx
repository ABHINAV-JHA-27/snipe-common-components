import { CommonProps } from "../../@types/common";
import Login from "./subcomponents/login";
import Signup from "./subcomponents/signup";

export interface AuthProps
    extends React.HTMLAttributes<HTMLDivElement>,
        CommonProps {
    type: "login" | "signup";
    onSubmit: () => void;
    onNavigateToSignup: () => void;
    onForgotPassword: () => void;
    onNavigateToLogin: () => void;
}

const Component: React.FC<AuthProps> = ({
    type,
    onSubmit,
    onNavigateToSignup,
    onForgotPassword,
    onNavigateToLogin,
}) => {
    return (
        <div className="w-full h-full">
            {type === "login" ? (
                <Login
                    googleSigninVisible={false}
                    onSubmit={onSubmit}
                    onNavigateToSignup={onNavigateToSignup}
                    onForgotPassword={onForgotPassword}
                />
            ) : (
                <Signup
                    googleSigninVisible={false}
                    onSubmit={onSubmit}
                    onNavigateToLogin={onNavigateToLogin}
                />
            )}
        </div>
    );
};

export default Component;
