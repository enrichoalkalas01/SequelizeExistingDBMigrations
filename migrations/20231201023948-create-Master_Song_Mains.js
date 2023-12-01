
        'use strict'

  module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Master_Song_Mains', 'test', {
          type: Sequelize.STRING,
          allowNull: true,
        })
          await queryInterface.createTable('Master_Song_Mains', {
            "id": {
              "type": "integer",
              "allowNull": false
            },
            "CODE": {
              "type": "integer",
              "allowNull": true
            },
            "CONTROL": {
              "type": "character varying",
              "allowNull": true
            },
            "ISWC": {
              "type": "character varying",
              "allowNull": true
            },
            "MME_ID": {
              "type": "character varying",
              "allowNull": true
            },
            "ORIGINAL_ARTIST": {
              "type": "text",
              "allowNull": true
            },
            "SONG_TITLE": {
              "type": "text",
              "allowNull": true
            },
            "COMPOSER": {
              "type": "text",
              "allowNull": true
            },
            "MASSIVE_CONTROL": {
              "type": "double precision",
              "allowNull": true
            },
            "ALBUM_OR_SINGLE": {
              "type": "character varying",
              "allowNull": true
            },
            "TYPE": {
              "type": "character varying",
              "allowNull": true
            },
            "LANGUAGE": {
              "type": "character varying",
              "allowNull": true
            },
            "VOC_OR_INS": {
              "type": "character varying",
              "allowNull": true
            },
            "DURATION": {
              "type": "character varying",
              "allowNull": true
            },
            "WORK_TYPE": {
              "type": "character varying",
              "allowNull": true
            },
            "RELEASE_DATE": {
              "type": "character varying",
              "allowNull": true
            },
            "RECORD_LABELS": {
              "type": "character varying",
              "allowNull": true
            },
            "CWR": {
              "type": "character varying",
              "allowNull": true
            },
            "SUBMITTED_DATE": {
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
            "test": {
              type: "character varying",
              "allowNull": false,
            },
            "test": {
              type: "character varying",
              "allowNull": false,
            }
        })
      },
      down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('Master_Song_Mains')
      },
  }
    