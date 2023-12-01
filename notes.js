/*

    Init Sequelize
    - npx sequelize-cli init

    Create Model & Migrations
    - npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

    Create Single Migrations
    - npx sequelize-cli migration:generate --name migration-example

    Migrate Sequelize
    - npx sequelize-cli db:migrate

    Undo Migration
    - npx sequelize-cli db:migrate:undo
    - npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
    - npx sequelize-cli db:migrate:undo --name XXXXXXXXXXXXXX-create-posts.js

    Sequelize Migration Schema Syntax
    -   await queryInterface.addColumn('Users', 'newColumn', {
            type: Sequelize.STRING,
            allowNull: true,
        })

    -   await queryInterface.removeColumn('Users', 'newColumn')
*/