## 27 de mayo del 2024 

Incio del proyecto, donde algo importante es que el proyecto se creo con el comando 'npx create-next-app@latest'.
Ademas de que se manejaron la eliminacion de archivos y acomo de los documentos.

## 28 de mayo del 2024 

Instale prisma con el comando 
    -'npm i @prisma/client'
    -'npm i -D prisma'
 
Creacion de la base de datos con prisma y el manejo de los archivos ts para las insercciones en las tablas que se crean mediante schema.prisma

Instalar las dependencias de ts-node, con los siguientes comandos, de lo contraro no nos funciona para poder ejecutar el seed.ts y poder hacer las insercciones en la base de datos
    - 'npm i -D ts-node'

Para poder correr seed.ts tuve hacer cambios en el json y ademas ejecutar el siguiente comando:
    - 'npx prisma db seed'

### US1
Agrego la barra con imagenes de las categorias que se encuentran en la base de datos, ademas de crear la funcionalidad para poder extraer la informacion.

## 29 de mayo del 2024 

Routing dinamico, se agrega a las categorias para que a travez de esto nos pueda mostrar los productos, esto se hace creando una carpeta con [] para poder servir para diferentes categorias

## 30 de mayo del 2024 

### US2
Creacion del componente ProductCard con el cual se generan las cartas para poder ver los productos en la pagina con un mismo formato y de una manra adecuada.

### US3 
Instalacion de Zustand, que lo hice con el siguiente comando 'npm i zustand', esto sirve para poder manejar estados globales y poder solucionar lo del pedido. 
Ya que debemos manejar en el orderSummary para el pedido al momento de manejar el boton de agregar
Para formato de la cantida del pedido, descargue los iconos de react mediante el siguiente comando
    - 'npm i @heroi
cons/react'

### US4 
Se agrego en OrderSummary una funcion para poder estar sumando todas las ordenes solicitadas y mostrarlas en pantalla

## 31 de mayo del 2024 

### US5 
Validacion entre el cliente y el usuario, esto nos servira para la siguiente historia de usuario, instalando zod con el siguiente comando
    - 'npm i zod'
    - 'npm i react-to
astify'
esto va de la mano con la historia de usuario 5, ya que como lo que se hace es mardar la orden, ahora solo falta maquetar la informacion para mostrarlo a la area de cocina

## 1 de Junio del 2024 

Para poder mostrar la notificacion, ocupe de la creacion de mas componentes para poder mostrar la informacion, pero lo importante fue acceder a base de datos para poder recuperar la informacion y mostrarla, los cuales estan en:
    - page.tsx que esta en admin/orders
    - Los componentes de order, orderCard

### US10 
Para poder validar que un pedido ya esta completo, lo uncio que debi agregar fue una accion al boton que ya se podia ver, el cual lo que hace es actulizar el pedido en la base de datos, poniendo el status como true y colocar la fecha en la que se completo dentro de la base de datos, esto se realizo en el archivo 'complete-order-action'

## 2 de Junio del 2024 

### US8 
Agregue las funciones para poder ennlistar los productos, ademas de una barra de navegacion para que no se muestre una lista extensa, esto se logra con simples aperaciones de obtencion de datos y con ellos realizar divisiones, sumas y restas. Esto nos ayudara para poder cumplir con la historia de usuario 8, ademas de que es unna parte para la historia numero 7
Para poder hacer que el buscador funcione, nos redirigimos a una nueva ventana en donde como parametro pasamos la palabra que esta en el buscador y se maneja la mayor parte en page de app/admin/products/search, ya que se ocupa una funccion de prisma de contains

### US7 
Para poder aplicar la administracion de los productos para poder mantenerlos actualizados, esto requirio implementar un formaulario para poder agregar nuevos productos, en el cual como los anteriores basta con hacer una conexion a la base de datos, para poder ingresar los nuevos datos a la base
Las dos funciones que van relacionados a esta historia de usuario son el crear y actualizar nuevos productos.

### US9 
El manejo de las imagenes para los productos, se manejara cloudinary, en el cual se podran almacenar las imagenes cargadas, ademas de que se ocupan descargar dependencias en el proyecto con el siguiente comando
    - 'npm i next-cloudinary'
    - 'npm i react-icons'

Se debe de manejar la ruta de las imagenes, ya que si es cloudinary es otra ruta a comparacion de un archivo local, esta logica se maneja en utils, en el index.ts

### US6
Mostar las ordenes listas, se agrega otro recurso en donde se manjejara todo, el cual es la carpeta orders que esta en admin, donde se hace uso de swr que funciona para poder hacer las recargas automaticas en la pagina, lo descargue con el siguiente comando
    - 'npm i swr'



