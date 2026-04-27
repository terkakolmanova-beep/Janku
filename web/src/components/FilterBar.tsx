"use client";

interface FilterBarProps {
  activeType: string;
  activeLocation: string;
  onTypeChange: (type: string) => void;
  onLocationChange: (location: string) => void;
}

const types = [
  { value: "all", label: "Vše" },
  { value: "hala", label: "Haly" },
  { value: "kancelar", label: "Kanceláře" },
  { value: "prodejna", label: "Prodejny" },
  { value: "bydleni", label: "Bydlení" },
];

const locations = [
  { value: "all", label: "Všechny lokality" },
  { value: "chrastava", label: "Chrastava" },
  { value: "liberec", label: "Liberec" },
];

export default function FilterBar({
  activeType,
  activeLocation,
  onTypeChange,
  onLocationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      {/* Type filter */}
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t.value}
            onClick={() => onTypeChange(t.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeType === t.value
                ? "bg-primary text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Location filter */}
      <select
        value={activeLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {locations.map((l) => (
          <option key={l.value} value={l.value}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
