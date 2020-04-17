
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Lambda Training Kit', description: 'Use old TKs to help you if youre blocked', project_id: 1},
      ]);
    });
};
