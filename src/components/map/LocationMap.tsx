'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, X, MagnifyingGlassPlus } from 'phosphor-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Map,
  MapTileLayer,
  MapMarker,
  MapZoomControl,
  useLeaflet,
} from '@/components/ui/map'
import { useMap } from 'react-leaflet'
import type { LatLngExpression, Map as LeafletMap } from 'leaflet'

export interface Location {
  id: string
  name: string
  address: string
  city: string
  country: string
  coordinates: [number, number] // [latitude, longitude]
  images?: string[] // URLs to images for gallery (if not provided, will be auto-generated from free map sources by coordinates)
}

/**
 * Convert lat/lng to tile coordinates for map tile services
 */
function deg2num(lat: number, lng: number, zoom: number): [number, number] {
  const latRad = (lat * Math.PI) / 180
  const n = Math.pow(2, zoom)
  const x = Math.floor(((lng + 180) / 360) * n)
  const y = Math.floor(((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n)
  return [x, y]
}

/**
 * Generates location images from various FREE sources by coordinates
 * 
 * Uses multiple free image sources with automatic fallback:
 * 1. OpenStreetMap static maps (completely free, no API key needed)
 * 2. OpenStreetMap tiles (completely free, no API key needed)
 * 3. Satellite imagery from Esri (free, no API key)
 * 4. Google Street View (works without key, may have watermarks)
 * 5. Yandex Maps Static API (works with optional API key)
 * 6. 2GIS Static Maps (works with optional API key)
 * 
 * Most sources are completely free and don't require API keys!
 * For Yandex and 2GIS, API keys are optional but recommended for better results.
 * 
 * @param coordinates - [latitude, longitude]
 * @param count - Number of images to generate (default: 6)
 * @returns Array of image URLs from various free sources
 */
function generateLocationImages(
  coordinates: [number, number],
  count: number = 6
): string[] {
  const [lat, lng] = coordinates
  const size = '400x400'
  const zoom = 17 // High zoom for detailed images
  
  // Optional API keys (can be set in .env.local)
  const yandexApiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || ''
  const dgisApiKey = process.env.NEXT_PUBLIC_2GIS_API_KEY || ''
  
  const images: string[] = []
  
  // Strategy: Mix different free sources for variety
  const sources = [
    // 1. OpenStreetMap static map (completely free, no API key)
    () => `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=mapnik`,
    
    // 2. OpenStreetMap tile (completely free, no API key)
    () => {
      const [x, y] = deg2num(lat, lng, zoom)
      return `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`
    },
    
    // 3. Satellite imagery from Esri (free, no API key)
    () => {
      const [x, y] = deg2num(lat, lng, zoom)
      return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${y}/${x}`
    },
    
    // 4. Yandex Maps Static API (works with optional API key)
    () => {
      const params = new URLSearchParams({
        ll: `${lng},${lat}`, // Yandex uses lng,lat format
        z: zoom.toString(),
        size: size,
        l: 'map', // map type: map, sat, sat,skl
        ...(yandexApiKey && { apikey: yandexApiKey }),
      })
      return `https://static-maps.yandex.ru/1.x/?${params.toString()}`
    },
    
    // 5. Yandex Maps Satellite (works with optional API key)
    () => {
      const params = new URLSearchParams({
        ll: `${lng},${lat}`,
        z: zoom.toString(),
        size: size,
        l: 'sat', // satellite view
        ...(yandexApiKey && { apikey: yandexApiKey }),
      })
      return `https://static-maps.yandex.ru/1.x/?${params.toString()}`
    },
    
    // 6. 2GIS Static Map (works with optional API key)
    () => {
      // 2GIS Static API - try different endpoints
      if (dgisApiKey) {
        // With API key - use official endpoint
        const params = new URLSearchParams({
          center: `${lng},${lat}`,
          zoom: zoom.toString(),
          size: size,
          key: dgisApiKey,
        })
        return `https://catalog.api.2gis.com/staticmap?${params.toString()}`
      } else {
        // Without API key - try alternative approach using 2GIS tiles
        // Note: This may not work for all locations, but worth trying
        const [x, y] = deg2num(lat, lng, zoom)
        // 2GIS tile server (if available)
        return `https://tile2.maps.2gis.com/tiles?x=${x}&y=${y}&z=${zoom}`
      }
    },
    
    // 7. Google Street View (works without key, may have watermarks)
    () => {
      const headings = [0, 90, 180, 270]
      const heading = headings[images.length % headings.length]
      return `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${lat},${lng}&heading=${heading}&pitch=0&fov=90`
    },
  ]
  
  // Generate images from different sources
  for (let i = 0; i < count; i++) {
    const sourceIndex = i % sources.length
    const imageUrl = sources[sourceIndex]()
    images.push(imageUrl)
  }
  
  return images
}

interface LocationMapProps {
  locations: Location[]
  height?: string
  defaultZoom?: number
  className?: string
}

// Component to handle map bounds when locations change
function MapBounds({ locations }: { locations: Location[] }) {
  const map = useMap()
  const { L } = useLeaflet()

  useEffect(() => {
    if (locations.length > 0 && map && L) {
      const bounds = L.latLngBounds(
        locations.map((loc) => loc.coordinates)
      )
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 })
    }
  }, [locations, map, L])

  return null
}

// Component to provide map instance to parent
function MapInstanceProvider({ setMapInstance }: { setMapInstance: (map: LeafletMap) => void }) {
  const map = useMap()

  useEffect(() => {
    if (map) {
      setMapInstance(map)
    }
  }, [map, setMapInstance])

  return null
}

