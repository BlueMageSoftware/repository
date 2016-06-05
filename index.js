module.exports = function repository(db) {
  return {
    save: (collection, data, response) => {
      db.collection(collection).insertOne(data, (err, result) => {
        if (err) {
          return response(err);
        }
        return response(err, result.insertedId);
      });
    },
    update: (collection, query, update, response, opts = {}) => {
      db.collection(collection).update(query, { $set: update }, opts, (err, result) => {
        if (err) {
          return response(err);
        }
        return response(err, {
          found: !!result.nMatched,
          created: !!result.nUpserted,
          updated: !!result.nModified
        });
      });
    },
    find: (collection, query, response, projection = {}) => {
      db.collection(collection).find(query, projection, response);
    },
    findOne: (collection, query, response, projection = {}) => {
      db.collection(collection).findOne(query, projection, response);
    }
  };
};
