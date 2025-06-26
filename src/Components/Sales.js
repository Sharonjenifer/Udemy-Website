import salesimg from "../assets/images/sale-image.jpeg"


function Sales(){
  return(
     <div class="Sale-images">
        <img src={salesimg} alt="Sale Images"></img>
        <div class="Sale-images__offer">
            <h2>Skills that drive you forward</h2>
            <p>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
            <button class="Sale-image__button">View Plans</button>
        </div>
    </div>
  )
}

export default Sales