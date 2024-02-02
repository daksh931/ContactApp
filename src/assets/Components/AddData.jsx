import { useState } from "react"

export default function AddData(props){
        const [name,setName] = useState();
        const [email,setEmail] = useState();
    return(
        <>
            <div className="main  leading-none bg-white  max-w-72 border-2 rounded-md border-blue-700  
            flex flex-col justify-center items-center py-6 px-2">
                
                <div className="name ">
                    <p className=" leading-none pb-1 ">Name</p> 
                    <input id="name" type="text" placeholder="name" value={name} onChange={(e)=> {e.target.value}}
                    className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900 " ></input>
                </div>
            
                <div className="email mt-4">
                    <p className=" leading-none pb-1 ">Email</p> 
                    <input id="email"  type="text" placeholder="email"   value={email} onChange={(e)=> {e.target.email}}
                    className="pl-2 p-2 py-1 text-xl border-2 rounded-md border-red-900  " ></input>
                </div>
                <div className="button-Add-Contact flex justify-end w-full p-2">
                    <button className="text-sm font-bold p-1 px-2 rounded-md bg-yellow-600 border-2 border-red-900">
                        Add Contact</button>
                </div>
            </div>
        </>
    )
}