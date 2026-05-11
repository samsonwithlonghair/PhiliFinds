"use client";

import { useState } from "react";
import { philippineCities } from "../src/app/data/cities";
import { CitySelect } from "../src/app/components/CitySelect";
import { CityCard } from "../src/app/components/CityCard";
import { RegionSelector } from "../src/app/components/RegionSelector";
import { filterCitiesByIslandGroup, IslandGroup } from "../src/app/utils/regionHelper";
import { ArrowLeft } from "lucide-react";
import logo from "../src/imports/image-1.png";

export default function Home() {
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
    <div className="min-h-screen bg-[#f5f1e8] p-8 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b5c7ae]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#8fa584]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#a8b8a0]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#7d9272]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#b5c7ae] rounded-3xl p-12 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img src={logo.src} alt="PhilFinds" className="h-20 object-contain" />
          </div>
          
          {/* Step 1: Region Selection */}
          {!selectedRegion && (
            <RegionSelector onSelectRegion={setSelectedRegion} />
          )}
          
          {/* Step 2: City Selection */}
          {selectedRegion && !selectedCity && (
            <div className="flex flex-col items-center justify-center py-16 animate-in fade-in slide-in-from-right-4 duration-500">
              <button
                onClick={handleBackToRegions}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all duration-200 hover:scale-105 transform"
              >
                <ArrowLeft className="size-4 transition-transform duration-200" />
                <span className="text-sm">Back to regions</span>
              </button>
              
              <h2 className="text-3xl text-white mb-2 animate-in fade-in slide-in-from-bottom-2 duration-700">{selectedRegion}</h2>
              <p className="text-white/80 mb-6 text-lg animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">Choose a city to explore</p>
              
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
                <CitySelect 
                  cities={filteredCities}
                  selectedCity={selectedCityId}
                  onCityChange={setSelectedCityId}
                />
              </div>
              
              <p className="text-white/80 text-sm mt-6 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                {filteredCities.length} cities in {selectedRegion}
              </p>
            </div>
          )}
          
          {/* Step 3: City Details - Show back button in header */}
          {selectedCity && (
            <div className="flex items-center justify-center animate-in fade-in slide-in-from-left-4 duration-500">
              <button
                onClick={handleBackToCities}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-105 transform"
              >
                <ArrowLeft className="size-4 transition-transform duration-200" />
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
        {selectedRegion && !selectedCity && filteredCities && filteredCities.length > 0 && (
          <div>
            <h2 className="text-2xl mb-6 text-gray-800">Featured Cities in {selectedRegion}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.slice(0, 6).map((city, index) => {
                if (!city || !city.id) return null;
                return (
                  <div 
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    className="cursor-pointer transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CityCard city={city} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
