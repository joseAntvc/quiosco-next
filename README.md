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

Agrego la barra con imagenes de las categorias que se encuentran en la base de datos, ademas de crear la funcionalidad para poder extraer la informacion.

------------------------------------ 29 de mayo del 2024 ------------------------------------
Routing dinamico, se agrega a las categorias para que a travez de esto nos pueda mostrar los productos, esto se hace creando una carpeta con [] para poder servir para diferentes categorias

------------------------------------ 30 de mayo del 2024 ------------------------------------
Creacion del componente ProductCard con el cual se generan las cartas para poder ver los productos en la pagina con un mismo formato y de una manra adecuada.
Instalacion de Zustand, que lo hice con el siguiente comando 'npm i zustand', esto sirve para poder manejar estados globales y poder solucionar lo del pedido. 

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

