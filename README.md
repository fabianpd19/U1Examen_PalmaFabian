# API RESTful Serverless con AWS Lambda y DynamoDB

**Nombre del estudiante:** Fabián Alexander Palma Dueñas  
**Fecha de entrega:** 30 de mayo de 2025

---

## Introducción

Este proyecto consiste en la creación de una API RESTful utilizando una arquitectura serverless. La API permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre la gestión de carros en una tabla DynamoDB mediante funciones Lambda, expuestas a través de API Gateway.

Se busca realizar un proyecto de tecnologías sin servidor (serverless) para construir aplicaciones modernas, escalables y eficientes, eliminando la necesidad de gestionar infraestructura. Estas tecnologías son clave en el desarrollo de aplicaciones distribuidas, por su capacidad de escalar automáticamente y optimizar recursos según la demanda.

---

## Requisitos del Proyecto

### Funcionalidades requeridas

- Crear un nuevo ítem en la base de datos.
- Obtener todos los ítems registrados.
- Obtener un ítem específico por su ID.
- Actualizar un ítem existente.
- Eliminar un ítem por su ID.

### Herramientas y tecnologías utilizadas

- **AWS Lambda**: Ejecuta funciones en la nube sin necesidad de servidores.
- **Amazon DynamoDB**: Base de datos NoSQL altamente escalable.
- **Amazon API Gateway**: Expone los endpoints HTTP para las funciones Lambda.
- **Serverless Framework**: Herramienta para definir y desplegar la infraestructura de forma declarativa.

---

## Implementación del Proyecto

### Estructura del proyecto

    |-- src
        |-- agregarCarro.js
        |-- editarCarro.js
        |-- eliminarCarro.js
        |-- mostrarCarro.js
        |-- mostrarCarros.js
    |-- .gitignore
    |-- handler.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- serverless.yml

### Descripción de las operaciones CRUD

- **GET /items**: Retorna todos los registros en la tabla.
- **GET /items/{id}**: Retorna el ítem correspondiente al ID.
- **POST /items**: Crea un nuevo ítem con los datos recibidos en el body.
- **PUT /items/{id}**: Actualiza el ítem con el ID especificado.
- **DELETE /items/{id}**: Elimina el ítem de la base de datos.

### Capturas de pantalla

> **Figura 1**: Respuesta exitosa al crear un carro.
> ![POST /carro](https://imgur.com/CmRhblg.png) > ![POST /carro](https://i.imgur.com/dBpLcsG.png)

> **Figura 2**: Consulta de todos los carros registrados.  
> ![GET /carro](https://i.imgur.com/3RMUNF0.png)

> **Figura 3**: Consulta un carro registrado.  
> ![GET /carro](//https://i.imgur.com/AW96umo.png)

> **Figura 4**: Eliminación de un carro.  
> ![DELETE /carro/{id}](https://i.imgur.com/QXGVRsr.png) > ![DELETE /carro/{id}](https://i.imgur.com/vMEQr1X.png)

> **Figura 5**: Editar un carro.  
> ![DELETE /carro/{id}](https://i.imgur.com/kPOyVEP.png) > ![DELETE /carro/{id}](https://i.imgur.com/cl83C1C.png)

---

## Instrucciones de Ejecución

### Requisitos previos

- Cuenta activa en AWS.
- Node.js (v18 o superior).
- Serverless Framework instalado globalmente:
  ```bash
  npm install -g serverless
  ```

## Pasos para ejecutar y desplegar

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/fabianpd19/U1Examen_PalmaFabian.git
   cd serverless-api
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar las credenciales de AWS:
   ```bash
   aws configure
   ```
4. Desplegar el Proyecto:
   ```bash
   sls deploy
   ```

## Conclusiones

Durante el desarrollo de este proyecto se consolidaron los conocimientos adquiridos sobre arquitectura serverless. Se logró crear una API RESTful funcional utilizando AWS Lambda, API Gateway y DynamoDB.

Se enfrentaron retos relacionados con la configuración de permisos en el archivo serverless.yml, así como el manejo correcto de respuestas HTTP. Estos desafíos se superaron mediante la consulta de documentación oficial y pruebas iterativas.

Esta experiencia demuestra la potencia y simplicidad del enfoque serverless para construir aplicaciones modernas, eficientes y escalables.
