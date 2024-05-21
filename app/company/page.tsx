// Utilizando el componente image
import Image from 'next/image';
import SlideOthersExperiences from '../ui/company/slide-others-experiences';

// Creando la ruta, file system routing
export default async function Company() {
    const res = await fetch('https://picsum.photos/v2/list');
    const json = await res.json();

    return (
        <>
            <main>

                {/* text-[32px]  mt-[50px] mb-[50px]   */}
                <h2 className="text-center text-[#8D1AAB] py-8 font-bold text-2xl mt-4">
                    Otras experiencias
                </h2>

                {/* <h3 className="text-xl font-bold mt-[48px] mb-2">Pueblos Ocultos/Recomendados</h3> */}
                <SlideOthersExperiences options={json} />

            </main>
        </>
    );
}
