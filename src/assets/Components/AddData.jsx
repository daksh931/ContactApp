import { addDoc, collection, doc } from "firebase/firestore";
import { useState } from "react"
import { db } from "../../config/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function AddData(props){
        // props provide us  visiblemodal - setVisibleModal to show/hide Add data modal

        const [Vname,setName] = useState("");
        const [Vemail,setEmail] = useState("");
       


        const handleSubmit = async (event) => {
            event.preventDefault();
            const contactRef = collection(db, "contacts");
            
            // console.log(Vname,Vemail);
            await addDoc(contactRef, {
                name: Vname,
                email :Vemail,
                Author : "abcd",
            }
            );
            props.setVisibleModal(false);
            
        }

    return(
        <>
            <div className={` main  leading-none bg-white  max-w-72 border-2 rounded-md border-blue-700  
            flex flex-col justify-center items-center pt-1 pb-6 px-2 ${props.visiblemodal ? "flex" : "hidden"}`}>
                
                <div className="close flex self-end" onClick={ ()=> {props.setVisibleModal(false)}}><FontAwesomeIcon className='text-xl cursor-pointer' icon={faWindowClose} /></div>
                <form >
                <div className="name ">
                    <label htmlFor="name" className=" leading-none pb-1 ">Name</label> 
                    <input name="name" id="name" type="text" placeholder="name" value={Vname} onChange={(e)=> {setName(e.target.value)}}
                    className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900 " ></input>
                </div>
            
                <div className="email mt-4">
                    <label htmlFor="email" className=" leading-none pb-1 ">Email</label> 
                    <input name="email" id="email"  type="text" placeholder="email"   value={Vemail} onChange={(e)=> {setEmail(e.target.value)}}
                    className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900  " ></input>
                </div>
                <div className="button-Add-Contact flex justify-end w-full p-2">
                    <button onClick={handleSubmit} 
                    className="text-sm font-bold p-1 px-2 rounded-md bg-yellow-600 border-2 border-red-900">
                        Add Contact</button>
                </div>
                    </form> 
            </div>
        </>
    )
}