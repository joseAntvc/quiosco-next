"use client"

import { CategorySchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useParams } from "next/navigation"
import { updateCategory } from "@/actions/update-category-action"

export default function EditCategoryForm({children} : {children : React.ReactNode}) {
    const router = useRouter() 
    const params = useParams()
    const id = +params.id!

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            slug: formData.get('slug'),
            image: formData.get('image')
        }
        const result = CategorySchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
               toast.error(issue.message) 
            })
            return
        }

        const response = await updateCategory(result.data, id)
        if(response?.errors){
            response.errors.forEach(issue => {
               toast.error(issue.message) 
            })
            return
        }
        toast.success('Categoria Actualizada correctamente')
        router.push('/admin/categories')
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form className="space-y-5"
                action={handleSubmit}>
                {children}
                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 
                    p-3 uppercase font-bold cursor-pointer"
                    value="Guardar Cambios"
                />
            </form>
        </div>
    )
}