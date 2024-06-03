import AddCategoryForm from "@/components/categories/AddCategoryForm";
import CategoryForm from "@/components/categories/CategoryForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";

export default function CreateCategoryPage() {
    return (
        <>
            <Heading>Nueva Categoria</Heading>

            <GoBackButton />

            <AddCategoryForm>
                <CategoryForm />
            </AddCategoryForm>
        </>
    )
}