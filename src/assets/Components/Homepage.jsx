import Navbar from "./Navbar"
import PersonData from "./PersonData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { data } from "../../../public/data"
import { useEffect, useState } from "react";
import { collection,getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"
import AddData from "./AddData"


export default function Homepage() {

    const [pData, setPData] = useState(data);
    const [contacts, setContacts] = useState([]);

    //earlier getting local data --> import { data } from "../../../public/data"
    // now fetching it from firebase
    useEffect( ()=> {
        const getContacts = async () =>{
            try {
                const conatacts = collection(db, "contacts");
                const contactsSnapshot = await getDocs(conatacts);
                const contactList = contactsSnapshot.docs.map( (doc) => {
                    return{
                        id: doc.id,
                        ...doc.data(),
                    }
                });
                setContacts(contactList);
            } 

            catch (error) {
                console.log(error);
            }
        }
        getContacts();
    }, [])

    return (
        <>
            <Navbar />
           
            <div className="main w-full h-[100vh] p-4 relative" style={{ backgroundColor: "rgb(71,77,82)" }}>

                <div className="topSection flex justify-center"  >

                    <div className="nameApp flex w-full sm:w-80 py-2 px-1 sm:p-2 font-semibold text-[17px] sm:text-xl bg-white rounded-lg justify-center align-middle">
                        <div className="cloudIcon pr-2 ">  <FontAwesomeIcon icon={faCloud} /> </div>

                        <h1> Firebase Contact App </h1>
                    </div>
                </div>

                {/* Search Bar Section  */}
                <div className="searchBar pt-3 bg-none flex justify-center">
                    {/* <IoSearchOutline /> */}
                    <input className="bg-transparent border-2 pl-3 text-white border-black mr-2 rounded-md" />
                    
                    <div className="addbtn flex">
                        <div className="cloudIcon flex justify-center align-middle cursor-pointer p-[2px] text-3xl bg-white  rounded-full">
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                    </div>
                </div>
                {/* Search Bar end Section ............. */}

                {/* Prerson List Section */}
                
                <div className="PrersonListSection mt-10 ">
               
                    {
                        contacts.map( (value, index) => 
                            <PersonData key={index} item={value}/>
                            
                        )}
                </div>
                {/* Prerson List Section end .............*/}
                
                <div className="addData absolute w-full flex justify-center">
                    <div className="  relative -translate-y-52">

                        <AddData />
                    </div>
                </div>

            </div>
        </>
    )
}