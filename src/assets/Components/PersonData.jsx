import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function PersonData(props) {

    const handleDelete = async (id) => {
        // const contactRef = collection(db, "contacts");
        // await deleteDoc(contactRef,"contacts",id);
        try {
            
            await deleteDoc(doc(db, "contacts", id));
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <>
            <div className="main flex justify-center m-2">

                <div className="maininsider flex rounded-md  px-2  p-2 w-full sm:w-80 align-middle"
                    style={{ backgroundColor: "rgb(255,234,174)" }}>

                    <div className="image pl-2 flex items-center">
                        <img className=" w-14 h-12  rounded-full" src="\3.jpg" alt="" />
                    </div>

                    <div className="rightSideData w-full flex pl-3  pb-1">

                        <div className="data">
                            {/* {console.log("id -> "+ props.item.id)} */}
                            <h1 className="text-md font-bold"> {props.item.name} </h1>
                            <p className="text-sm "> {props.item.email}</p>
                            <p className="text-sm "> {props.item.author}</p>

                        </div>
                        <div className="btn text-xl cursor-pointer w-full p-2 flex justify-end items-center">
                            <div className="edit">
                                <FontAwesomeIcon className='px-1 pr-2' icon={faPenToSquare} />
                            </div>
                            <div className="delete" >
                                <FontAwesomeIcon onClick={() => handleDelete(props.item.id)} className='pl-1' icon={faTrashCan} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}