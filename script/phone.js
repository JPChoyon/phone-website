const phoneLoad = async (search='iphone',isShow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    const phones = data.data
    displayPhone(phones,isShow)
}
phoneLoad()

const displayPhone = (phones,isShow) => {
    const phoneContainer = document.getElementById('phone-container')
    // search before clear 
    phoneContainer.textContent = '';
    // show all btn 
    const showAll = document.getElementById('show-all');
    if (phones.length > 18 && !isShow) {
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden')
    }
    // display only 15
    if(!isShow){
        phones = phones.slice(0, 15);
    }
    else{

    }
    
    phones.forEach(phone => {
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
                <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard)
    }); loading(false);
}

const searchHandle = (isShow) => {
    loading(true);
    const searchField = document.getElementById('search');
    searchField.textContent = '';
    const searchValue = searchField.value;
    phoneLoad(searchValue,isShow);
}

const loading = (isLoading) => {
    const loading = document.getElementById("loading");
    if (isLoading == true) {
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }
}

const showAllHandler = ()=>{
    searchHandle(true);
}

const showDetails =async (id)=>{
    const res =await fetch (`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    phoneDetails(data.data);
}
const phoneDetails = (phone)=>{
    my_modal_1.showModal();
    const modalCon = document.getElementById('modal-box-details');
    const phoneCard = document.createElement('div');
    modalCon.classList = `card card-compact bg-base-100 shadow-xl`;
    modalCon.innerHTML = `
        <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body justify-center">
              <h2 class="card-title justify-center ">${phone.name}</h2>
              <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `
        modalCon.appendChild(phoneCard)
    
}