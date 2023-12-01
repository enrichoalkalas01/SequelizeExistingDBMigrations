
        'use strict'

        module.exports = {
            up: async (queryInterface, Sequelize) => {
                await queryInterface.createTable('Master_Publisher_Mains', {
  "id": {
    "type": "integer",
    "allowNull": false
  },
  "NO": {
    "type": "integer",
    "allowNull": true
  },
  "PUBLISHER": {
    "type": "character varying",
    "allowNull": true
  },
  "CONTROL": {
    "type": "character varying",
    "allowNull": true
  },
  "CAE_NUMBER": {
    "type": "character varying",
    "allowNull": true
  },
  "TYPE": {
    "type": "character varying",
    "allowNull": true
  },
  "MUMA": {
    "type": "character varying",
    "allowNull": true
  },
  "createdAt": {
    "type": "timestamp with time zone",
    "allowNull": false
  },
  "updatedAt": {
    "type": "timestamp with time zone",
    "allowNull": false
  },
  "CODE": {
    "type": "character varying",
    "allowNull": true
  }
})
            },
            down: async (queryInterface, Sequelize) => {
                await queryInterface.dropTable('Master_Publisher_Mains')
            },
        }
    