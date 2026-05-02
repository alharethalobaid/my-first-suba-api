import { createResource, createSignal, For, Suspense } from "solid-js";
import Food from "./Food";

export default function Foods() {
  const [limit , setlimit] = createSignal(0)
  const [offset , setOffset] = createSignal(0)

const url = "https://apiqsasmstiryuwcyemk.supabase.co/rest/v1/food?"
const options = {
method: "GET",
headers:{
apikey : "sb_publishable_7hlyHenDUcmecwApd4hjFg_E3UhudBj"
}
}
const filter = ()=>"limit="+limit()+"&offset="+offset();
 const [data] = createResource(filter,async()=>{
  const data = await fetch(url+filter(),options);
return  await data.json();
 })
 
 function updateLimit(e){
  setlimit(e.target.value)
}

function updateOffset(e){
 setOffset(e.target.value)
}

  return (
   <>
      <div>
     limit:
     <input value ={limit()} onInput={updateLimit} class="input border-2 border-black" type="number" />
   </div>
   <div>
     Offset:
     <input value ={offset()} onInput={updateOffset} class="input border-2 border-black" type="number" />
   </div>
   <Suspense fallback={<><span class="loading loading-ball loading-xs"></span>
<span class="loading loading-ball loading-sm"></span>
<span class="loading loading-ball loading-md"></span>
<span class="loading loading-ball loading-lg"></span>
<span class="loading loading-ball loading-xl"></span></>}>
   <For each={data()}>
     {(item,index)=>
     <>
        <Food item= {item}/>  
     </>
     }
     </For>
     </Suspense> 
   </>
  );
}
