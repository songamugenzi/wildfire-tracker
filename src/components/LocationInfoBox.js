const LocationInfoBox = ({ info }) => {
    const sourceID = info.sources[0].id;
    const sourceURL = info.sources[0].url;

    return (
        <div className='location-info'>
            <h2 className='location-title'>{info.title}</h2>
            <ul className='location-sources'>
                <li className='sources-header'>Sources</li>
                <li className='src-id'>{sourceID}</li>
                <li className='src-url'>{sourceURL}</li>
                <li className='src-id'>Event Id: {info.id}</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox

