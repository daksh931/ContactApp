import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export default function Navbar() {
    const [navNutton,setNavButton] = useState(true)

    useEffect ( 
        ()=>{}, [navNutton])

    const  navSet = () => { 
        if(navNutton == false){setNavButton(true)}
        else{
            setNavButton(false)
        }}

    

    return (
        <>
            <div className="mainNav  p-0 m-0 top-0">
                
                <div className=' sm:hidden'>
                <button 
                    onClick={navSet}
                    >
                    <FontAwesomeIcon icon={faBars}       className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "flex" : "hidden p-0"}`} />
                    <FontAwesomeIcon icon={faArrowLeft}  className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "hidden" : "flex z-50"}`}/>
                    
                </button>
                        </div>
                    

                {/* lower to sm screen  */}
                <div className="LowerMain sm:hidden ">

                

                <div className={` z-10 navItems  flex-col absolute text-xl pt-4 pb-[100px]  text-start h-[100vh] w-[85vw]  px-2 py-1 text-white ${navNutton ? "hidden" : "top-15 pt-0 flex "} `}
                             style={{backgroundColor:"rgb(50,51,52)" ,
                                    opacity: "0.97"}}
                >
                    
                    <Link to="/" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"> Dashboard</Link>
                    <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"> Our Speciality</Link>
                    <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"> Enterprise</Link>
                    <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"> About Us</Link>
                    <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"> Contact Us</Link>
                </div>
                </div>

                {/* from small onward screen   */}
                <div className="navItems hidden sm:flex justify-start text-white" style={{backgroundColor:"rgb(50,51,52)" }}>



                    <Link to="/" className="pr-5 pt-2 py-1 pl-3 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"> Dashboard</Link>
                    <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"> Our Speciality</Link>
                    <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"> Enterprise</Link>
                    <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"> About Us</Link>
                    <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"> Contact Us</Link>
                </div>
            </div>
        </>
    )
} 