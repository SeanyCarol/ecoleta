import Knex from 'knex';

//Up() Serve para realizar as alterações que precisam ser feitas no banco EX: CRIAR A TABELA
export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable;
        table.string('name').notNullable;
        table.string('email').notNullable;
        table.string('whatsapp').notNullable;
        table.decimal('latitude').notNullable;
        table.decimal('longitude').notNullable;
        table.string('city').notNullable;
        table.string('uf', 2).notNullable;
    });
}
//down() Serve para voltar atrás, deletar a tabela que criada
export async function down(knex: Knex){
    return knex.schema.dropTable('point');
}