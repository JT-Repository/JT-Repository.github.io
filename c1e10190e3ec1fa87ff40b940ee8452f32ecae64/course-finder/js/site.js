function topMenu() {
    return {
        isOpen: false
    }
}

function searchCourses() {
    return {
        loadingCourses: false,
        countyList: '',
        search: '',
        searchResults: '',
        pageNumber: 0,
        size: 10,
        total: '',
        init() {
            loadingCourses = true
            fetch('golf.json')
                .then(res => res.json())
                .then(json => {
                    loadingCourses = false
                    this.searchResults = json.courses;
                    this.countyList = [...new Set(this.searchResults.map(item => item.location.county))].sort();
                    console.log('Courses loaded')
            })
        },
        getSearchResults() {
            const start = this.pageNumber * this.size,
            end = start + this.size;
            if (this.search === "") {
                this.total = this.searchResults.length;
                return this.searchResults.slice(start, end);
            }
            this.total = this.searchResults.filter((item) => {
                return (item.title + item.location.county)
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
                }).length;
            return this.searchResults
            .filter((item) => {
                return (item.title + item.location.county)
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
                })
            .slice(start, end);
        },
        // pagination
        pages() {
            return Array.from({
                length: Math.ceil(this.total / this.size),
            });
        },
        nextPage() {
            this.pageNumber++;
        },
        prevPage() {
            this.pageNumber--;
        },
        pageCount() {
            return Math.ceil(this.total);
        },
        startResults() {
            return this.pageNumber * this.size + 1;
        },
        endResults() {
            let resultsOnPage = (this.pageNumber + 1) * this.size;
            if (resultsOnPage <= this.total) {
                return resultsOnPage;
            }
            return this.total;
        },
        viewPage(index) {
            this.pageNumber = index;
        }
    }
}

function getFeaturedCourse() {
    return {
        loadingFeatured: false,
        featuredCourse: [],
        init() {
            loadingFeatured = true
            fetch('golf.json')
                .then(res => res.json())
                .then(json => {
                    loadingFeatured = false
                    this.featuredCourse = json.courses;
                    console.log('Featured course loaded')
            })
        }
    }
}

function getCourseReviews() {
    return {
        loadingReviews: false,
        courseReviews: [],
        init() {
            loadingReviews = true
            fetch('https://www.fakerestapi.com/datasets/api/v1/amazon-echo-reviews.json')
                .then(res => res.json())
                .then(json => {
                    loadingReviews = false
                    this.courseReviews = json.data;
                    console.log('Reviews loaded')
            })
        }
    }
}

function showCourseMap(e) {
    var existingmap = document.getElementById("courseLocationMap");
    if (existingmap) {
        existingmap.remove();
    }
    let directions = e.target.getAttribute('data-location');
    let map = e.target.nextElementSibling;
    map.innerHTML = '<div class="relative" :class="{ "px-3 py-2.5 lg:py-3 border-t border-zinc-200" : directionsOpen }" id="courseLocationMap"><iframe class="h-80 xl:h-96" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + directions + '" id="courseLocation"></iframe></div>';
}

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val) {
    return (val - 273).toFixed(2)
}
btn.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${tempature} C</span>`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    })
})

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=3045dd712ffe6e702e3245525ac7fa38