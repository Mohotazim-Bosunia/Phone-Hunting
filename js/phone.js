/**
 * function loadPhone(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data=>console.log(data.data))
}
loadPhone()
 */

const loadPhone= async (searchText)=> {
  const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data=await res.json()
  const phones=data.data;
  //console.log(phones)
  displayPhones(phones)
}

const displayPhones=phones=>{
        //1.get id
    const phoneContainer=document.getElementById("phone-container")
    //clear phone container cards before adding new cards
    phoneContainer.textContent=" "
     
    //display show all button if there are more than 12 phones
    const showallContainer=document.getElementById("show-all-container")
    if(phones.length>12){
       showallContainer.classList.remove('hidden')
    }
    else{
      showallContainer.classList.add('hidden')
    }
    //display only 12 phones
    phones=phones.slice(0,12)

    phones.forEach(phone=>{
        console.log(phone)
        //2.Create a div
        const phoneCard=document.createElement('div')
        phoneCard.classList="card bg-lime-100 p-4 shadow-sm"
        //3.set inner html
        phoneCard.innerHTML=`
        <figure>
                  <img
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name
                  }</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `
        //appoand child
        phoneContainer.appendChild(phoneCard)
    })
    
}
//handle Search button
const handleSearch=()=>{
  const searchField=document.getElementById("search-field");
  const searchText=searchField.value;
  console.log(searchText)
  
  loadPhone(searchText)
}
//loadPhone()