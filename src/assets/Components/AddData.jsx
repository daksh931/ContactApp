import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../config/firebase";
import { IoCloseSharp } from "react-icons/io5";

export default function AddData({setVisibleModal, visiblemodal} ) {
    // props provide us  visiblemodal - setVisibleModal to show/hide Add data modal
 
    const [Vname, setName] = useState("");
    const [Vemail, setEmail] = useState("");

   

        const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                const contactRef = collection(db, "contacts");
                console.log(Vname, Vemail);
                await addDoc(contactRef, {
                    name: Vname,
                    email: Vemail,
                    Author: Vname,
                });
            } catch (error) {
                console.log(error)
            }
            setName("");
            setEmail("");
            setVisibleModal(false);
        }


    // if (props.functionalityType == "update") {
    //     console.log("inside update")
    // const handleSubmit = async (event) => {
    //         event.preventDefault();
    //         try {   
    //             const contactRef = doc(db, "contacts","YRRc3wpluSycpmu0AaQ8");
    //             console.log(Vname, Vemail);
    //             await updateDoc(contactRef, {
    //                 name: Vname,
    //                 email: Vemail,
    //                 Author: Vname,
    //             });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //         setName("");
    //         setEmail("");
    //         setVisibleModal(false);
    //     }
    // }
    // console.log(props.functionalityType)


    return (
        <>
            <div className={` main  leading-none bg-white  max-w-72 border-2 rounded-md border-blue-700  
            flex flex-col justify-center items-center pt-1 pb-6 px-2 ${visiblemodal ? "flex" : "hidden"}`}>

                <div className="close flex self-end" onClick={() => { setVisibleModal(false) }}><IoCloseSharp  className='text-xl cursor-pointer'  /></div>
                <form >
                    <div className="name ">
                        <label htmlFor="name" className=" leading-none pb-1 ">Name</label>
                        <input name="name" id="name" type="text" placeholder="name" value={Vname} onChange={(e) => { setName(e.target.value) }}
                            className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900 " ></input>
                    </div>

                    <div className="email mt-4">
                        <label htmlFor="email" className=" leading-none pb-1 ">Email</label>

                        <input name="email" id="email" type="text" placeholder="email" value={Vemail} onChange={(e) => { setEmail(e.target.value) }}
                            className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900  " ></input>
                    </div>
                    <div className="button-Add-Contact flex justify-end w-full p-2">
                        <button onClick={handleSubmit}
                            className="text-sm font-bold p-1 px-2 rounded-md bg-yellow-600 border-2 border-red-900">
                            add
                            </button> 
                    </div>
                </form>
            </div>
        </>
    )
}