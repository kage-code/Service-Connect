import { useState, useEffect } from "react";
import SearchBar from "../components/ui/SearchBar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HISTORY_KEY = "search_history";

export default function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [history, setHistory] = useState([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    setHistory(saved);
  }, []);

  // Debounced recommendations
  useEffect(() => {
    if (query.trim().length < 2) {
      setRecommendations([]);
      return;
    }

    const timeout = setTimeout(() => {
      axios.get(`http://127.0.0.1:8000/api/services/?search=${query}`)
        .then((res) => setRecommendations(res.data))
        .catch((err) => console.error(err));
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const saveToHistory = (term) => {
    const updated = [term, ...history.filter((h) => h !== term)].slice(0, 10);
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  };

  const deleteFromHistory = (term) => {
    const updated = history.filter((h) => h !== term);
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  };

  const clearAllHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim().length > 0) {
      saveToHistory(query.trim());
      navigate(`/servicepage?search=${query}`);
    }
  };

  const handleRecommendationClick = (name) => {
    saveToHistory(name);
    navigate(`/servicepage?search=${name}`);
  };

  const handleHistoryClick = (term) => {
    saveToHistory(term);
    navigate(`/servicepage?search=${term}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative font-sans">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 pb-2 border-b border-gray-100">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-sm font-semibold ml-3">SEARCH</h1>
      </div>

      <SearchBar onChange={handleSearch} onKeyDown={handleKeyDown} value={query} />

      {/* Recommendations dropdown */}
      {recommendations.length > 0 && (
        <div className="mx-4 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-10">
          {recommendations.map((service) => (
            <div
              key={service.id}
              onClick={() => handleRecommendationClick(service.name)}
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                {service.image ? (
                  <img src={`http://127.0.0.1:8000${service.image}`} alt={service.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{service.name}</p>
                <p className="text-xs text-orange-500">{service.category_name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Search History */}
      {recommendations.length === 0 && (
        <div className="px-4 mt-6">
          {history.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-gray-600">Recent Searches</h2>
                <button
                  onClick={clearAllHistory}
                  className="text-xs text-red-400 font-medium hover:text-red-600"
                >
                  CLEAR ALL
                </button>
              </div>
              <ul className="space-y-3">
                {history.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-2"
                  >
                    <span
                      onClick={() => handleHistoryClick(item)}
                      className="text-sm text-gray-800 cursor-pointer hover:text-orange-500"
                    >
                      {item}
                    </span>
                    <button onClick={() => deleteFromHistory(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400 hover:text-red-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-gray-400 text-center mt-10">No recent searches</p>
          )}
        </div>
      )}

      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <div className="w-24 h-1.5 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}