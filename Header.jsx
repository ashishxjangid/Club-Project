import "./Header.css";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header({title}) {
    return (
        <div className="Header">
            <h2>{title}</h2>
            <div className="Icons">
            <IconButton size="large" sx={{ color: 'black' }}>
                <SearchIcon />
            </IconButton>
            <IconButton size="large" sx={{ color: 'black' }}>
                <NotificationsIcon />
            </IconButton>
            <IconButton size="large" sx={{ color: 'black' }}>
                <AccountCircleIcon />
            </IconButton>
            </div>
        </div>
    )
}