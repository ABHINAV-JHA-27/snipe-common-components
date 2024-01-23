import { CommonProps } from '../../@types/common';
import Login from './subcomponents/login';
import Signup from './subcomponents/signup';

export interface AuthProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  type: 'login' | 'signup';
  onSubmit: () => void;
  onNavigateToSignup: () => void;
  onForgotPassword: () => void;
  onNavigateToLogin: () => void;
  googleSigninVisible: boolean;
  GoogleSignInOnClick?: () => void;
  headingText?: string;
  headingColor?: string;
  labelColor?: string;
  labelSize?: string;
  labelWeight?: string;
  inputBackgroundColor?: string;
  inputBorderColor?: string;
  inputTextColor?: string;
  inputTextSize?: string;
  dividerColor?: string;
  submitButtonColor?: string;
}

const Component: React.FC<AuthProps> = ({
  type,
  onSubmit,
  onNavigateToSignup,
  onForgotPassword,
  onNavigateToLogin,
  googleSigninVisible,
  GoogleSignInOnClick,
  headingText,
  headingColor,
  labelColor,
  labelSize,
  labelWeight,
  inputBackgroundColor,
  inputBorderColor,
  inputTextColor,
  inputTextSize,
  dividerColor,
  submitButtonColor,
}) => {
  return (
    <div className="w-full h-full">
      {type === 'login' ? (
        <Login
          googleSigninVisible={googleSigninVisible}
          onSubmit={onSubmit}
          onNavigateToSignup={onNavigateToSignup}
          onForgotPassword={onForgotPassword}
          GoogleSignInOnClick={GoogleSignInOnClick}
          headingText={headingText && headingText}
          headingColor={headingColor && headingColor}
          labelColor={labelColor && labelColor}
          labelSize={labelSize && labelSize}
          labelWeight={labelWeight && labelWeight}
          inputBackgroundColor={inputBackgroundColor && inputBackgroundColor}
          inputBorderColor={inputBorderColor && inputBorderColor}
          inputTextColor={inputTextColor && inputTextColor}
          inputTextSize={inputTextSize && inputTextSize}
          dividerColor={dividerColor && dividerColor}
          submitButtonColor={submitButtonColor && submitButtonColor}
        />
      ) : (
        <Signup
          googleSigninVisible={googleSigninVisible}
          onSubmit={onSubmit}
          onNavigateToLogin={onNavigateToLogin}
          GoogleSignInOnClick={GoogleSignInOnClick}
          headingText={headingText && headingText}
          headingColor={headingColor && headingColor}
          labelColor={labelColor && labelColor}
          labelSize={labelSize && labelSize}
          labelWeight={labelWeight && labelWeight}
          inputBackgroundColor={inputBackgroundColor && inputBackgroundColor}
          inputBorderColor={inputBorderColor && inputBorderColor}
          inputTextColor={inputTextColor && inputTextColor}
          inputTextSize={inputTextSize && inputTextSize}
          dividerColor={dividerColor && dividerColor}
          submitButtonColor={submitButtonColor && submitButtonColor}
        />
      )}
    </div>
  );
};

export default Component;
