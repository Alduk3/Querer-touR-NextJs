'use client'


// import React from 'react'

// const Card = ({img}) =>{
//     return(
//     <div className='w-[100%] bg-[#fab1a0] shadow-xl'>

//         <div>
//             <img className='h-[250px] w-[100%] object-cover' src={img} alt="dp"/>
//             <div className='flex flex-col gap-4 p-[20px]'>
//                 <div>
//                     <h2 className='font-bold'>Team member Name</h2>
//                 </div>
//                 <div>
//                     <p>Lorem ipsum lksajdflsdjflsjfsdfj</p>
//                 </div>
            
//             </div>
           
//         </div>
//     </div>
// )
// }

// export default Card


// export function Card({
//     title,
//     value,
//     type,
//   }: {
//     title: string;
//     value: number | string;
//     type: 'invoices' | 'customers' | 'pending' | 'collected';
//   }) {
//     const Icon = iconMap[type];
  
//     return (
//       <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
//         <div className="flex p-4">
//           {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
//           <h3 className="ml-2 text-sm font-medium">{title}</h3>
//         </div>
//         <p
//           className={`${lusitana.className}
//             truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
//         >
//           {value}
//         </p>
//       </div>
//     );
//   }
  



import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/company' },
    {
      name: 'Register',
      href: '/company/signupclient'
    }
  ];
  
  export default function DiscountNavLink() {
    /** usePathname() Hook de Next.JS para indicarle al usuario en donde se encuentra */
    const pathname = usePathname()
  
    return (
      <>
        {links.map((link) => {
        
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
              
              ${pathname == link.href ? 'bg-sky-100 text-blue-600' : ''}
  
              `}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  