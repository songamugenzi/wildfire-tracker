import { useState } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close-circle";

const LocationInfoBox = ({ info }) => {
  const [toggle, setToggle] = useState(true);

  const sourceID = info.sources[0].id;
  const sourceURL = info.sources[0].url;

  const handleClick = (e) => {
    console.log("click event ---> ", e);
    setToggle(!toggle);

    // Close btn click event not yet functional
  };

  return (
    <div className={toggle ? 'location-info show' : 'hidden'}>
      <div className="title-sources">
        <h2 className="location-title">{info.title}</h2>
        <ul className="location-sources">
          <li className="sources-header">Sources</li>
          <li className="src-id">{sourceID}</li>
          <li className="src-url">{sourceURL}</li>
          <li className="src-id">Event Id: {info.id}</li>
        </ul>
      </div>
      <div className="close-container" onClick={handleClick}>
        <Icon icon={closeIcon} className="close-icon" />
      </div>
    </div>
  );
};

export default LocationInfoBox;
