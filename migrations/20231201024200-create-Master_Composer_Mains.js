
        'use strict'

        module.exports = {
            up: async (queryInterface, Sequelize) => {
                await queryInterface.createTable('Master_Composer_Mains', {
  "id": {
    "type": "integer",
    "allowNull": false
  },
  "NO": {
    "type": "integer",
    "allowNull": true
  },
  "SOCIETY_NUM": {
    "type": "character varying",
    "allowNull": true
  },
  "IPI_BASE": {
    "type": "character varying",
    "allowNull": true
  },
  "IPI_NUMBER": {
    "type": "character varying",
    "allowNull": true
  },
  "FIRST_NAME": {
    "type": "character varying",
    "allowNull": true
  },
  "MIDDLE_NAME": {
    "type": "character varying",
    "allowNull": true
  },
  "LAST_NAME": {
    "type": "character varying",
    "allowNull": true
  },
  "REAL_NAME": {
    "type": "text",
    "allowNull": true
  },
  "START_DATE": {
    "type": "character varying",
    "allowNull": true
  },
  "END_DATE": {
    "type": "character varying",
    "allowNull": true
  },
  "EXPIRE": {
    "type": "character varying",
    "allowNull": true
  },
  "CONTRACT_NUMBER": {
    "type": "character varying",
    "allowNull": true
  },
  "CONTROLLED": {
    "type": "character varying",
    "allowNull": true
  },
  "PUBLISHER": {
    "type": "character varying",
    "allowNull": true
  },
  "CLIENT_CODE": {
    "type": "character varying",
    "allowNull": true
  },
  "CLIENT_NAME": {
    "type": "character varying",
    "allowNull": true
  },
  "CLIENT_SHARE": {
    "type": "character varying",
    "allowNull": true
  },
  "CMO_NAME": {
    "type": "character varying",
    "allowNull": true
  },
  "CMO_CODE": {
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
  "COMPOSER_ID": {
    "type": "character varying",
    "allowNull": true
  }
})
            },
            down: async (queryInterface, Sequelize) => {
                await queryInterface.dropTable('Master_Composer_Mains')
            },
        }
    