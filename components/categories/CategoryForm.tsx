import { Category } from "@prisma/client"
import ImagenUploadC from "./ImagenUploadC"

type CategoryFormProps ={
    category?: Category
}

export default async function CategoryForm({category}: CategoryFormProps) {

    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Nombre Categoria"
                    defaultValue={category?.name}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="slug"
                >Slug:</label>
                <input
                    id="slug"
                    type="text"
                    name="slug"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Categoria (singular, minusculas y sin acentos)"
                    defaultValue={category?.slug}
                />
            </div>
            <ImagenUploadC
                image={category?.image}
            />
        </>
    )
}