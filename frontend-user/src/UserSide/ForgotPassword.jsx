import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import CommonHeader from "../components/ui/CommonHeader";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <CommonHeader title="FORGOT PASSWORD"/>

      {/* Instruction Text */}
      <div className="text-center mt-60 px-6">
        <p className="text-[#545454] text-sm leading-relaxed mt-12">
          Enter your registered email or phone number to receive an OTP to reset your password
        </p>
      </div>

     {/* Inputs + Button Wrapper */}
<div className="flex justify-center mt-8 px-4">
  <div className="w-full max-w-sm flex flex-col gap-4">
    <Input placeholder="Email" icon={MdEmail} />
    <Input placeholder="Phone Number" icon={FiPhone} />
    
    {/* Continue Button */}
    <SubmitButton>
      Continue
    </SubmitButton>
  </div>
</div>

    </div>
  );
}
