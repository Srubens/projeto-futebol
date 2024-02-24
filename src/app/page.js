"use client"
import React, { useState } from "react"

export default function Page (){

    const [checkMarcado, setCheckMarcado] = useState(false)
    const [form, setForm] = useState({
        nmaluno:'',
        telefone:''
    })

    const onChange = evt =>{
        const value = evt.target.value
        console.log(evt.target.value)
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('/api/hello',
            { 
                method:'POST', 
                body:JSON.stringify(form)
            })
            .then((res)=>{
                console.log(res)
            })
            console.log('response', response)
            const data = await response.json()
            console.log(data)
            setForm((old) =>({
                ...old,
                nmaluno:'',
                telefone:''
            }))
            setCheckMarcado(false)
        }catch(e){
            console.log('Erro: ', e)
        }
    };

    return(
        <div>
            <pre>
                {JSON.stringify(form,2,null)}
            </pre>
        
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="nome"
                value={form.nmaluno}
                onChange={onChange}
                name="nmaluno"
            />
            <input type="text" 
                placeholder="telefone"
                value={form.telefone}
                onChange={onChange}
                name="telefone"
            />
            <button type='submit' >cadastrar</button>
        </form>
        </div>
    )
}