import { useEffect, useRef } from "react";
import { icon, map, marker, tileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

export default function Map() {
  const MapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MapInstance = map(MapRef.current!).setView([51.505, -0.09], 13);

    tileLayer(process.env.OPENSTREETMAP_TITLE!, {
      attribution: process.env.OPENSTREETMAP_ATTRIBUTION!,
    }).addTo(MapInstance);

    const Icon = icon({
      iconUrl: "/images/location-pin.svg",
      iconSize: [40, 40],
    });

    const Marker = marker([51.505, -0.09], { icon: Icon }).addTo(MapInstance);
    Marker.bindPopup("The Stoney Street, London, UK").openPopup();

    if (window) {
      (window as any).L.Control.geocoder({
        defaultMarkGeocode: false,
      })
        .on("markgeocode", function (e: any) {
          const { center, name } = e.geocode;

          Marker.setLatLng(center)
            .bindPopup(name || "Again Search")
            .openPopup();

          MapInstance.setView(center, 13);
        })
        .addTo(MapInstance);
    }

    return () => {
      MapInstance.remove();
    };
  }, [window]);

  return (
    <div
      ref={MapRef}
      className="h-[500px] w-full rounded-3xl"
    >
    </div>
  );
}
