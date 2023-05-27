const { addPostController, viewPostController, searchPostController } = require('../controllers/postController');
const postService = require('../services/postService');

jest.mock('../services/postService');

describe('Post Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addPostController', () => {
    it('should add a post successfully', async () => {
      const req = { /* mocked request object */ };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'success' };
      postService.addPostService.mockResolvedValue(eventResponse);

      await addPostController(req, res);

      expect(postService.addPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ message: 'Post added successfully' });
    });

    it('should handle failed post addition', async () => {
      const req = {  title: 'Test new  Event where it is?',
      message: 'This is a test event',
      user: '252552525252514',
      replies: 5,
      likes: 1,
      messageStatus: true,
      keyWords: 'Vehicle',
    };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'failure' };
      postService.addPostService.mockResolvedValue(eventResponse);

      await addPostController(req, res);

      expect(postService.addPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ message: 'Failed to add Post' });
    });

    it('should handle internal server error', async () => {
      const req = { 
        title: 'Test new  Event where it is?',
        message: 'This is a test event',
        user: '252552525252514',
        replies: 5,
        likes: 1,
        messageStatus: true,
        keyWords: 'Vehicle',
      };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const error = new Error('Internal server error');
      postService.addPostService.mockRejectedValue(error);

      await addPostController(req, res);

      expect(postService.addPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ message: 'Internal server error', err: error.message });
    });
  });

  describe('viewPostController', () => {
    it('should retrieve post data successfully', async () => {
      const req = { };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'success', data: { 
      title: 'Test Post',
      message: 'This is a test post',
      user: '343433343434343',
      likes: 0,
      messageStatus: true,
      keyWords: 'test', 
    } };
      postService.viewPostService.mockResolvedValue(eventResponse);

      await viewPostController(req, res);

      expect(postService.viewPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ message: 'Post retrieved successfully', data: eventResponse.data });
    });

    it('should handle failed post data retrieval', async () => {
      const req = { };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'failure' };
      postService.viewPostService.mockResolvedValue(eventResponse);
    
      await viewPostController(req, res);
    
      expect(postService.viewPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(400); // Corrected assertion
      expect(res.send).toHaveBeenCalledWith({ message: 'Failed to retrieve Post data' });
    });
    

    it('should handle internal server error', async () => {
      const req = { };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const error = new Error('Internal server error');
      postService.viewPostService.mockRejectedValue(error);

      await viewPostController(req, res);

      expect(postService.viewPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ message: 'Internal server error', err: error.message });
    });
  });

  describe('searchPostController', () => {
    it('should search for posts successfully', async () => {
      const req = { 
        searchQuery : 'public'
      };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'success', data: { /* mocked search results */ } };
      postService.searchPostService.mockResolvedValue(eventResponse);

      await searchPostController(req, res);

      expect(postService.searchPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ message: 'Post retrieved successfully', data: eventResponse.data });
    });

    it('should handle failed post search', async () => {
      const req = { 
        searchQuery : 'public'
       };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const eventResponse = { msg: 'failure' };
      postService.searchPostService.mockResolvedValue(eventResponse);

      await searchPostController(req, res);

      expect(postService.searchPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ message: 'Failed to retrieve Post data' });
    });

    it('should handle internal server error', async () => {
      const req = { 
        searchQuery : 'public'
       };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const error = new Error('Internal server error');
      postService.searchPostService.mockRejectedValue(error);

      await searchPostController(req, res);

      expect(postService.searchPostService).toHaveBeenCalledWith(req);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ message: 'Internal server error', err: error.message });
    });
  });
});
