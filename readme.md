# Endpoints

## Brands

### Obtener todas las marcas

- **Endpoint**: `GET http://localhost:3000/api/v1/brands`
- **Descripción**: Obtiene una lista de todas las marcas.

### Crear una nueva marca

- **Endpoint**: `POST http://localhost:3000/api/v1/brands`
- **Descripción**: Crea una nueva marca.

### Actualizar una marca

- **Endpoint**: `PUT http://localhost:3000/api/v1/brands/:id`
- **Descripción**: Actualiza una marca existente por su ID.

### Eliminar una marca

- **Endpoint**: `DELETE http://localhost:3000/api/v1/brands/:id`
- **Descripción**: Elimina una marca por su ID.

---

## Products

### Obtener todos los productos

- **Endpoint**: `GET http://localhost:3000/api/v1/products`
- **Descripción**: Obtiene una lista de todos los productos.

### Crear un nuevo producto

- **Endpoint**: `POST http://localhost:3000/api/v1/products`
- **Descripción**: Crea un nuevo producto.

### Actualizar un producto

- **Endpoint**: `PUT http://localhost:3000/api/v1/products/:id`
- **Descripción**: Actualiza un producto existente por su ID.

### Eliminar un producto

- **Endpoint**: `DELETE http://localhost:3000/api/v1/products/:id`
- **Descripción**: Elimina un producto por su ID.

---

## Users

### Obtener todos los usuarios

- **Endpoint**: `GET http://localhost:3000/api/v1/users`
- **Descripción**: Obtiene una lista de todos los usuarios.

### Registrar un nuevo usuario

- **Endpoint**: `POST http://localhost:3000/api/v1/users/register`
- **Descripción**: Registra un nuevo usuario.

### Iniciar sesión

- **Endpoint**: `POST http://localhost:3000/api/v1/users/login`
- **Descripción**: Inicia sesión y obtiene un token de autenticación.

### Actualizar el rol de un usuario

- **Endpoint**: `PUT http://localhost:3000/api/v1/users/update/:userId`
- **Descripción**: Actualiza el rol de un usuario por su ID.

### Eliminar un usuario

- **Endpoint**: `DELETE http://localhost:3000/api/v1/users/delete/:userId`
- **Descripción**: Elimina un usuario por su ID. Los administradores pueden eliminar a cualquier usuario, pero los usuarios solo pueden eliminar su propia cuenta.
