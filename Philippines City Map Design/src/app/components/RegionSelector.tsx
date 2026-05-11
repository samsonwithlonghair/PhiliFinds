import { MapPin } from "lucide-react";

interface RegionSelectorProps {
  onSelectRegion: (region: 'Luzon' | 'Visayas' | 'Mindanao') => void;
}

export function RegionSelector({ onSelectRegion }: RegionSelectorProps) {
  const regions = [
    {
      name: 'Luzon' as const,
      description: 'Northern Philippines - Home to the capital Manila',
      color: 'bg-[#8fa584]'
    },
    {
      name: 'Visayas' as const,
      description: 'Central Philippines - Beautiful islands and beaches',
      color: 'bg-[#a8b8a0]'
    },
    {
      name: 'Mindanao' as const,
      description: 'Southern Philippines - Rich culture and biodiversity',
      color: 'bg-[#7d9272]'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
        <h2 className="text-2xl text-white mb-3">Choose a Region</h2>
        <p className="text-white/80 text-sm">Select a major island group to explore its cities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regions.map((region, index) => (
          <button
            key={region.name}
            onClick={() => onSelectRegion(region.name)}
            className={`${region.color} hover:opacity-90 text-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg animate-in fade-in slide-in-from-bottom-4 transform`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="size-12 transition-transform duration-300 hover:scale-110" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-2">{region.name}</h3>
            <p className="text-white/90 text-sm">{region.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
