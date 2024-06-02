import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductsTable from "@/components/products/ProductsTable"
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";

async function searchProducts(searchTerm: string){
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams} : {searchParams: {search: string}}){
    
    const products = await searchProducts(searchParams.search)
    
    return (
        <>
            <Heading>Resultados de búsqueda</Heading>
            <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
                <ProductSearchForm />
            </div>

            {products.length ? (
                <ProductsTable 
                    products={products}
                />
            ) : <p className="text-center text-lg">No hay resultados</p>}
        </>
    )
}