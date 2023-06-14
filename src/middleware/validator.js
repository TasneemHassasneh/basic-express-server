'use strict';

// validator.js
module.exports = (req, res, next) => {
    const name = req.query.name;
  
    if (name) {
      next();
    } else {
      const error = new Error('Name property is missing in the query string');
      next(error);
    }
  };
  
  