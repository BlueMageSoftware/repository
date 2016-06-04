module.exports = function repository(db) {
  return {
    save: (collection, data, response) => {
      db[collection].insertOne(data, response);
    },
    update: (collection, query, update, response, opts = {}) => {
      db[collection].update(query, { $set: update }, opts, response);
    },
    find: (collection, query, response, projection = {}) => {
      db[collection].find(query, projection, response);
    },
    findOne: (collection, query, response, projection = {}) => {
      db[collection].findOne(query, projection, response);
    }
  };
};
