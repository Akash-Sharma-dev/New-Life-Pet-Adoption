const pets = [
    // Dogs
    { name: 'Rolex', type: 'Dog', breed: 'Rottweiler', age: 'adolescence', location: 'Hyderabad, Telangana', image: 'images/Rolex.jpeg', link: 'adopt-rolex.html'},
    { name: 'Ethan', type: 'Dog', breed: 'Golden Retriever', age: 'Senior', location: 'Aurangabad, Maharashtra', image: 'images/Ethan.jpeg', link: 'adopt-ethan.html'},
    { name: 'Thor', type: 'Dog', breed: 'Beagle', age: 'Adulthood', location: 'Hyderabad, Telangana', image: 'images/Thor.jpeg', link:'adopt-thor.html' },
    
    // Cats
    { name: 'Kiwi', type: 'Cat', breed: 'Ragdoll', age: 'adulthood', location: 'Noida, Uttar Pradesh', image: 'images/Kiwi.jpeg', link:'adopt-kiwi.html'},
    { name: 'Barfi', type: 'Cat', breed: 'Bombay', age: 'puppyhood', location: 'Mumbai, Maharashtra', image: 'images/Barfi.jpeg', link:'adopt-barfi.html' },
    { name: 'Kitty', type: 'Cat', breed: 'Abyssinian', age: 'Puppyhood', location: 'New Delhi, Delhi', image: 'images/Kitty.jpeg', link:'adopt-kitty.html' },
    
    // Rabbits
    { name: 'Buggs', type: 'Rabbit', breed: 'Domestic', age: 'Weeks', location: 'Mumbai, Maharashtra', image: 'images/Buggs.jpeg', link:'adopt-buggs.html' },
    { name: 'Bella', type: 'Rabbit', breed: 'Panon Rabbit', age: 'Weeks', location: 'Mumbai, Maharashtra', image: 'images/Bella.jpeg', link:'adopt-bella.html' },
    { name: 'Brownie', type: 'Rabbit', breed: 'Domestic', age: 'Weeks', location: 'Delhi', image: 'images/Brownie.jpeg', link:'adopt-brownie.html' },
    
    // Parrots
    { name: 'Polly', type: 'Parrot', breed: 'Parakeet', age: '8', location: 'Noida', image: 'images/Polly.jpeg', link: 'ComingSoon.html' },
    { name: 'Kiwi', type: 'Parrot', breed: 'Amazon Parrot', age: 4, location: 'Tamil Nadu', image: 'images/Kiwii.jpeg', link:'ComingSoon.html' },
    { name: 'Jolly', type: 'Parrot', breed: 'Indian Ringneck Parakeet', age: 5, location: 'Noida, UP', image: 'images/Jolly.jpeg', link:'ComingSoon.html' }
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
                <p>Type: ${pet.type}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Age: ${pet.age}</p>
                <p>Location: ${pet.location}</p>
            </div>
            </a>
        `;
        petCards.innerHTML += card;  // Add new card to the display
    });
}

// Initial display of all pets
displayPets(pets);