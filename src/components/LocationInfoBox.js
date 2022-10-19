import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close-circle";

const LocationInfoBox = ({ info, showModal, onClick }) => {
  const sourceID = info.sources[0].id;
  const sourceURL = info.sources[0].url;

  return (
    <>
      {showModal && (
        <div className="location-info">
          <div>
            <h2 className="location-title">{info.title}</h2>
            <ul className="location-source">
              <li className="source-info">
                Reported by {sourceID} -{" "}
                <a
                  href={sourceURL}
                  className="src-url"
                  rel="noreferrer"
                  target="_blank"
                >
                  More details
                </a>
              </li>
              <li className="src-id">Event ID: {info.id}</li>
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
