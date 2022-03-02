// Phone Search function
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear search field
    searchField.value = '';
    //empty search alert
    if (searchText === '') {
        return alert('Plese Enter phone model')
    }
    // load data from api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}


// showing search result
const displaySearchResult = (data) => {
    const searchResult = document.getElementById('search-result');
    //20 phone
    // const first20Phone = data.slice(0, 5);

    searchResult.innerHTML = '';
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <button onclick="loadPhoneDetails('${data.slug}')" class="btn btn-outline-secondary" type="button"
            id="phone-details">Phone Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

    });

}

// showing phone details---------------------------------

const loadPhoneDetails = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(value => displyPhoneDetails(value.data));

}

const displyPhoneDetails = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details');

    phoneDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name : ${data.name}</h5>
                <h5 class="card-title">ReleaseDate : ${data.releaseDate}</h5>
                <h5 class="card-title">brand : ${data.brand}</h5>                
                <h5 class="card-title">ChipSet : ${data.mainFeatures.chipSet}</h5>             
                <h5 class="card-title">DisplaySize : ${data.mainFeatures.displaySize}</h5>                
                <h5 class="card-title">Memory : ${data.mainFeatures.memory}</5>                
            </div>
    `;
    phoneDetails.appendChild(div);
}

