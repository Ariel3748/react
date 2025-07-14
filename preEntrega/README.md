
# 🛒 E-commerce React App

Este es un proyecto de e-commerce ficticio desarrollado con **React**, como parte de una entrega final. La aplicación permite navegar un catálogo de productos, gestionarlos con un CRUD completo, y realizar compras mediante un carrito funcional, todo con una interfaz moderna, responsiva y atractiva.

---

## 🚀 Funcionalidades Principales

### 🛍️ Carrito de Compras
- Gestión global del carrito con `Context API`.
- Agregar, eliminar o vaciar productos del carrito.
- Estado persistente y compartido entre componentes.

### 🔐 Autenticación de Usuarios con Firebase
- Sistema de login implementado utilizando **Firebase Authentication**.
- Acceso restringido a rutas protegidas (como el carrito y la administración).
- Gestión del estado de autenticación con `AuthContext`.
- Persistencia de sesión del usuario.

### 🧰 CRUD de Productos con MockAPI
- Agregar productos con formulario validado (nombre obligatorio, precio mayor a 0, descripción mínima de 10 caracteres).
- Editar y eliminar productos usando MockAPI.
- Modal de confirmación para eliminar.
- Mensajes de error, carga y éxito con `React Toastify`.

### 🎨 Diseño y Responsividad
- Interfaz adaptada a dispositivos móviles, tablets y escritorio con el sistema de grillas de **Bootstrap**.
- Estilos personalizados y modulares con `styled-components`.
- Notificaciones dinámicas con **React Toastify**.

---

## 📦 Tecnologías Usadas

- React
- React Router DOM
- Context API
- Firebase Authentication
- Styled-components
- React Bootstrap
- React Toastify
- MockAPI

---

## ⚙️ Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/Ariel3748/react.git
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Iniciá la aplicación:
   ```bash
   npm start
   ```

---

## 🔎 Uso

- Al iniciar la app, podrás navegar por el catálogo de productos.
- Para acceder al carrito o a la sección de administración, debés iniciar sesión. (Las credenciales del usuario son 'admin@gmail.com' 'test123')
- En la sección de administración podés agregar, editar y eliminar productos.
- El estado del carrito y del usuario permanece entre sesiones gracias a `Context` y `Firebase`.

---

## ✅ Requisitos Cumplidos

- [x] Carrito funcional con Context API.
- [x] Autenticación con Firebase y rutas protegidas.
- [x] CRUD completo de productos con MockAPI.
- [x] Validaciones de formularios y manejo de errores.
- [x] Diseño responsivo con Bootstrap y Styled-components.
- [x] Interactividad y notificaciones con React Toastify.
- [x] Pruebas en dispositivos y revisión de experiencia de usuario.
- [x] Documentación completa en `README.md`.

---


## 📱 Compatibilidad

✔️ Desktop  
✔️ Tablets  
✔️ Dispositivos móviles  

---

## 📬 Contacto

Este proyecto fue creado con fines educativos. Si tenés dudas o sugerencias, podés escribirme o hacer un fork del proyecto para mejorarlo.

---
