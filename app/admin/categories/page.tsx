import { redirect } from 'next/navigation'
import CategoryTable from "@/components/categories/CategoryTable";
import CategoryPagination from "@/components/categories/CategoryPagination";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import CategorySearchForm from '@/components/categories/CategorySearchForm';

async function categoriesCount(){
    return await prisma.category.count()
}

async function getCategories(page: number, pageSize: number){
    const skip = (page -1) * pageSize
    const categories = await prisma.category.findMany({
        take: pageSize,
        skip
    })
    return categories
}

export type Categories = Awaited<ReturnType<typeof getCategories>>

export default async function CategoryPage({searchParams}: {searchParams: {page: string}}) {

    const page = +searchParams.page || 1
    const pageSize = 10
    
    if(page < 0) redirect(`/admin/categories`)

    const categoriesData = getCategories(page, pageSize)
    const totalCategoriesData = categoriesCount()
    const [categories, totalCategories] = await Promise.all([categoriesData, totalCategoriesData])
    const totalPages = Math.ceil(totalCategories / pageSize)

    if(page > totalPages) redirect(`/admin/categories`)

    return (
        <>
            <Heading>Administrar Categorias</Heading>

            <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
                <Link
                    href={'/admin/categories/new'}
                    className='bg-amber-400 w-full lg:w-auto text-xl px-10 
                    py-3 text-center font-bold cursor-pointer'
                >Crear Categoria</Link>
                
                <CategorySearchForm />
            </div>

            <CategoryTable
                categories={categories}
            />
            <CategoryPagination
                page={page}
                totalPages = {totalPages}
            />
        </>
    )
}