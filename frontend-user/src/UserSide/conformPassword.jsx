import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import CommonHeader from "../components/ui/CommonHeader";

export default function ConformPassword() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
    <CommonHeader title="CONFIRM PASSWORD" />

      {/* Instruction Text aligned with inputs */}
      <div className="mt-16 px-4 flex justify-center">
        <div className="w-full max-w-sm">
          <p className="text-[#202244] text-[19px] leading-relaxed mt-12 font-bold">
            Create Your New Password
          </p>
        </div>
      </div>

      {/* Inputs + Button Wrapper */}
      <div className="flex justify-center mt-8 px-4 mb-3">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input placeholder="Password" icon={MdEmail} />
          <Input placeholder="Conform Password" icon={FiPhone} />

          {/* Continue Button */}
          <SubmitButton >Continue</SubmitButton>
        </div>
      </div>
    </div>
  );
}
