import { Icon } from '@iconify/react'
import satelliteIcon from '@iconify/icons-mdi/space-station'

const Header = () => {
    return (
        <header className='header'>
            <h1>Wildfire Tracker</h1>
            <span className='header-sub'>Powered by NASA <Icon icon={satelliteIcon} className='satellite-icon' /></span>
        </header >
    )
}

export default Header
