------------------------------------ 27 de mayo del 2024 ------------------------------------
Incio del proyecto, donde algo importante es que el proyecto se creo con el comando 'npx create-next-app@latest'.
Ademas de que se manejaron la eliminacion de archivos y acomo de los documentos.

------------------------------------ 28 de mayo del 2024 ------------------------------------
Instale prisma con el comando 
    -'npm i @prisma/client'
    -'npm i -D prisma'
 
Creacion de la base de datos con prisma y el manejo de los archivos ts para las insercciones en las tablas que se crean mediante schema.prisma

Instalar las dependencias de ts-node, con los siguientes comandos, de lo contraro no nos funciona para poder ejecutar el seed.ts y poder hacer las insercciones en la base de datos
    - 'npm i -D ts-node'

Para poder correr seed.ts tuve hacer cambios en el json y ademas ejecutar el siguiente comando:
    - 'npx prisma db seed'

--> US1 <--
Agrego la barra con imagenes de las categorias que se encuentran en la base de datos, ademas de crear la funcionalidad para poder extraer la informacion.

------------------------------------ 29 de mayo del 2024 ------------------------------------
Routing dinamico, se agrega a las categorias para que a travez de esto nos pueda mostrar los productos, esto se hace creando una carpeta con [] para poder servir para diferentes categorias

------------------------------------ 30 de mayo del 2024 ------------------------------------
--> US2 <--
Creacion del componente ProductCard con el cual se generan las cartas para poder ver los productos en la pagina con un mismo formato y de una manra adecuada.

--> US3 <--
Instalacion de Zustand, que lo hice con el siguiente comando 'npm i zustand', esto sirve para poder manejar estados globales y poder solucionar lo del pedido. 
Ya que debemos manejar en el orderSummary para el pedido al momento de manejar el boton de agregar
Para formato de la cantida del pedido, descargue los iconos de react mediante el siguiente comando
    - 'npm i @heroi
cons/react'

--> US4 <--
Se agrego en OrderSummary una funcion para poder estar sumando todas las ordenes solicitadas y mostrarlas en pantalla

------------------------------------ 31 de mayo del 2024 ------------------------------------
--> US5 <--
Validacion entre el cliente y el usuario, esto nos servira para la siguiente historia de usuario, instalando zod con el siguiente comando
    - 'npm i zod'
    - 'npm i react-to
astify'
esto va de la mano con la historia de usuario 5, ya que como lo que se hace es mardar la orden, ahora solo falta maquetar la informacion para mostrarlo a la area de cocina

------------------------------------ 1 de Junio del 2024 ------------------------------------
Para poder mostrar la notificacion, ocupe de la creacion de mas componentes para poder mostrar la informacion, pero lo importante fue acceder a base de datos para poder recuperar la informacion y mostrarla, los cuales estan en:
    - page.tsx que esta en admin/orders
    - Los componentes de order, orderCard

--> US10 <--
Para poder validar que un pedido ya esta completo, lo uncio que debi agregar fue una accion al boton que ya se podia ver, el cual lo que hace es actulizar el pedido en la base de datos, poniendo el status como true y colocar la fecha en la que se completo dentro de la base de datos, esto se realizo en el archivo 'complete-order-action'


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

