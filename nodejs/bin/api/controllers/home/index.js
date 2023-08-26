module.exports = {


  friendlyName: 'Index',


  description: 'Index home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exits) {

    // All done.
    var allDogs = await Dog.find();

    exits.success({dogs: allDogs});

  }


};
