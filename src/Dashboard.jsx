import "./Dashboard.css";
import React from 'react';
import Button from '@mui/material/Button';
import photo2 from './assets/photo2.png';
import photo5 from './assets/photo5.png';


export default function Dashboard({ onCreateEvent }) {
    return (
        <div className="Dashboard">
            <div className="div1">
                <img src={photo2} alt="photo2" style={{ width: '800px', height: '235px' }}/>
            </div>
            <div className="row">
            <div className="div2">
                <img src={photo5} alt="photo5" style={{ width: '500px', height: '175px' }}/>
            </div>
            <button style={{
              color: '#575757',
              width: '200px',
              height: '130px',
              marginLeft: '50px',
              marginTop: '30px',
              border: '1px dashed #575757',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#b2b2b0'
            }}>+Add a Task</button>
            </div>           
            <h3 className="events">Last Events</h3>
            <div className="last-events">
                <div className="event">
                    <div style={{ fontSize: '18px', marginBottom: '10px'}}>Event 1 Name</div>
                    <div>In Progress</div>
                </div>
                <div className="event">
                    <div style={{ fontSize: '18px', marginBottom: '10px'}}>Event 2 Name</div>
                    <div>Completed</div>
                </div>
                <button onClick={onCreateEvent} className="create-event">+Create Event</button>
            </div>
                    
        </div>
    )
}