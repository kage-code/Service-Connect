import SearchBar from "../components/ui/SearchBar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const recentSearches = [
  "3D Design",
  "Graphic Design",
  "Programming",
  "SEO & Marketing",
  "Web Development",
  "Office Productivity",
  "Personal Development",
  "Finance & Accounting",
  "HR Management",
];

export default function SearchScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 relative font-sans">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 pb-2 border-b border-gray-100">
        {/* Back Arrow SVG */}
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>
        
        <h1 className="text-sm font-semibold ml-3">SEARCH</h1>
      </div>

      {/* Search Bar */}
      <SearchBar/>

      {/* Recents */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold text-gray-600">Recents Search</h2>
          <button className="text-xs text-gray-500 font-medium">SEE ALL &gt;</button>
        </div>

        <ul className="space-y-3">
          {recentSearches.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-100 pb-2"
            >
              <span className="text-sm text-gray-800">{item}</span>
              {/* X Icon */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <div className="w-24 h-1.5 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
