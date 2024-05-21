import Link from 'next/link';
import DiscountNavLink from '@/app/ui/company/discount-nav-link';


export default function DiscountNav() {
    return (
        <div className="items-center bg-[#8227CD1A] mt-8 mb-8">
            {/* <Link 
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            href="/"
            >
            </Link> */}
            <div className="pt-8 pb-6">
                <h2 className="text-center text-[#8D1AAB] py-2 font-bold text-2xl ">Descuento del 10% </h2>

                <p className="text-center text-sm font-bold">Regístrate ahora y obtén un descuento del 10% en nuestro local aliado</p>

                <button className="items-center justify-center text-sm bg-[#190A71] hover:bg-[#8D1AAB] text-white py-2 px-16 mt-8 mb-6 border border-[#190A71] rounded">
                    <div className="hidden md:block">Registrarme</div>
                </button>

            </div>

        </div>
    );
}