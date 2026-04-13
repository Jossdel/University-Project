# 🚀 Proyecto - Instalación y Ejecución

## 📋 Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

* Node.js
* npm

---

## 📥 1. Clonar el proyecto

```bash
git clone https://github.com/Jossdel/University-Project.git
cd University-Project
```

---

## 📦 2. Instalar dependencias

```bash
npm install
```

---

## ⚙️ 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL="postgresql://neondb_owner:npg_VI3s1XRfbGpe@ep-ancient-field-and4tznx-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
JWT_SECRET="3e29j9-0f0nf30n-4e9a-4c8b-9f1d-2b5c6a7d8e9f"
PORT=3000
```

---

## 🗄️ 4. Ejecutar migraciones con Prisma

```bash
npx prisma migrate dev
```

---

## ⚡ 5. Generar cliente Prisma

```bash
npx prisma generate
```

---

## ▶️ 6. Ejecutar el proyecto

Ejecutar tanto el frontend como el backend:

```bash
npm run dev
```

---

## 🛠️ 🔧 Solución de problemas

Si encuentras errores:

* ✔ Verifica que el archivo `.env` esté correctamente configurado
* ✔ Asegúrate de que la base de datos en Neon esté activa
* ✔ Revisa la base de datos con:

```bash
npx prisma studio
```

---

## 📌 Notas adicionales

* Asegúrate de ejecutar el backend antes que el frontend
* Verifica que el puerto `3000` esté disponible
* Si cambias el `.env`, reinicia el servidor

---

💻 Proyecto listo para desarrollo 🚀
