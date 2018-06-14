/**
 * Question.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    questionDescription: {
      type: 'string'
    },
    options1: {
      type: 'string'
    },
    options2: {
      type: 'string'
    },
    options3: {
      type: 'string'
    },
    options4: {
      type: 'string'
    }
  },
  connection:'mongodb'
};

