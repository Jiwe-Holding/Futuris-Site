import React, { useState, useEffect } from 'react';
import { MapPin, Building, Calendar, Globe } from 'lucide-react';

interface Office {
  name: string;
  code: string;
  city: string;
  address: string;
  coordinates: { lat: number; lng: number };
  isHeadquarters: boolean;
  established: string;
}

interface WorldMapProps {
  offices: Office[];
}

declare global {
  interface Window {
    simplemaps_worldmap_mapdata: any;
    simplemaps_worldmap: any;
  }
}

const WorldMap: React.FC<WorldMapProps> = ({ offices }) => {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Configure SimpleMaps with corporate styling
      if (window.simplemaps_worldmap_mapdata && window.simplemaps_worldmap) {
        // Corporate styling
        window.simplemaps_worldmap_mapdata.main_settings = {
          ...window.simplemaps_worldmap_mapdata.main_settings,
          width: "responsive",
          background_color: "#F9FAFB",
          background_transparent: "no",
          state_color: "#F3F4F6",
          state_hover_color: "#E5E7EB",
          border_size: 1,
          border_color: "#D1D5DB",
          popup_color: "white",
          popup_opacity: 0.95,
          popup_corners: 8,
          popup_font: "14px/1.5 Montserrat, Arial, sans-serif",
          div: "futuris-world-map"
        };

        // Add office locations with better visibility
        window.simplemaps_worldmap_mapdata.locations = {};
        offices.forEach((office, index) => {
          window.simplemaps_worldmap_mapdata.locations[index] = {
            name: office.name,
            lat: office.coordinates.lat.toString(),
            lng: office.coordinates.lng.toString(),
            color: office.isHeadquarters ? "#0A66C2" : "#60A5FA",
            description: `<strong>${office.name}</strong><br/>${office.city}<br/>${office.address}<br/><em>Established: ${office.established}</em>`,
            size: office.isHeadquarters ? 40 : 30,
            type: "circle",
            border_color: "#FFFFFF",
            border: office.isHeadquarters ? 4 : 3,
            hover_border: office.isHeadquarters ? 5 : 4,
            opacity: 1,
            hover_opacity: 1
          };
          console.log(`Added office location ${office.code}:`, office.name, `(${office.coordinates.lat}, ${office.coordinates.lng})`);
        });

        // Highlight Futuris countries including DRC
        const futurisCountries = ['CF', 'CD', 'CG', 'TD', 'ZA'];
        futurisCountries.forEach(countryCode => {
          if (window.simplemaps_worldmap_mapdata.state_specific[countryCode]) {
            window.simplemaps_worldmap_mapdata.state_specific[countryCode] = {
              ...window.simplemaps_worldmap_mapdata.state_specific[countryCode],
              color: "#DBEAFE",
              hover_color: "#BFDBFE",
              description: countryCode === 'CD' ? 'Democratic Republic of Congo - FUTURIS Office' :
                          countryCode === 'CF' ? 'Central African Republic - FUTURIS Office' :
                          countryCode === 'CG' ? 'Republic of Congo - FUTURIS Office' :
                          countryCode === 'TD' ? 'Chad - FUTURIS Office' :
                          countryCode === 'ZA' ? 'South Africa - FUTURIS Headquarters' :
                          'FUTURIS Office'
            };
            console.log(`Configured ${countryCode}:`, window.simplemaps_worldmap_mapdata.state_specific[countryCode]);
          } else {
            console.warn(`Country ${countryCode} not found in mapdata`);
          }
        });

        // Load the map with debug info
        const regionalOffices = offices.filter(o => !o.isHeadquarters);
        console.log('Loading SimpleMaps with offices:', offices.map(o => `${o.name} (${o.code})`));
        console.log('Regional offices count:', regionalOffices.length);
        console.log('Regional offices:', regionalOffices.map(o => `${o.name} (${o.code})`));
        console.log('Futuris countries configured:', futurisCountries);
        
        window.simplemaps_worldmap.load();
        setMapLoaded(true);
        
        // Verify all offices are loaded
        setTimeout(() => {
          console.log('=== OFFICE VERIFICATION ===');
          const hqOffices = offices.filter(o => o.isHeadquarters);
          const regionalOffices = offices.filter(o => !o.isHeadquarters);
          
          console.log(`📍 HEADQUARTERS (${hqOffices.length}):`);
          hqOffices.forEach(office => {
            console.log(`  🏢 ${office.code} - ${office.name}: (${office.coordinates.lat}, ${office.coordinates.lng})`);
          });
          
          console.log(`📍 REGIONAL OFFICES (${regionalOffices.length}):`);
          regionalOffices.forEach(office => {
            console.log(`  🏢 ${office.code} - ${office.name}: (${office.coordinates.lat}, ${office.coordinates.lng})`);
          });
          
          console.log('📊 Total locations in SimpleMaps:', Object.keys(window.simplemaps_worldmap_mapdata.locations || {}).length);
          console.log('📋 Expected: 1 HQ + 4 Regional = 5 total');
        }, 1000);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [offices]);

  const handleOfficeSelect = (office: Office) => {
    setSelectedOffice(office);
    
    // Try to highlight the corresponding location on SimpleMaps
    if (window.simplemaps_worldmap && mapLoaded) {
      try {
        // Find the location index
        const locationIndex = offices.findIndex(o => o.code === office.code);
        if (locationIndex >= 0) {
          // SimpleMaps API to zoom to location
          window.simplemaps_worldmap.zoom_to_location(locationIndex);
        }
      } catch (e) {
        console.log('SimpleMaps interaction not available');
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        
        {/* Responsive Map Section */}
        <div className="order-2 xl:order-1">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
            <span className="hidden sm:inline">Our Global Presence</span>
            <span className="sm:hidden">Global Presence</span>
          </h3>
          
          <div className="relative bg-gray-50 rounded-xl p-2 sm:p-4 border border-gray-200">
            {/* Responsive SimpleMaps Container */}
            <div 
              id="futuris-world-map" 
              className="w-full"
              style={{ height: 'clamp(250px, 50vw, 360px)' }}
            >
              {!mapLoaded && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2 sm:mb-4"></div>
                    <p className="text-gray-500 text-xs sm:text-sm">Loading world map...</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Responsive Legend */}
            <div className="mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Headquarters</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Regional</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-100 rounded-full border border-blue-200"></div>
                <span className="text-gray-700 font-medium hidden sm:inline">Coverage Area</span>
                <span className="text-gray-700 font-medium sm:hidden">Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Offices List */}
        <div className="order-1 xl:order-2">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
            <Building className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
            Our Offices
          </h3>
          
          <div className="space-y-2 sm:space-y-3">
            {offices.map((office, index) => (
              <div
                key={index}
                onClick={() => handleOfficeSelect(office)}
                className={`p-3 sm:p-4 lg:p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedOffice?.code === office.code
                    ? 'border-blue-600 bg-blue-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-black text-base sm:text-lg truncate">{office.name}</h4>
                      {office.isHeadquarters && (
                        <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0">
                          HQ
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium truncate">{office.city}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 line-clamp-2">{office.address}</div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">Est. {office.established}</span>
                    </div>
                  </div>
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ml-2 ${
                      office.isHeadquarters ? 'bg-blue-600' : 'bg-blue-400'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive Selected Office Details */}
          {selectedOffice && (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 lg:p-5 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-1 text-base sm:text-lg">{selectedOffice.name}</h4>
              <p className="text-blue-800 text-sm font-medium">{selectedOffice.city}</p>
              <p className="text-blue-700 text-xs sm:text-sm">{selectedOffice.address}</p>
              <div className="mt-2 text-xs text-blue-600">
                <span className="hidden sm:inline">Established: {selectedOffice.established} | Coordinates: {selectedOffice.coordinates.lat.toFixed(4)}, {selectedOffice.coordinates.lng.toFixed(4)}</span>
                <span className="sm:hidden">Est. {selectedOffice.established}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;