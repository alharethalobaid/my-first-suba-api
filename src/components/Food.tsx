export default function Food(props){

  return(
    <>
    <a href={props.item.link}>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={props.item.image}
        alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{props.item.name}</h2>
      <p>{props.item.company}</p>
      <div class="card-actions justify-end">
      </div>
    </div>
  </div>
  </a>
  
    
          <br/>
          
          <br/>
          
    </>
  )
  }
