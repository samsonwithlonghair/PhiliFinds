import { useState } from "react";
import { philippineCities } from "./data/cities";
import { CitySelect } from "./components/CitySelect";
import { CityCard } from "./components/CityCard";
import { RegionSelector } from "./components/RegionSelector";
import { filterCitiesByIslandGroup, IslandGroup } from "./utils/regionHelper";
import { ArrowLeft } from "lucide-react";
import logo from "../imports/image-1.png";

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState<IslandGroup | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  
  const selectedCity = selectedCityId 
    ? philippineCities.find(city => city.id === selectedCityId) 
    : null;
    
  const filteredCities = selectedRegion 
    ? filterCitiesByIslandGroup(philippineCities, selectedRegion)
    : [];
    
  const handleBackToRegions = () => {
    setSelectedRegion(null);
    setSelectedCityId(null);
  };
  
  const handleBackToCities = () => {
    setSelectedCityId(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#b5c7ae] rounded-3xl p-12 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="PhilFinds" className="h-20 object-contain" />
          </div>
          
          {/* Step 1: Region Selection */}
          {!selectedRegion && (
            <RegionSelector onSelectRegion={setSelectedRegion} />
          )}
          
          {/* Step 2: City Selection */}
          {selectedRegion && !selectedCity && (
            <div className="flex flex-col items-center justify-center py-16">
              <button
                onClick={handleBackToRegions}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="size-4" />
                <span className="text-sm">Back to regions</span>
              </button>
              
              <h2 className="text-3xl text-white mb-2">{selectedRegion}</h2>
              <p className="text-white/80 mb-6 text-lg">Choose a city to explore</p>
              
              <CitySelect 
                cities={filteredCities}
                selectedCity={selectedCityId}
                onCityChange={setSelectedCityId}
              />
              
              <p className="text-white/80 text-sm mt-6">
                {filteredCities.length} cities in {selectedRegion}
              </p>
            </div>
          )}
          
          {/* Step 3: City Details - Show back button in header */}
          {selectedCity && (
            <div className="flex items-center justify-center">
              <button
                onClick={handleBackToCities}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="size-4" />
                <span className="text-sm">Back to {selectedRegion} cities</span>
              </button>
            </div>
          )}
        </div>

        {/* City Details */}
        {selectedCity && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CityCard city={selectedCity} />
          </div>
        )}
        
        {/* Preview Cities Grid - Show when region is selected but no city */}
        {selectedRegion && !selectedCity && (
          <div>
            <h2 className="text-2xl mb-6 text-gray-800">Featured Cities in {selectedRegion}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.slice(0, 6).map((city) => (
                <div 
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <CityCard city={city} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}