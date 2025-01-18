const pets = [
    // Dogs
        { name: 'Dog Collar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYMxAImMGCTzUqYDWtIBwACH_y_0m1zvu0RvowImvvNvyG-xgPEw26CIF&s=10',type: 'Dog', description: 'A sturdy collar for your dog.', link: 'https://www.amazon.in/Epesiri-Adjustable-Mushroom-Leather-Rottweiler/dp/B09WYGBV1Y' },
        { name: 'Dog Bed', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDewcvKtDe-jeRSBrE9f7TsrNyhlg5i0i-CcuJi_-gAjmyB_-Tf5nV103&s=10',type: 'Dog',  description: 'A comfortable bed for your dog to rest.', link: 'https://www.poochmate.com/products/poochmate-beige-ivory-linen-dog-bed' },
        { name: 'Dog Leash', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2cnLeUX2IQXlG-8h8XMVHXsvUdKrGIzDfNjcIpuI84RJ_qgJ-0mXmIUb&s=10', type: 'Dog', description: 'A leash for walking your dog safely.', link: 'https://headsupfortails.com/products/huft-reflective-multi-purpose-leash-for-dog-red-2-5-meters' },
        { name: 'Cat Harness', image: 'https://m.media-amazon.com/images/I/81ZavE3gDhL._AC_UF1000,1000_QL80_FMwebp_.jpg', type: 'Cat',  description: 'Escape Proof Cat Vest Harness.', link: 'https://www.amazon.in/Harness-Walking-Control-Adjustable-Durable/dp/B0CLDJMBR3/ref=asc_df_B0CLDJMBR3/?tag=googleshopmob-21&linkCode=df0&hvadid=709856391594&hvpos=&hvnetw=g&hvrand=7755915861760831270&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=9303346&hvtargid=pla-2264965061210&psc=1&mcid=282e5f8fcef436999b87645026f6b9ca&gad_source=1' },
        { name: 'Cat Toy', image: 'https://m.media-amazon.com/images/I/71SYQgVzR+L._AC_UF1000,1000_QL80_.jpg', type: 'Cat', description: 'Interactive toys to keep your cat entertained.', link: 'https://www.amazon.in/Catnip-Interactive-Cleaning-Realistic-Colorful/dp/B0BB9XLFYR' },
        { name: 'Cat Food', image: 'https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301006375-product-image-1.png',  type: 'Cat', description: 'Whiskas Tuna in Jelly Flavour.', link: 'https://www.amazon.in/Contains-Essential-Nutrients-Complete-Nutrition/dp/B00LHUMDMU/ref=asc_df_B00LHUMDMU/?tag=googleshopmob-21&linkCode=df0&hvadid=710060157022&hvpos=&hvnetw=g&hvrand=8353794657602824528&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=9303346&hvtargid=pla-409302644532&psc=1&mcid=54948101798830a3a8c012e7dd5ce181&gad_source=1' }
     ,{ name: 'Rabbit Tunnel', image: 'https://m.media-amazon.com/images/I/71RWf2vyu+L._AC_UF1000,1000_QL80_FMwebp_.jpg', type:'Rabbit', description: 'A tunnel for your rabbit to explore.', link: 'https://www.amazon.in/BWOGUE-Tunnels-Collapsible-Hideout-Activity/dp/B0936PSQB3' },
        { name: 'Rabbit Hutch', image: 'https://m.media-amazon.com/images/I/91jtZX67+8S._AC_UF1000,1000_QL80_FMwebp_.jpg', type:'Rabbit',  description: 'A hutch for your rabbit.', link: 'https://www.ubuy.co.in/product/4X3G24U4O-74-wood-rabbit-hutch-bunny-hutch-large-bunny-cage-small-animal-house-habitat-coop-with-double-run-removable-tray' },
        { name: 'Rabbit Chew Toys', image: 'https://m.media-amazon.com/images/I/61zWV+ooj3L._AC_UF1000,1000_QL80_FMwebp_.jpg', type:'Rabbit', description: 'Safe chew toys for your rabbit.', link: 'https://www.amazon.in/Rabbit-Scratching-Climbing-Handwoven-Seagrass-Hamsters/dp/B08FCQNV1M' }
     ,{ name: 'Bird Cage', image: 'https://m.media-amazon.com/images/I/81tTSuo517L._AC_SL1500_.jpg', type:'bird', description: 'A spacious cage for your bird.', link: 'https://www.amazon.in/VIVOHOME-Wrought-Rolling-Lovebird-Cockatiel/dp/B083S9S5RC' },
        { name: 'Bird Feeder', image: 'https://rukminim2.flixcart.com/image/1080/1170/xif0q/bird-feeder/8/j/9/18-bird-feeder-hanging-for-balcony-grill-for-sparrow-finches-original-imagnd4wguyrxj8n.jpeg?q=90&crop=false', type:'bird', description: 'A feeder to keep your bird well-fed.', link: 'https://www.amazon.in/Boltz-Bird-Feeder-Hanging-Balcony-Sparrow-Finches/dp/B0BR5QCPZF' },
        { name: 'Bird Perch', image: 'https://m.media-amazon.com/images/I/71vqvHEkRpL._AC_UF1000,1000_QL80_FMwebp_.jpg', type:'bird', description: 'A comfortable perch for your bird.', link: 'https://www.amazon.in/-/hi/Poonch-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-Taming-%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%88%E0%A4%82%E0%A4%A1-Budgies/dp/B0D34864KG' }
];

function filterPets() {
    const type = document.getElementById('type').value.toLowerCase();

    const filteredPets = pets.filter(pet => type === 'any' || pet.type.toLowerCase() === type);

    displayPets(filteredPets);
}

function displayPets(pets) {
    const petCards = document.getElementById('pet-cards');
    petCards.innerHTML = '';  // Clear previous cards
    pets.forEach(pet => {
        const card = `
            <a href = "${pet.link}" class = "pet-card-link">
            <div class="pet-card">
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p> ${pet.description}</p>
            </div>
            </a>
        `;
        petCards.innerHTML += card;  // Add new card to the display
    });
}

// Initial display of all pets
displayPets(pets);