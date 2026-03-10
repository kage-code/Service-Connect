import React from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

export default function AdminCategoryGrid({ categories = [], setCategories }) {
  // Simulate delete
  const handleDelete = (index) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm p-3 flex flex-col items-center hover:shadow-md transition"
        >
          <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-3">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-medium text-sm mb-2">{cat.title}</p>

          <div className="flex justify-center gap-3 text-gray-600 text-sm">
            <Eye
              size={16}
              className="cursor-pointer hover:text-indigo-600"
              onClick={() => alert(`Viewing ${cat.title}`)}
            />
            <Edit
              size={16}
              className="cursor-pointer hover:text-indigo-600"
              onClick={() => alert(`Editing ${cat.title}`)}
            />
            <Trash2
              size={16}
              className="cursor-pointer hover:text-red-500"
              onClick={() => handleDelete(i)}
            />
          </div>
        </div>
      ))}

      {/* Add New Category Card */}
      <div
        onClick={() =>
          setCategories((prev) => [
            ...prev,
            { title: "New Category", image: "/blackimg.png", type: "Main" },
          ])
        }
        className="bg-white rounded-xl shadow-sm p-3 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
      >
        <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-3">
          <Plus size={32} />
        </div>
        <p className="text-sm text-gray-500">Add New</p>
      </div>
    </div>
  );
}
