import { useEffect } from "react"

const Redirecionar = () => {
    useEffect(()=>{
        fetch("http://localhost:3000/urls", {
        method: "GET",
        headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "application/json",
        "key": "###"
        }
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((json)=>{
        window.location.href = json.base_url;
    })
    .catch((err)=>{
        console.log("erro: ",err)
    })
    })

    return (
        <>

        </>
    )
}



export {Redirecionar}