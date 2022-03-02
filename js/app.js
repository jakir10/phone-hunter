// Phone Search function
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear search field
    searchField.value = '';
    //empty search alert
    if (searchText == '') {
        alert('Plese Enter Phone Model')
    }
    else {
        // load data from api
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }

}

// showing search result
const displaySearchResult = (data) => {
    const searchResult = document.getElementById('search-result');
    //20 phone show
    const first20Phone = data.slice(0, 20);

    searchResult.innerHTML = '';
    if (data.length == 0) {
        alert('This Phone is not Available here')
    }
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
    const phoneDetails = document.getElementById('phone-details');
    //clear search phone
    phoneDetails.innerHTML = '';
    //create single phone details card
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name : ${data.name}</h5>
                <h5 class="card-title">ReleaseDate : ${data.releaseDate ? data.releaseDate : 'No Release Date'}</h5>
                <h5 class="card-title">brand : ${data.brand}</h5>                
                <h5 class="card-title">ChipSet : ${data.mainFeatures.chipSet}</h5>             
                <h5 class="card-title">DisplaySize : ${data.mainFeatures.displaySize}</h5>                
                <h5 class="card-title">DisplaySize : ${data.mainFeatures.displaySize}</h5>                
                <h5 class="card-title">Memory : ${data.mainFeatures.memory}</h5>                
                <h5 class="card-title">sensors : </h5>                
                <h5 class="card-title">  ${data.mainFeatures.sensors[0]}</h5>         
                <h5 class="card-title">  ${data.mainFeatures.sensors[1]}</h5>         
                <h5 class="card-title">  ${data.mainFeatures.sensors[2]}</h5>         
                <h5 class="card-title">${data.mainFeatures.sensors[3]}</h5>         
                <h5 class="card-title">  ${data.mainFeatures.sensors[4]}</h5>         
                <h5 class="card-title">  ${data.mainFeatures.sensors[5] ? data.mainFeatures.sensors[5] : ''}</h5>         
                <h5 class="card-title">${data.mainFeatures.sensors[6] ? data.mainFeatures.sensors[6] : ''}</h5>         
                <h5 class="card-title">Storage : ${data.mainFeatures.storage}</h5>         
                <h5 class="card-title">Others : </h5>         
                <h5 class="card-title">Bluetooth : ${data.others.Bluetooth}</h5>         
                <h5 class="card-title">GPS : ${data.others.GPS}</h5>         
                <h5 class="card-title">NFC : ${data.others.NFC}</h5>         
                <h5 class="card-title">Radio : ${data.others.Radio}</h5>         
                <h5 class="card-title">USB : ${data.others.USB}</h5>         
                <h5 class="card-title">WLAN : ${data.others.WLAN}</h5>         
            </div>
    `;
    phoneDetails.appendChild(div);
}

