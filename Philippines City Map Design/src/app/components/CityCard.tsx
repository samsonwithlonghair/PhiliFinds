import { City } from "../data/cities";
import { PhotoGallery } from "./PhotoGallery";
import { MapPin, Users } from "lucide-react";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  // Safety check to ensure city object exists
  if (!city || !city.id || !city.name) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-6">
        <div className="text-red-500">Invalid city data</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
      {city.touristPhotos && city.touristPhotos.length > 0 && (
        <PhotoGallery 
          photos={city.touristPhotos}
          cityName={city.name}
        />
      )}
      
      <div className="p-6">
        <h2 className="text-3xl mb-2">{city.name}</h2>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="size-4" />
          <span className="text-sm">{city.province || 'Unknown'}, {city.region || 'Unknown'}</span>
        </div>
        
        {city.population && (
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Users className="size-4" />
            <span className="text-sm">Population: {city.population}</span>
          </div>
        )}
        
        <p className="text-gray-700 mb-4">{city.description || 'No description available'}</p>
        
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-900">Known For:</h3>
          <div className="flex flex-wrap gap-2">
            {(city.knownFor || []).map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#a8b8a0] text-white rounded-full text-sm transition-all duration-200 hover:bg-[#8b9a82] hover:scale-105 transform cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {city.touristActivities && city.touristActivities.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-900">Activities:</h3>
            <div className="flex flex-wrap gap-2">
              {city.touristActivities.map((activity, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs transition-all duration-200 hover:bg-blue-200 hover:scale-105 transform cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
