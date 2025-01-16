import Image from "next/image";
import logo from "../../../Assets/logo2.png";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <Image src={logo} alt="Logo" />
            <h1 className="font-bold text-[18px] text-center">
                YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
            </h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <input
                    type="text"
                    name="email"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Email address"
                />
                <input
                    type="password"
                    name="password"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Password"
                />
            </div>
            <div className="flex justify-between items-center w-[280px] mt-2">
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        id="keepSignedIn"
                        className="w-4 h-4 border border-gray-200 rounded-sm"
                    />
                    <label htmlFor="keepSignedIn" className="text-[#757575] text-[12px]">
                        Keep me signed in
                    </label>
                </div>
                <p className="text-[#757575] text-[12px] cursor-pointer underline">
                    Forgotten your password?
                </p>
            </div>
            <p className="text-[12px] text-[#757575] text-center mt-2">
                By logging in, you agree to Nike&apos;s Privacy Policy <br /> and Terms of Use.
            </p>
            <div className="bg-black w-[260px] h-[40px] flex justify-center items-center rounded-sm mt-4">
                <button className="text-[12px] text-white">SIGN IN</button>
            </div>
            <div className="flex gap-1 mt-2">
                <p className="text-[12px] text-[#757575]">Not a Member? </p>
                <Link href="/Join">
                    <p className="text-[12px] text-[#757575] font-medium underline">
                        Join Us.
                    </p>
                </Link>
            </div>
        </div>
    );
}
