import Navbar from "./Navbar"
import PersonData from "./PersonData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { data } from "../../../public/data"
import { useState } from "react";


export default function Homepage() {

    const [pData, setPData] = useState(data);

    return (
        <>
            <Navbar />

            <div className="main w-full h-[100vh] p-4" style={{ backgroundColor: "rgb(71,77,82)" }}>

                <div className="topSection flex justify-center"  >

                    <div className="nameApp flex w-full sm:w-80 py-2 px-1 sm:p-2 font-semibold text-[17px] sm:text-xl bg-white rounded-lg justify-center align-middle">
                        <div className="cloudIcon pr-2 ">  <FontAwesomeIcon icon={faCloud} /> </div>

                        <h1> Firebase Contact App </h1>
                    </div>
                </div>

                {/* Search Bar Section  */}
                <div className="searchBar pt-3 bg-none flex justify-center">
                    <input className="bg-transparent border-2 pl-3 text-white border-black mr-2 rounded-md" />
                    
                    <div className="addbtn flex">
                        <div className="cloudIcon flex justify-center align-middle cursor-pointer p-[2px] text-3xl bg-white  rounded-full">
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                    </div>
                </div>
                {/* Search Bar end Section ............. */}

                {/* Prerson List Section */}
                
                <div className="PrersonListSection mt-10">
               
                    {
                        pData.map( (value, index) => 
                            <PersonData key={index} item={value}/>
                        )}
                </div>

                {/* Prerson List Section end .............*/}
            </div>
        </>
    )
}