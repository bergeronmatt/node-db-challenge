
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Fork and Clone', notes: 'Fork and clone your own repo of the project', project_id: 1},
      ]);
    });
};
