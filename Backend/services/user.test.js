const { createUserService } = require('./userService');
const User = require('../models/Users'); // Assuming User is the model for creating new users

// Mocking the dependencies
jest.mock('../models/Users', () => ({
  // Mocking the User model and its save method
  save: jest.fn().mockResolvedValue({ _id: '123456789', Name: 'John' }),
}));

describe('createUserService', () => {
  it('should create a new user and return success message and data', async () => {
    // Mocking the request object
    const req = {
      Name: 'John',
      Email: 'john@example.com',
      MobileNumber: '1234567890',
      Password: 'password123',
      Location: 'New York',
      Bio: 'Lorem ipsum',
    };

    // Mocking the response object
    const res = {};

    // Calling the createUserService function
    const result = await createUserService(req, res);

    // Expectations
    expect(User).toHaveBeenCalledTimes(1); // User constructor should be called once
    expect(User).toHaveBeenCalledWith({
      Name: req.Name,
      Email: req.Email,
      MobileNumber: req.MobileNumber,
      Password: req.Password,
      Location: req.Location,
      Bio: req.Bio,
    }); // User constructor should be called with the correct parameters
    expect(User().save).toHaveBeenCalledTimes(1); // save method should be called once
    expect(result).toEqual({
      msg: 'success',
      data: { _id: '123456789', Name: 'John' },
    }); // Expect the result to match the expected success message and data
  });

  it('should handle errors and throw', async () => {
    // Mocking the request object
    const req = {
      Name: 'John',
      Email: 'john@example.com',
      MobileNumber: '1234567890',
      Password: 'password123',
      Location: 'New York',
      Bio: 'Lorem ipsum',
    };

    // Mocking the response object
    const res = {};

    // Mocking an error
    const mockError = new Error('Something went wrong');

    // Mocking the save method to throw an error
    //User().save.mockRejectedValue(mockError);

    // Expect the createUserService function to throw an error
    await expect(createUserService(req, res)).rejects.toThrow(mockError);
  });
});