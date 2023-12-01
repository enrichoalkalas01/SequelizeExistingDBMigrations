const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'masterv4-local',
    password: '1sampai10',
    port: 5435, // Sesuaikan dengan port PostgreSQL Anda
})

async function getTableColumns(tableName) {
    const client = await pool.connect()
  
    try {
        const result = await client.query(`
            SELECT column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_name = $1
        `, [tableName])
    
        return result.rows
    } finally {
        client.release()
    }
}

async function createMigrationFile(tableName, columns) {
    const attributes = {}
    columns.forEach(column => {
        attributes[column.column_name] = {
            type: column.data_type,
            allowNull: column.is_nullable === 'YES',
        }
    })

    const migrationContent = `
        'use strict'

        module.exports = {
            up: async (queryInterface, Sequelize) => {
                await queryInterface.createTable('${tableName}', ${JSON.stringify(attributes, null, 2)})
            },
            down: async (queryInterface, Sequelize) => {
                await queryInterface.dropTable('${tableName}')
            },
        }
    `

    // Save to file
    const timestamp = new Date().toISOString().replace(/\D/g, '').slice(0, -3)
    const fileName = `${timestamp}-create-${tableName}.js`
    
    // Check if the migration file already exists
    try {
        const migrationsFolder = './migrations'
        const files = await new Promise((resolve, reject) => {
            fs.readdir(migrationsFolder, (err, files) => {
                if (err) reject(err); else resolve(files);
            })
        })
        
        const targetString = tableName
        const matchingFiles = files.filter(file => file.includes(targetString))
        
        if (matchingFiles.length > 0) {
            console.log(`Files containing "${targetString}":`);
            matchingFiles.forEach(file => console.log(file));
        } else {
            console.log(`No files containing "${targetString}" found.`);
            throw new Error(`No files containing "${targetString}" found.`)
        }

        // console.log(`Migration file for table ${tableName} already exists: ${fileName}`)
    } catch (err) {
        console.log(err)
        // File doesn't exist, create it
        fs.writeFileSync(`./migrations/${fileName}`, migrationContent, 'utf8')
        console.log(`Migration file for table ${tableName} created successfully: ${fileName}`)
    }
}

async function createAllMigrationFiles() {
    const tables = ['Master_Composer_Mains'] // Ganti dengan nama tabel Anda
    const processedTables = new Set()

    for (const table of tables) {
        if (!processedTables.has(table)) {
            const columns = await getTableColumns(table)
            await createMigrationFile(table, columns)
            processedTables.add(table)
            // console.log(columns, processedTables)
        }
    }

    // console.log('All migration files created successfully.')
    process.exit(0)
}

createAllMigrationFiles()