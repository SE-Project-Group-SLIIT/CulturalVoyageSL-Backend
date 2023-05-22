// Import the necessary modules and functions
const request = require('supertest');
const { app } = require('../server'); 
// Assuming your app is defined in a separate file

// Test the addEventController
describe('POST /addEvent', () => {
  it('should add an event and return success message', async () => {
    const response = await request(app)
      .post('/addEvent')
      .send({
        eventName: 'Test Event',
        eventDescription: 'This is a test event',
        eventType: 'Test Type',
        dateFrom: '2023-05-20',
        dateTo: '2023-05-21',
        Time: '10:00 AM',
        Location: 'Test Location',
        Performer: 'Test Performer',
        contactPerson: 'Test Person',
        Contact: 1234567890,
        imageOne: 'image1.jpg',
        imageTwo: 'image2.jpg',
        imageThree: 'image3.jpg',
        Agenda: 'Test Agenda'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Event added successfully');
  });
});

// Test the viewEventController
describe('GET /view', () => {
  it('should retrieve all events', async () => {
    const response = await request(app)
      .get('/view');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Events retrieved successfully');
    expect(response.body.data).toBeDefined();
  });
});

// Test the updateEventController
describe('PUT /updateEvent', () => {
  it('should update an event and return success message', async () => {
    const response = await request(app)
      .put('/updateEvent')
      .send({
        _id: 'event_id', // Provide an existing event ID to update
        eventName: 'Updated Event',
        eventDescription: 'This is an updated event',
        // Update other fields as needed
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Event updated');
  });
});

// Test the deleteEventController
describe('DELETE /deleteEvent', () => {
  it('should delete an event and return success message', async () => {
    const response = await request(app)
      .delete('/deleteEvent')
      .send({
        _id: 'event_id', // Provide an existing event ID to delete
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Event Deleted Successfully');
  });
});

// Test the searchEventController
describe('GET /filterEvents', () => {
  it('should filter events by event type and return the filtered events', async () => {
    const response = await request(app)
      .get('/filterEvents')
      .query({ eventType: 'Test Type' });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Events found');
    expect(response.body.data).toBeDefined();
  });
});

// Test the searchEventByNameController
describe('GET /searchEvents', () => {
  it('should search events by event name and return the matching events', async () => {
    const response = await request(app)
      .get('/searchEvents')
      .query({ eventName: 'Test Event' });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Events found');
    expect(response.body.data).toBeDefined();
  });
});
