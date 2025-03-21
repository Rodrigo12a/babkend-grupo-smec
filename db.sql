-- Conectar a MariaDB como root
mysql -u root -p

-- Crear la base de datos
CREATE DATABASE smec;

-- Crear el usuario y asignar permisos
CREATE USER 'AdministradorSmec'@'localhost' IDENTIFIED BY 'Administrador';
GRANT ALL PRIVILEGES ON smec.* TO 'Administrador'@'localhost';
FLUSH PRIVILEGES;

-- Usar la base de datos creada
USE smec;

-- Crear la tabla 'roles'
CREATE TABLE roles (
    id_rol INT(3) NOT NULL,
    nombre_rol VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_rol)
);

-- Insertar los roles obligatorios
INSERT INTO roles (id_rol, nombre_rol) VALUES
(745, 'Administrador'),
(125, 'Usuario');

-- Crear la tabla 'usuarios'
CREATE TABLE usuarios (
    id_usuario INT(3) AUTO_INCREMENT,
    estatus_usuario TINYINT(1) NOT NULL,
    nombre_usuario VARCHAR(30) NOT NULL,
    ap_usuario VARCHAR(30) NOT NULL,
    am_usuario VARCHAR(30) NOT NULL,
    sexo_usuario TINYINT(1) NOT NULL,
    email_usuario VARCHAR(50) NOT NULL,
    password_usuario VARCHAR(64) NOT NULL,
    imagen_usuario VARCHAR(100) DEFAULT NULL,
    id_rol INT(3),
    PRIMARY KEY (id_usuario),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

-- Ejemplo de inserción de un usuario
INSERT INTO usuarios (estatus_usuario, nombre_usuario, ap_usuario, am_usuario, sexo_usuario, email_usuario, password_usuario, imagen_usuario, id_rol)
VALUES (1, 'Administrador', 'Administrador', 'Administrador', 1, 'admin@smec.com', SHA2('admin123', 256), NULL, 745),
(1, 'Usuario', 'ap_Usuario', 'am_Usuario', 0, 'operador.operador@smec.com', SHA2('operador', 256), NULL, 125);
