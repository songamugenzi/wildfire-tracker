import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const mapKey =
    process.env.REACT_APP_MAP_TOKEN ||
    "Google Map key not found. Retrive new key";

  const [locationInfo, setLocationInfo] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <LocationMarker
          key={ev.id}
          lng={ev.geometry[0].coordinates[0]}
          lat={ev.geometry[0].coordinates[1]}
          onClick={() => {
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              sources: ev.sources,
            });
            setShowModal(true);
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          info={locationInfo}
          showModal={showModal}
          onClick={() => setShowModal(!showModal)}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
