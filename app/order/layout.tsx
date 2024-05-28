import OrderSummary from "@/components/order/OrderSummary";
import OrderSidebar from "@/components/order/OrderSidebar";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode }>) {
    return (
        <>
            <div className="md:flex">
                <OrderSidebar />
                <main className="md:flex-1 md:hs-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary />
            </div>
        </>
    )
}