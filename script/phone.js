const phoneLoad = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    const phones = data.data
    console.log(phones);
    displayPhone(phones)
}
phoneLoad()

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container')
    // search before clear 
    phoneContainer.textContent = '';
    // show all btn 
    const showAll = document.getElementById('show-all');
    if (phones.length>18){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden')
    }
    // display only 20
    phones = phones.slice(0,15);
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-base-100 shadow-xl"`;
        phoneCard.innerHTML = `
        <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body justify-center">
              <h2 class="card-title justify-center ">${phone.phone_name}</h2>
              <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard)
    });
}

const searchHandle =()=>{
    loading();
    const searchField = document.getElementById('search');
    searchField.textContent = '';
    const searchValue = searchField.value;
    console.log(searchValue);
    phoneLoad(searchValue);
}

const loading = ()=>{
    const loading = document.getElementById("loading");
    loading.classList.remove('hidden')
}