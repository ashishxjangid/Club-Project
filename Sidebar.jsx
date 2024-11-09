import "./Sidebar.css";
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="Sidebar">
            <h2>ClubCon</h2>
            <div className="buttons">
                
                <Button onClick={() => navigate('/')}
                variant="text" startIcon={<DashboardCustomizeIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Dashboard
                </Button>
                <Button onClick={() => navigate('/Calendar')}
                variant="text" startIcon={<CalendarMonthIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Calendar
                </Button>
                <Button onClick={() => navigate('/Teamcard')}
                variant="text" startIcon={<GroupsIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                My team
                </Button>
                <Button onClick={() => navigate('/Statistics')}
                variant="text" startIcon={<BarChartIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Statistics
                </Button>
                <Button
                variant="text" startIcon={<AssignmentIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Deca
                </Button>
    
            </div>
            <h3>TEAMS</h3>
            <div className="Teams">
            <Button
                variant="text" size="small"
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Content
                </Button>
                <Button
                variant="text" size="small"
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Graphics
                </Button>
                <Button
                variant="text" size="small"
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Management
                </Button>
                <Button
                variant="text" size="small"
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Marketing
                </Button>

            </div>
            <div className="setting">
                <Button 
                variant="text" size="small" startIcon={<SettingsIcon />}
                sx={{
                    backgroundColor: '#f0f0f0', 
                    color: 'black',// custom color
                    '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white' // hover color
                    },
                }}
                >
                Settings
                </Button>
            </div>
            
        </div>
    );
}