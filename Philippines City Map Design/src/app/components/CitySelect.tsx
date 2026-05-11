import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { City } from "../data/cities";

interface CitySelectProps {
  cities: City[];
  selectedCity: string | null;
  onCityChange: (cityId: string) => void;
}

export function CitySelect({ cities, selectedCity, onCityChange }: CitySelectProps) {
  // Group cities by region
  const cityGroups = cities.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, City[]>);

  return (
    <Select.Root value={selectedCity || undefined} onValueChange={onCityChange}>
      <Select.Trigger className="inline-flex items-center justify-between gap-2 px-6 py-3 bg-[#8fa584] hover:bg-[#7d9272] text-white rounded-full text-sm min-w-[180px] transition-all duration-200 hover:scale-105 transform focus:ring-2 focus:ring-[#8fa584]/50">
        <Select.Value placeholder="Choose a City" />
        <Select.Icon>
          <ChevronDown className="size-4 transition-transform duration-200" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <Select.Viewport className="p-2 max-h-[400px] overflow-y-auto">
            {Object.entries(cityGroups).map(([region, cities]) => (
              <Select.Group key={region}>
                <Select.Label className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase sticky top-0 bg-white">
                  {region}
                </Select.Label>
                {cities.map((city) => (
                  <Select.Item
                    key={city.id}
                    value={city.id}
                    className="relative flex items-center px-4 py-2 text-sm text-gray-900 rounded cursor-pointer hover:bg-[#e8ede6] outline-none data-[highlighted]:bg-[#e8ede6] transition-all duration-150 hover:scale-[1.02] transform"
                  >
                    <Select.ItemText>{city.name}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
