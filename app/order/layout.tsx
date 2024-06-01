import OrderSummary from "@/components/order/OrderSummary";
import OrderSidebar from "@/components/order/OrderSidebar";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
    return (
        <>
            <div className="md:flex">
                <OrderSidebar />
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
                <OrderSummary />
            </div>
            <ToastNotification />
        </>
    )
}