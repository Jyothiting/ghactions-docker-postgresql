import { useEffect, useState } from "react";

function App() {

const [data,setData] = useState("");

useEffect(()=>{

fetch("http://EC2_PUBLIC_IP:8000")
.then(res=>res.json())
.then(data=>setData(data.message))

},[])

return (
<div>
<h1>Full Stack App</h1>
<p>{data}</p>
</div>
);

}

export default App;
