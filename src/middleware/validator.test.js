const httpMocks = require('node-mocks-http');
const validator = require('./validator');

describe('Validator Middleware', () => {
  it('should call the next function when the name property exists', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/person',
      query: { name: 'John' }
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should send an error when the name property is missing', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/person',
      query: {}
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(Error));
  });
});