// Custom pin icon component
function CustomPinIcon({ isActive, size = 60 }: { isActive: boolean; size?: number }) {
  const iconSize = size * 0.5
  const pointerHeight = size * 0.27
  const totalHeight = size + pointerHeight

  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${totalHeight}px`, cursor: 'pointer' }}>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: `${size / 2}px`,
            left: `${size / 2}px`,
            transform: 'translate(-50%, -50%)',
            width: `${size * 1.8}px`,
            height: `${size * 1.8}px`,
            background: '#059669',
            borderRadius: '50%',
            opacity: 0.3,
            animation: 'pulse 2s infinite',
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: `${size}px`,
          height: `${size}px`,
          background: isActive ? '#059669' : '#10b981',
          borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: isActive ? 'bounce 1s infinite' : 'none',
          transform: isActive ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%) scale(1)',
        }}
      >
        <MapPin size={iconSize} weight="fill" color="white" />
      </div>
      <div
        style={{
          position: 'absolute',
          top: `${size}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: `${pointerHeight}px solid ${isActive ? '#059669' : '#10b981'}`,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          50% {
            transform: translateX(-50%) translateY(-5px) scale(1.15);
          }
        }
      `}</style>
    </div>
  )
}

export function LocationMap({
  locations,
  height = '500px',
  defaultZoom = 5,
  className = ''
}: LocationMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [mounted, setMounted] = useState(false)
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
    
    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Reset image states when location changes
  useEffect(() => {
    if (selectedLocation) {
      setFailedImages(new Set())
    }
  }, [selectedLocation])

  // Function to get images for a location (use provided images or generate from coordinates)
  const getLocationImages = (location: Location): string[] => {
    if (location.images && location.images.length > 0) {
      return location.images
    }
    // Auto-generate images from free sources by coordinates
    return generateLocationImages(location.coordinates, 6)
  }

  if (!mounted || locations.length === 0) {
    return (
      <div
        className={`bg-muted rounded-lg flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    )
  }

  // Function to zoom to location
  const zoomToLocation = (location: Location) => {
    if (mapInstance && location) {
      mapInstance.setView(location.coordinates, 15, {
        animate: true,
        duration: 1.5,
      })
    }
  }

  // Calculate center point (average of all locations)
  const centerLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length
  const centerLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length

  // Responsive pin size
  const size = isMobile ? 48 : isTablet ? 54 : 60
  const pointerHeight = isMobile ? 12 : 16
  const totalHeight = size + pointerHeight

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <Map
        center={[centerLat, centerLng] as LatLngExpression}
        zoom={defaultZoom}
        className="h-full w-full"
      >
        <MapTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          darkUrl="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          darkAttribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <MapBounds locations={locations} />
        <MapInstanceProvider setMapInstance={setMapInstance} />
        <MapZoomControl />

        {locations.map((location) => (
          <MapMarker
            key={location.id}
            position={location.coordinates}
            iconAnchor={[size / 2, totalHeight]}
            icon={
              <CustomPinIcon isActive={selectedLocation?.id === location.id} size={size} />
            }
            eventHandlers={{
              click: (e) => {
                e.originalEvent.stopPropagation()
                setSelectedLocation(location)
              },
            }}
          />
        ))}
      </Map>

      {/* Location details card */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 md:bottom-2 left-0 md:left-2 right-0 md:right-2 lg:left-4 lg:right-4 z-30 pointer-events-auto max-w-sm md:max-w-md lg:max-w-4xl mx-auto w-full md:w-auto"
          >
            <Card className="bg-background/98 backdrop-blur-md border shadow-2xl overflow-hidden rounded-t-2xl md:rounded-2xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left side - Location info */}
                  <div className="p-3 sm:p-4 md:p-4 lg:p-6 lg:col-span-2">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="flex items-center space-x-2 flex-1 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-energy-600 rounded-full flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" weight="fill" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-sm sm:text-base lg:text-xl text-foreground truncate">{selectedLocation.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {selectedLocation.city}, {selectedLocation.country}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedLocation(null)}
                        className="p-1 hover:bg-muted rounded-full transition-colors shrink-0 ml-1"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-1.5 mb-2 md:mb-3">
                      <div className="flex items-start space-x-1.5">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-energy-600 mt-0.5 shrink-0" weight="fill" />
                        <p className="text-xs text-foreground leading-relaxed break-words hyphens-auto line-clamp-2 md:line-clamp-none">
                          {selectedLocation.address}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => zoomToLocation(selectedLocation)}
                      className="w-full energy-gradient text-white hover:opacity-90 transition-opacity text-xs h-8 md:h-9"
                      size="sm"
                    >
                      <MagnifyingGlassPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5" />
                      <span className="hidden sm:inline">Увеличить точку</span>
                      <span className="sm:hidden">Увеличить</span>
                    </Button>
                  </div>

                  {/* Right side - Image gallery */}
                  {(() => {
                    const images = getLocationImages(selectedLocation)
                    // Filter out failed images
                    const validImages = images.filter(img => !failedImages.has(img))
                    
                    return validImages.length > 0 ? (
                      <div className="lg:col-span-1 bg-muted/50 p-2 sm:p-3 md:p-3 lg:p-4 border-t lg:border-t-0 lg:border-l border-border">
                        <AnimatePresence mode="popLayout">
                          <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                            {validImages.map((imageUrl, index) => (
                              <motion.div
                                key={`${imageUrl}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-square rounded-md sm:rounded-lg overflow-hidden cursor-pointer group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Image
                                  src={imageUrl}
                                  alt={`${selectedLocation.name} - Image ${index + 1}`}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                                  unoptimized
                                  sizes="(max-width: 768px) 25vw, 20vw"
                                  onError={() => {
                                    // Remove image from DOM on error
                                    setFailedImages(prev => new Set([...prev, imageUrl]))
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </AnimatePresence>
                      </div>
                    ) : null
                  })()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
