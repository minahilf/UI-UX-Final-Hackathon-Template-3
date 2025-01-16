import Image from "next/image";
import logo from "../../../Assets/logo2.png";
import Link from "next/link";

export default function Join() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <Image src={logo} alt="Logo" />
            <h1 className="font-bold text-[18px] text-center">BECOME A NIKE MEMBER</h1>
            <p className="text-[12px] text-[#757575] text-center">
                Create your Nike Member profile and get <br />
                first access to the very best of Nike <br />
                products, inspiration and community.
            </p>
            <div className="flex flex-col justify-center items-center gap-2">
                <input
                    type="email"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Email address"
                />
                <input
                    type="password"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Password"
                />
                <input
                    type="text"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Last Name"
                />
                <input
                    type="date"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                />
                <p className="text-[#757575] text-[10px]">
                    Get a Nike Member Reward every year on your Birthday.
                </p>
                <select
                    name="country"
                    id="country"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                >
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                </select>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="accent-gray-600"
                        />
                        <span className="text-[#757575] text-[14px]">Male</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="accent-gray-600"
                        />
                        <span className="text-[#757575] text-[14px]">Female</span>
                    </label>
                </div>
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-gray-600"
                    />
                    <p className="text-[#757575] text-[10px]">
                        Sign up for emails to get updates from Nike on <br />
                        products, offers and your Member benefits
                    </p>
                </div>
                <p className="text-[#757575] text-[10px] text-center mt-2">
                    By creating an account, you agree to Nike&apos;s Privacy <br />
                    Policy and Terms of Use.
                </p>
                <div className="bg-black w-[260px] h-[40px] flex justify-center items-center rounded-sm mt-4">
                    <button className="text-[12px] text-white">JOIN US</button>
                </div>
                <div className="flex gap-1">
                    <p className="text-[12px] text-[#757575]">Already a Member? </p>
                    <Link href="/SignIn">
                        <p className="text-[12px] text-[#757575] font-medium underline">
                            Sign In.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
