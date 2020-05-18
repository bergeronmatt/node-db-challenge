
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Node Sprint', description: 'Sprint Challenge for Node Databases and API'},
      ]);
    });
};
