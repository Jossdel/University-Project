# Proyecto - Instalación y Ejecución

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

- Docker
- Node.js
- npm

---

## 1. Clonar el proyecto

```bash
git clone URL_DEL_PROYECTO
cd nombre-del-proyecto
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Levantar contenedores Docker

```bash
docker compose up -d
```

---

## 4. Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
```

---

## 5. Ejecutar migraciones Prisma

```bash
npx prisma migrate dev
```

---

## 6. Generar cliente Prisma

```bash
npx prisma generate
```

---

## 7. Ejecutar proyecto

```bash
npm run dev
```

---

## Verificar contenedores activos

```bash
docker ps
```

---

## Si hay problemas

- Verificar que Docker esté encendido.
- Verificar que el puerto de la base de datos no esté ocupado.
- Revisar que `.env` tenga la URL correcta.

---
