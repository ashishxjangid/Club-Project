import React, { useState } from 'react';

function CreateEventForm({ onClose }) {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventType: '',
    eventDescription: '',
    attendees: '',
    organizers: '',
    eventPoster: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventPoster: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Details:', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Create Event</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter event name"
          />

          <label style={styles.label}>Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Event Location</label>
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter location"
          />

          <label style={styles.label}>Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select event type</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Networking">Networking</option>
          </select>

          <label style={styles.label}>Event Description</label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Describe the event"
          />

          <label style={styles.label}>Number of Attendees</label>
          <input
            type="number"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
            style={styles.input}
            placeholder="Expected number of attendees"
          />

          <label style={styles.label}>Organizer(s)</label>
          <input
            type="text"
            name="organizers"
            value={formData.organizers}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter organizer names"
          />

          <label style={styles.label}>Event Poster</label>
          <input
            type="file"
            name="eventPoster"
            onChange={handleFileChange}
            style={styles.input}
          />

          <div style={styles.buttonContainer}>
            <button type="button" onClick={onClose} style={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" style={styles.submitButton}>
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '35px',
    width: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    marginBottom: '15px',
    fontSize: '22px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    padding: '8px',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    marginBottom: '15px',
    resize: 'vertical',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  cancelButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CreateEventForm;
