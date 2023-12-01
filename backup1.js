const { Sequelize } = require('sequelize')
const fs = require('fs')
const { execSync } = require('child_process')

const dbConfig = {
    dialect: 'postgresql',
    host: 'localhost',
    username: 'postgres',
    password: '1sampai10',
    database: 'masterv4-local',
    port: 5435,
}

// const sequelize = new Sequelize("postgresql://postgres:1sampai10@localhost:5435/masterv4-local")
const sequelize = new Sequelize(dbConfig)

// Fungsi untuk membuat file migrasi untuk satu tabel
async function createMigrationFile(tableName) {
    const queryInterface = sequelize.getQueryInterface()
    const attributes = await queryInterface.describeTable(tableName)
    // console.log(attributes)
    // const migrationContent = `
    //     'use strict'
    
    //     module.exports = {
    //         up: async (queryInterface, Sequelize) => {
    //             await queryInterface.createTable('${tableName}', ${JSON.stringify(attributes, null, 2)})
    //         },
    //         down: async (queryInterface, Sequelize) => {
    //             await queryInterface.dropTable('${tableName}')
    //         },
    //     }
    // `
  
    // // Simpan ke file
    // const timestamp = new Date().toISOString().replace(/\D/g, '').slice(0, -3)
    // const fileName = `${timestamp}-create-${tableName}.js`
    // fs.writeFileSync(`./migrations/${fileName}`, migrationContent, 'utf8')
  
    // console.log(`File migrasi untuk tabel ${tableName} berhasil dibuat: ${fileName}`)
}

// Fungsi untuk membuat file migrasi untuk semua tabel
async function createAllMigrationFiles() {
    const tables = await sequelize.getQueryInterface().showAllSchemas()
    // console.log(tables)
    // for (const table of tables) {
    //     await createMigrationFile(table)
    // }
  
    // console.log('Semua file migrasi berhasil dibuat.')
    // process.exit(0)
}

sequelize.authenticate().then(() => {
    console.log('Koneksi berhasil.')
    // createAllMigrationFiles()
}).catch(err => {
    console.error('Gagal terkoneksi:', err)
})

async function createMigration() {
    try {
        const tablesInfo = await sequelize.query(`
        SELECT table_name, column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_catalog = '${dbConfig.database}'
        ORDER BY table_name, ordinal_position;
        `, { type: sequelize.QueryTypes.SELECT })

        // let databases = []
        // tablesInfo[0].forEach(row => {
        //     const tableName = row.table_name
        //     if (!databases.some(table => table.name == tableName)) {
        //         databases.push({
        //             name: tableName,
        //             fields: []
        //         })
        //     }
        // })

        let tableName
        tablesInfo.map(e => {
            tableName = e.table_name
            // console.log(tableName)
            if ( e.table_name === tableName ) {
                console.log(e   )
            }
        })

        // databases.forEach(table => {
        //     const tableName = table.name

        //     const migrationCommand = `npx sequelize migration:generate --name create_${tableName}_table`
        //     execSync(migrationCommand, { stdio: 'inherit' }) 
        // })
        
    } catch (error) {
        console.log(error)
    }
}

// createMigration()

async function createMigrationFile(tableName) {
    const model = sequelize.define(tableName, {}, { tableName })
    
    const attributes = {};
    Object.keys(model.getAttributes()).forEach(key => {
        const { type, allowNull } = model.getAttributes()[key];
        attributes[key] = {
            type: type.key,
            allowNull,
        };
    });

    console.log(attributes);
    // console.log(attributes)
}

async function createAllMigrationFiles() {
    const tablesInfo = await sequelize.query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public';  -- Sesuaikan dengan skema database Anda
    `, { type: Sequelize.QueryTypes.SELECT })

    const tables = tablesInfo.map(table => table.table_name)
    
    for ( let i = 0; i < tables.length; i++ ) {
        await createMigrationFile(tables[i])
    }

    console.log('Semua file migrasi berhasil dibuat.');
    process.exit(0);
}

createAllMigrationFiles()
