// Select game routines
document.getElementById('selectGame').addEventListener('change', (event) => {
    var selectedGame = event.target.value;
    document.getElementById('selectGameHeader').classList.remove('active');
    document.getElementById('selectVenueHeader').classList.add('active');
    document.getElementById('selectGameHeader').style.backgroundImage = "none";
    document.getElementById('selectGameHeader').classList.add('valid');
    document.getElementById('selectedGame').value = selectedGame;
    document.getElementById('selectedGame').classList.add('border-green-600');
    document.getElementById('selectGameBlock').classList.remove('lg:grow');
    document.getElementById('selectGameBlock').classList.add('lg:shrink');
    document.getElementById('selectVenueBlock').classList.add('lg:grow');
    document.getElementById('selectVenueBlock').classList.remove('lg:shrink');
    document.getElementById('tabGame').innerHTML = "Game selected";
});

// Select venue routines
document.getElementById('selectVenue').addEventListener('change', (event) => {
    var selectedVenue = event.target.value;
    document.getElementById('selectVenueHeader').classList.remove('active');
    document.getElementById('formBlockHeader').classList.add('active');
    document.getElementById('selectVenueHeader').style.backgroundImage = "none";
    document.getElementById('selectVenueHeader').classList.add('valid');
    document.getElementById('selectedVenue').value = selectedVenue;
    document.getElementById('selectedVenue').classList.add('border-green-600');
    document.getElementById('selectVenueBlock').classList.remove('lg:grow');
    document.getElementById('selectVenueBlock').classList.add('lg:shrink');
    document.getElementById('formBlock').classList.add('lg:grow');
    document.getElementById('formBlock').classList.remove('lg:shrink');
    document.getElementById('tabVenue').innerHTML = "Venue selected";
});