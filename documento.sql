
-- PRÁCTICA DE TRANSACCIONES
-- PostgreSQL - TablePlus

-- CREACIÓN DE TABLAS
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE cuenta (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    monto NUMERIC CHECK (monto >= 0)
);

-- INSERCIÓN DE DATOS
INSERT INTO usuarios (nombre, apellido, email)
VALUES 
('Juan', 'Perez', 'juan@email.com'),
('Maria', 'Gomez', 'maria@email.com');

INSERT INTO cuenta (usuario_id, monto)
VALUES 
(1, 1000),
(2, 500);

-- TRANSACCIÓN BÁSICA
BEGIN;
UPDATE cuenta SET monto = monto - 200 WHERE usuario_id = 1;
UPDATE cuenta SET monto = monto + 200 WHERE usuario_id = 2;
COMMIT;

-- CONCURRENCIA (SESIONES DIFERENTES)
BEGIN;
UPDATE cuenta SET monto = monto - 300 WHERE usuario_id = 1;
-- COMMIT MANUAL DESDE OTRA SESIÓN

-- ROLLBACK POR ERROR
BEGIN;
UPDATE cuenta SET monto = monto - 5000 WHERE usuario_id = 1;
ROLLBACK;
