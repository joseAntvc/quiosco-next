import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound(){
    return (
        <div className="text-center">
            <Heading>Categoria No Encontrado</Heading>
            <Link 
                href={'/admin/categories'}
                className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold
                cursor-pointer w-full lg:w-auto"
            >Ir a categorias</Link>
        </div>
    )
}