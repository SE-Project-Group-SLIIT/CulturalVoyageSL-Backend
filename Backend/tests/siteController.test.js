// Import the necessary modules and functions
const request = require('supertest');
const { app } = require('../server'); 
// Assuming your app is defined in a separate file

// Test the addSiteController
describe('POST /addSite', () => {
  it('should add a site and return success message', async () => {
    const response = await request(app)
      .post('/addSite')
      .send({
        SiteName: 'Test Site',
        SiteCategory: 'This is a test site category',
        Description: 'Test description',
        Value: 'Test value',
        VisitingHours: '09.00 AM',
        TicketingDetails: 'Test details',
        DressCode: 'Test dress code',
        Behaviour: 'Test behaviour',
        SiteImage1: 'image1.jpg',
        SiteImage2: 'image2.jpg',
        SiteImage3: 'image3.jpg',
        SiteImage4: 'image4.jpg',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Site added successfully');
  });
});

// Test the viewAllSitesController
describe('GET /allSites', () => {
  it('should retrieve all sites', async () => {
    const response = await request(app)
      .get('/allSites');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Sites retrieved successfully');
    expect(response.body.data).toBeDefined();
  });
});

// Test the updateSiteController
describe('POST /updateSite', () => {
  it('should update site and return success message', async () => {
    const response = await request(app)
      .put('/updateSite')
      .send({
        _id: 'site_id', // Provide an existing event ID to update
        SiteName: 'Updated Site',
        SiteCategory: 'This is an updated site',
        // Update other fields as needed
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Site updated');
  });
});

// Test the deleteSiteController
describe('DELETE /deleteSite', () => {
  it('should delete a site and return success message', async () => {
    const response = await request(app)
      .delete('/deleteSite')
      .send({
        _id: 'site_id', // Provide an existing event ID to delete
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Site Deleted Successfully');
  });
});

// Test the searchEventController
// describe('GET /filterEvents', () => {
//   it('should filter events by event type and return the filtered events', async () => {
//     const response = await request(app)
//       .get('/filterEvents')
//       .query({ eventType: 'Test Type' });

//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe('Events found');
//     expect(response.body.data).toBeDefined();
//   });
// });

// Test the searchEventByNameController
// describe('GET /searchEvents', () => {
//   it('should search events by event name and return the matching events', async () => {
//     const response = await request(app)
//       .get('/searchEvents')
//       .query({ eventName: 'Test Event' });

//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe('Events found');
//     expect(response.body.data).toBeDefined();
//   });
// });
