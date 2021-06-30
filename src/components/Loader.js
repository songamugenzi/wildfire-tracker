import { Icon } from '@iconify/react'
import loadingIcon from '@iconify/icons-mdi/location-star'

const Loader = () => {
    return (
        <div className='loader'>
            <Icon icon={loadingIcon} className='loader-icon' />
            <h1>Retrieving latest data <br /> <span className='source'>source: EONET nasa.gov</span></h1>
        </div>
    )
}

export default Loader
