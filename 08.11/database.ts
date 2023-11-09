var mariadb = require("mariadb");

const farmacia = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 5000,
    database: 'farmacia',
    waitForConnections: true,
    connectionLimit: 10
});

export default farmacia;

farmacia.execute(`
    CREATE DATABASE IF NOT EXISTS farmacia;
`)

farmacia.execute(`
    CREATE TABLE IF NOT EXISTS usuario (
        id_usuario INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR (50) NOT NULL,
        idade INT NOT NULL,
        endereco VARCHAR(50) NOT NULL
    );
`)

farmacia.execute(`
    CREATE TABLE IF NOT EXISTS medicamentos (
        id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        preco DECIMAL(10,2) NOT NULL,
        estoque INT NOT NULL
    );
`)

farmacia.execute(`
    CREATE TABLE IF NOT EXISTS sistemafarmacia(
        id_farmacia INT AUTO_INCREMENT PRIMARY KEY,
        id_Usuario INT NOT NULL AUTO_INCREMENT,
        id_medicamento INT NOT NULL AUTO_INCREMENT,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE,
        FOREIGN KEY (id_medicamento) REFERENCES medicamento(id_medicamento)
    );
`)