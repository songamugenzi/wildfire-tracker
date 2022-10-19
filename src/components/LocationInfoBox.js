import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close-circle";

const LocationInfoBox = ({ info, showModal, onClick }) => {
  const sourceID = info.sources[0].id;
  const sourceURL = info.sources[0].url;

  return (
    <>
      {showModal && (
        <div className="location-info">
          <div className="title-sources">
            <h2 className="location-title">{info.title}</h2>
            <ul className="location-sources">
              <li className="sources-header">Source</li>
              <li className="src-id">{sourceID}</li>
              <li className="src-url">{sourceURL}</li>
              <li className="src-id">Event Id: {info.id}</li>
            </ul>
          </div>
          <div className="close-container" onClick={onClick}>
            <Icon icon={closeIcon} className="close-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default LocationInfoBox;
