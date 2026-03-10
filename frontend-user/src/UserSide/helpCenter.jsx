import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import CommonHeader from "../components/ui/CommonHeader";
import PageHeader from "../components/ui/PageHeader"

export default function HelpCenterPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("faq"); // faq | contact

  return (
    <div className="min-h-screen bg-[#E8EBF3] flex flex-col">
      {/* Header */}
      <PageHeader title="HELP CENTER" showFilter showSearch onBack={() => navigate(-1)} />

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-200">
        <button
          onClick={() => setActiveTab("faq")}
          className={`flex-1 text-center py-3 font-semibold text-sm border-b-2 transition-all duration-200 ${
            activeTab === "faq"
              ? "border-[#1D1F2A] text-[#1D1F2A]"
              : "border-transparent text-gray-500"
          }`}
        >
          FAQ
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`flex-1 text-center py-3 font-semibold text-sm border-b-2 transition-all duration-200 ${
            activeTab === "contact"
              ? "border-[#1D1F2A] text-[#1D1F2A]"
              : "border-transparent text-gray-500"
          }`}
        >
          CONTACT US
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        {activeTab === "faq" ? <FAQSection /> : <ContactUsSection />}
      </div>
    </div>
  );
}

/* -------------------- FAQ SECTION -------------------- */
function FAQSection() {
  const categories = ["General", "Account", "Payment", "Service"];
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I manage my notifications?",
      answer:
        'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
    },
    {
      question: "How do I start a guided meditation session?",
      answer:
        "You can start a session by selecting 'Meditate' on the home screen.",
    },
    {
      question: "How do I join a support group?",
      answer: "Navigate to the 'Community' tab and choose a group to join.",
    },
    {
      question: "Is my data safe and private?",
      answer:
        "Yes, your data is encrypted and stored securely following industry best practices.",
    },
  ];

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-semibold rounded-full ${
              activeCategory === cat
                ? "bg-[#1D1F2A] text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="mt-4 space-y-3 px-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- CONTACT US SECTION -------------------- */
function ContactUsSection() {
  const contacts = [
    {
      icon: <Headphones className="w-5 h-5 text-black" />,
      label: "Customer Services",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-black" />,
      label: "WhatsApp",
    },
    {
      icon: <Facebook className="w-5 h-5 text-black" />,
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5 text-black" />,
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-5 h-5 text-black" />,
      label: "Instagram",
    },
  ];

  return (
    <div className="space-y-4 px-20">
      {contacts.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl flex items-center gap-3 p-4 shadow-sm"
        >
          <div className="bg-[#EEF0F3] p-3 rounded-full flex items-center justify-center">
            {item.icon}
          </div>
          <p className="text-sm font-semibold text-gray-900">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
