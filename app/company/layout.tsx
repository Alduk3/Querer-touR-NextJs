/** El layout se utiliza para envolver toda mi aplicación en este ejemplo, 
 * independientemente de la ruta.
 * 
 * Lo interesante de los layouts es que no solo podemos hacer un
 * layout que envuelva toda nuestra aplicación es que podemos tener
 * layouts que envuelvan solo partes de nuestras rutas, osea, una 
 * parte de las rutas, como por ejemplo, tener un componente que 
 * envuelva solo a a quellas páginas que estén dentro de dashboard
 * 
 * EN EL LAYOUT COLOCAMOS LAS PARTES DE LA PÁGINA QUE NO QUEREMOS QUE
 * CAMBIEN
 * 
 */
//Ruta para cargar los estilos globales
import '../globals.css';

// export default function RootLayout(
//     { children,}: 
//     { children: React.ReactNode; }
// ) 

// {
//   return (
//     <html lang="en">
//       <body>
//         <h1 className='text-blue-500'>Este título</h1>
//         Esto es parte del layout
//         <div style={{border: '1px solid #000'}}>
//           {children}
//         </div>
//         <footer className='py-10 flex justify-center items-center'>
//           Hecho con ❤️ por mi
//         </footer>
//       </body>
//     </html>
//   );
// }


/** Este layout sólo aplica para esta misma ruta y las de ahí hacia abajo
 * 
 */

import React from "react"
import DiscountNav from "../ui/company/discountnav";
import GalleryGrid from '../ui/company/gallery';
import SlideOthersExperiences from '../ui/company/slide-others-experiences';
import CircleRectangle from '../ui/company/circle-rectangle';

export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        // <section>
        //     Esto es el layout del dashboard:
        //     {children}
        // </section>

        <div className="text-center">
            <div>
                <GalleryGrid />
                <DiscountNav />
                <CircleRectangle />
                
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}