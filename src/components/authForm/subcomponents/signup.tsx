import clsx from "clsx";
import React from "react";

export interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {
    headingText?: string;
    headingColor?: string;
    labelColor?: string;
    labelSize?: string;
    labelWeight?: string;
    googleSigninVisible: boolean;
    GoogleSignInOnClick?: () => void;
    onSubmit: () => void;
    inputBackgroundColor?: string;
    inputBorderColor?: string;
    inputTextColor?: string;
    inputTextSize?: string;
    dividerColor?: string;
    submitButtonColor?: string;
    onNavigateToLogin: () => void;
}

const Signup: React.FC<SignUpFormProps> = ({
    headingText,
    headingColor,
    labelColor,
    labelSize,
    labelWeight,
    GoogleSignInOnClick,
    inputBackgroundColor,
    inputBorderColor,
    inputTextColor,
    inputTextSize,
    dividerColor,
    submitButtonColor,
    googleSigninVisible,
    onSubmit,
    onNavigateToLogin,
}) => {
    return (
        <div className="flex flex-col w-[50%] justify-center items-center">
            <div className="flex flex-col w-[70%]">
                {headingText ? (
                    <>
                        <span
                            className={clsx(
                                "text-[30px] font-[700] font-Cardo leading-none",
                                headingColor
                                    ? `text-[${headingColor}]`
                                    : "text-black"
                            )}
                        >
                            Start your campaign
                        </span>
                        <span
                            className={clsx(
                                "text-[30px] font-[700] font-Cardo leading-none",
                                headingColor
                                    ? `text-[${headingColor}]`
                                    : "text-black"
                            )}
                        >
                            journey today!
                        </span>
                    </>
                ) : (
                    <span
                        className={clsx(
                            "text-[30px] font-[700] font-Cardo leading-none",
                            headingColor
                                ? `text-[${headingColor}]`
                                : "text-black"
                        )}
                    >
                        {headingText}
                    </span>
                )}
                {googleSigninVisible && (
                    <div
                        className={clsx(
                            "flex flex-row gap-x-1 justify-center items-center mt-5 border-[2px] p-2 w-full rounded-[30px] h-[5vh]",
                            "bg-[#E9F4FF] border-[#A4BFFF]"
                        )}
                        onClick={
                            GoogleSignInOnClick ? GoogleSignInOnClick : () => {}
                        }
                    >
                        {/* <img
                src={GoogleIcon}
                alt="google"
                className="w-[20px] h-[20px]"
            /> */}
                        <span className="text-[16px] font-[500] font-DMSans text-[#686673]">
                            Sign in with Google
                        </span>
                    </div>
                )}
                <div className="flex flex-row gap-x-2 w-full items-center mt-4">
                    <div
                        className={clsx(
                            "flex flex-1 border-[2px] rounded-[3px]",
                            dividerColor
                                ? `border-[${dividerColor}]`
                                : "border-[#686673]"
                        )}
                    />
                    <span
                        className={clsx(
                            "text-[14px] font-[500] font-DMSans",
                            labelColor
                                ? `text-[${labelColor}]`
                                : "text-[#686673]"
                        )}
                    >
                        OR
                    </span>
                    <div
                        className={clsx(
                            "flex flex-1 border-[2px] rounded-[3px]",
                            dividerColor
                                ? `border-[${dividerColor}]`
                                : "border-[#686673]"
                        )}
                    />
                </div>
                <div className="flex flex-col gap-y-1 mt-4 w-full">
                    <span
                        className={clsx(
                            "text-[14px] font-[500] font-DMSans",
                            labelColor
                                ? `text-[${labelColor}]`
                                : "text-[#686673]",
                            labelSize ? `text-[${labelSize}]` : "text-[14px]",
                            labelWeight ? `font-[${labelWeight}]` : "font-[500]"
                        )}
                    >
                        Email
                    </span>
                    <input
                        type="email"
                        className={clsx(
                            "border-[2px] p-2 w-full rounded-[5px] font-[500] font-DMSans h-[5vh]",
                            inputBackgroundColor
                                ? `bg-[${inputBackgroundColor}]`
                                : "bg-white",
                            inputBorderColor
                                ? `border-[${inputBorderColor}]`
                                : "border-blue-500",
                            inputTextColor
                                ? `text-[${inputTextColor}]`
                                : "text-black",
                            inputTextSize
                                ? `text-[${inputTextSize}]`
                                : "text-[14px]"
                        )}
                    />
                </div>
                <div className="flex flex-col gap-y-1 mt-4 w-full">
                    <span
                        className={clsx(
                            "text-[14px] font-[500] font-DMSans",
                            labelColor
                                ? `text-[${labelColor}]`
                                : "text-[#686673]",
                            labelSize ? `text-[${labelSize}]` : "text-[14px]",
                            labelWeight ? `font-[${labelWeight}]` : "font-[500]"
                        )}
                    >
                        Password
                    </span>
                    <input
                        type="password"
                        className={clsx(
                            "border-[2px] p-2 w-full rounded-[5px] font-[500] font-DMSans h-[5vh]",
                            inputBackgroundColor
                                ? `bg-[${inputBackgroundColor}]`
                                : "bg-white",
                            inputBorderColor
                                ? `border-[${inputBorderColor}]`
                                : "border-blue-500",
                            inputTextColor
                                ? `text-[${inputTextColor}]`
                                : "text-black",
                            inputTextSize
                                ? `text-[${inputTextSize}]`
                                : "text-[14px]"
                        )}
                    />
                </div>
                <div className="flex flex-col gap-y-1 mt-4 w-full">
                    <span
                        className={clsx(
                            "text-[14px] font-[500] font-DMSans",
                            labelColor
                                ? `text-[${labelColor}]`
                                : "text-[#686673]",
                            labelSize ? `text-[${labelSize}]` : "text-[14px]",
                            labelWeight ? `font-[${labelWeight}]` : "font-[500]"
                        )}
                    >
                        Confirm password
                    </span>
                    <input
                        type="password"
                        className={clsx(
                            "border-[2px] p-2 w-full rounded-[5px] font-[500] font-DMSans h-[5vh]",
                            inputBackgroundColor
                                ? `bg-[${inputBackgroundColor}]`
                                : "bg-white",
                            inputBorderColor
                                ? `border-[${inputBorderColor}]`
                                : "border-blue-500",
                            inputTextColor
                                ? `text-[${inputTextColor}]`
                                : "text-black",
                            inputTextSize
                                ? `text-[${inputTextSize}]`
                                : "text-[14px]"
                        )}
                    />
                </div>
                <div className="flex flex-row items-center text-[11px] mt-5 gap-x-1 font-[500] font-DMSans mb-1">
                    By Signing up, means you agree to our{" "}
                    <p className="text-blue-500 underline">Privacy Policy</p>
                    and{" "}
                    <p className="flex flex-row text-blue-500 underline">
                        Terms of Service
                    </p>
                </div>
                <button
                    className={clsx(
                        "text-white text-[14px] rounded-[5px] mt-5 p-2 w-full outline-none font-[500] font-DMSans h-[5vh]",
                        submitButtonColor
                            ? `bg-[${submitButtonColor}]`
                            : "bg-[#686673]"
                    )}
                    onClick={onSubmit}
                >
                    Sign Up
                </button>
                <div className="flex flex-row  mt-7 w-full items-center justify-between font-[500] font-DMSans">
                    <div className="flex flex-row item-center gap-x-2">
                        Already a member?
                        <p
                            className="text-blue-500 underline"
                            onClick={onNavigateToLogin}
                        >
                            Sign in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
