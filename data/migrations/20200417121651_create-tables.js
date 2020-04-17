
exports.up = function(knex) {
  return(
    knex.schema
        .createTable('projects', tbl => {
            tbl.increment();
            tbl.string('name', 128)
                .notNullable()
                .unique();
            tbl.string('description', 225)
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increment();
            tbl.string('name', 128)
            .notNullable()
            .unique();
            tbl.string('description', 225);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('tasks', tbl => {
            tbl.increment();
            tbl.integer('task_number')
                .unsigned()
                .notNullable()
            tbl.text('tasks')
                .notNullable()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
  )
};

exports.down = function(knex) {
  return(
      knex.shema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  )
};
