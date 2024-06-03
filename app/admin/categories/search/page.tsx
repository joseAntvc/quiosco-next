import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import CategorySearchForm from "@/components/categories/CategorySearchForm";
import CategoryTable from "@/components/categories/CategoryTable";
import Link from "next/link";

async function searchCategories(searchTerm: string){
    const categories = await prisma.category.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }
    })
    return categories
}

export default async function SearchPage({searchParams} : {searchParams: {search: string}}){
    
    const categories = await searchCategories(searchParams.search)
    
    return (
        <>
            <Heading>Resultados de búsqueda</Heading>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
                <Link
                    href={'/admin/categories'}
                    className='bg-amber-400 w-full lg:w-auto text-xl px-10 
                    py-3 text-center font-bold cursor-pointer'
                >Lista Completa</Link>

                <CategorySearchForm />
            </div>

            {categories.length ? (
                <CategoryTable 
                    categories={categories}
                />
            ) : <p className="text-center text-lg">No hay resultados</p>}
        </>
    )
}