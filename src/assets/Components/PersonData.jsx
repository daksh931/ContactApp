import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { createElement, useEffect, useState } from 'react'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Update from './Update'


export default function PersonData(props) {
    const [updateVisibleModal, setUpdateVisibleModal] = useState(false);

        const handleDelete = async () => {
            try {
                const contactRef = doc(db, "contacts", props.item.id);
                await deleteDoc(contactRef);
                console.log(props.item.id)
                // await deleteDoc(doc(db, "contacts", id));
            } catch (error) {
                console.log("error - " + error)
            }
        }
    
    

    return (
        <>
            <div key={props.item.id} className="main flex justify-center m-2">

                <div className="maininsider flex rounded-md  px-2  p-2 w-full sm:w-96 align-middle"
                    style={{ backgroundColor: "rgb(255,234,174)" }}>

                    <div className="image pl-2 flex items-center">
                        <img className=" w-14 h-12  rounded-full" src="\3.jpg" alt="" />
                    </div>

                    <div className="rightSideData w-full flex pl-3  pb-1">

                        <div className="data">
                            {/* {console.log("id -> "+ props.item.id)} */}
                            <h1 className="text-md font-bold"> {props.item.name} </h1>
                            <p className="text-sm "> {props.item.email}</p>
                            <p className="text-sm "> {props.item.Author}</p>

                        </div>
                        <div className="btn text-xl cursor-pointer w-full p-2 flex justify-end items-center">
                            <div className="edit text-2xl px-1 pr-2" >
                                <FaEdit  onClick={()=> { setUpdateVisibleModal(true)}}  />
                              
                            </div>
                            <div className="delete text-3xl pl-1" >
                                <MdDeleteSweep onClick={() => { handleDelete(props.item.id) }} />
                            </div>

                        </div>
                    </div>
                                
                </div>
            </div>
            <div className="addData absolute top-4 right-0 left-0 z-50 w-full flex justify-center">
                    <div className="  ">

                    <Update updateVisibleModal={updateVisibleModal} setUpdateVisibleModal={setUpdateVisibleModal} ID={props.item.id}/>
                    </div>
                    </div>      
                    <div className=""></div>                
        </>
    );
;}