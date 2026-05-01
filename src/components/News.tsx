import { createResource, For, Suspense } from "solid-js";
import New from "./New";

export default function News() {
const url = "https://apiqsasmstiryuwcyemk.supabase.co/rest/v1/news"
const options = {
method: "GET",
headers:{
apikey : "sb_publishable_7hlyHenDUcmecwApd4hjFg_E3UhudBj"
}
}

 const [data] = createResource(async()=>{
  const data = await fetch(url,options);
return  await data.json();
 })
 
  return (
   <>
   <Suspense fallback={<><span class="loading loading-ball loading-xs"></span>
<span class="loading loading-ball loading-sm"></span>
<span class="loading loading-ball loading-md"></span>
<span class="loading loading-ball loading-lg"></span>
<span class="loading loading-ball loading-xl"></span></>}>
   <For each={data()}>
     {(item,index)=>
     <>
        <New item= {item}/>  
     </>
     }
     </For>
     </Suspense> 
   </>
  );
}
