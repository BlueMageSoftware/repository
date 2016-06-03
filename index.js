module.exports = function repository(db) {
  return {
    save: (collection, data, response) => {
      db[collection].insertOne(data, response);
    },
    update: (collection, query, update, opts = {}, response) => {
      db[collection].update(query, update, opts, response);
    },
    find: (collection, query, projection = {}, response) => {
      db[collection].find(query, projection, response);
    },
    findOne: (collection, query, projection = {}, response) => {
      db[collection].findOne(query, projection, response);
    }
  };
};
