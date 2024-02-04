import Navbar from "./Navbar"
import PersonData from "./PersonData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { data } from "../../../public/data"
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../../config/firebase"
import AddData from "./AddData"




export default function Homepage() {

    // const [pData, setPData] = useState(data); // for testing local data
    const [contacts, setContacts] = useState([]);
    const [visiblemodal, setVisibleModal] = useState(false);
    //earlier getting local data --> import { data } from "../../../public/data"
    // now fetching it from firebase
    useEffect(() => {
        const getContacts = () => {
            try {
                const conatactsRef = collection(db, "contacts");

                // const contactsSnapshot = await getDocs(conatacts);
                onSnapshot(conatactsRef,(snapshot) => {

                    const contactList = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    });
                    
                    setContacts(contactList);
                });
            }

            catch (error) {
                console.log(error);
            }
        }
        getContacts();
    }, [])

    const filterContacts = (e)=>{
        const value = e.target.value;


        const contactsRef = collection(db,"contacts");

        onSnapshot(contactsRef,(snapshot) => {
            const contactList = snapshot.docs.map( (doc)=> {
                return{
                    id:doc.id,
                    ...doc.data(),
                };
            });

            const filteredContact = contactList.filter( (contact)=>
                contact.name.toLowerCase().includes(value.toLowerCase())
            );
            setContacts(filteredContact);
            return filteredContact

        });
    };


    return (
        <>
            <Navbar />

            <div className="main w-full min-h-[100vh] p-4 relative" style={{ backgroundColor: "rgb(71,77,82)" }}>

                <div className="topSection flex justify-center"  >

                    <div className="nameApp flex w-full sm:w-80 py-2 px-1 sm:p-2 font-semibold text-[17px] sm:text-xl bg-white rounded-lg justify-center align-middle">
                        <div className="cloudIcon pr-2 ">
                            <FontAwesomeIcon icon={faCloud} /> </div>

                        <h1> Firebase Contact App </h1>
                    </div>
                </div>

                {/* Search Bar Section  */}
                <div className="searchBar pt-3 bg-none flex justify-center">
                    {/* <IoSearchOutline /> */}
                    <input onChange={filterContacts} className="bg-transparent border-2 pl-3 text-white border-black mr-2 rounded-md" />

                    <div className="addbtn flex">
                        <div onClick={() => {
                            setVisibleModal(true)
                           
                        }}
                            className="cloudIcon flex justify-center align-middle cursor-pointer p-[2px] text-3xl bg-white  rounded-full">
                            <FontAwesomeIcon icon={faCirclePlus}
                            />
                        </div>
                    </div>
                </div>
                {/* Search Bar end Section ............. */}
                {/* Add data from user frontend */}
                <div className="addData absolute top-4 right-0 left-0 z-50 w-full flex justify-center">
                    <div className="  ">

                        <AddData visiblemodal={visiblemodal} setVisibleModal={setVisibleModal} />
                    </div>
                </div>
                {/* end Add data from user frontend end ------------*/}

                {/* Prerson List Section */}

                <div className="PrersonListSection mt-10 ">
                    {console.log(contacts)}
                    {
                        contacts.map((value, index) =>
                            <PersonData key={index} item={value} setVisibleModal={setVisibleModal} />

                        )}
                </div>
                {/* Prerson List Section end .............*/}





            </div>
        </>
    )
}