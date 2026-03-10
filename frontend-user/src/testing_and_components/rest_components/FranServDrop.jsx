export default function FranServDrop() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <select className="border rounded-lg px-4 py-2 text-sm text-gray-600 bg-white shadow-sm md:w-lg ">
        <option>Franchisee</option>
      </select>

      <select className="border rounded-lg px-4 py-2 text-sm text-gray-600 bg-white shadow-sm md:w-lg">
        <option>Service Provider</option>
      </select>
    </div>
  );
}
