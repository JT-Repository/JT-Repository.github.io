// Booking functions

const gameSelect = document.querySelector('#selectGame');
const gameHeader = document.querySelector('#selectGameHeader');
const gameBlock = document.querySelector('#selectGameBlock');
const gameSelection = document.querySelector('#selectedGame');
const selectedGameTab = document.querySelector('#tabGame');
const gameChange = document.querySelector('#changeGame');
const venueSelect = document.querySelector('#selectVenue');
const venueHeader = document.querySelector('#selectVenueHeader');
const venueBlock = document.querySelector('#selectVenueBlock');
const venueSelection = document.querySelector('#selectedVenue');
const selectedVenueTab = document.querySelector('#tabVenue');
const venueChange = document.querySelector('#changeVenue');
const formHeader = document.querySelector('#formBlockHeader');
const formBlock = document.querySelector('#formBlock');

gameSelect.addEventListener('change', (event) => {
    let selectedGame = event.target.value;
    if (venueSelect.selectedIndex >= 1) {
        gameHeader.classList.remove('active');
        gameHeader.classList.add('bg-none');
        gameBlock.classList.remove('lg:grow');
        gameBlock.classList.add('lg:shrink');
        formBlock.classList.add('lg:grow');
        formBlock.classList.remove('lg:shrink');
        formHeader.classList.add('active');
    } else {
        gameHeader.classList.remove('active');
        gameHeader.classList.add('bg-none');
        venueHeader.classList.add('active');
        gameBlock.classList.remove('lg:grow');
        gameBlock.classList.add('lg:shrink');
        venueBlock.classList.add('lg:grow');
        venueBlock.classList.remove('lg:shrink');
    }
    gameHeader.classList.add('valid');
    gameSelection.classList.add('border-green-600');
    gameSelection.value = selectedGame;
    selectedGameTab.innerHTML = "Game selected";
});

// Select venue routines
venueSelect.addEventListener('change', (event) => {
    let selectedVenue = event.target.value;
    venueHeader.classList.remove('active');
    formHeader.classList.add('active');
    venueHeader.classList.add('valid');
    venueHeader.classList.add('bg-none');
    venueBlock.classList.remove('lg:grow');
    venueBlock.classList.add('lg:shrink');
    formBlock.classList.add('lg:grow');
    formBlock.classList.remove('lg:shrink');
    venueSelection.classList.add('border-green-600');
    venueSelection.value = selectedVenue;
    selectedVenueTab.innerHTML = "Venue selected";
});

gameChange.addEventListener('click', (event) => {
    formHeader.classList.remove('active');
    gameHeader.classList.add('active');
    gameHeader.classList.remove('valid');
    formBlock.classList.remove('lg:grow');
    formBlock.classList.add('lg:shrink');
    gameBlock.classList.add('lg:grow');
    gameBlock.classList.remove('lg:shrink');
    gameSelect.selectedIndex = 0;
    gameSelection.value = selectedGame;
});

venueChange.addEventListener('click', (event) => {
    formHeader.classList.remove('active');
    venueHeader.classList.add('active');
    venueHeader.classList.remove('valid');
    formBlock.classList.remove('lg:grow');
    formBlock.classList.add('lg:shrink');
    venueBlock.classList.add('lg:grow');
    venueBlock.classList.remove('lg:shrink');
    venueSelect.selectedIndex = 0;
    venueSelection.value = selectedVenue;
});