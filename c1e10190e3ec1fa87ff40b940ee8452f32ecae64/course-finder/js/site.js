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
    let directions = e.target.getAttribute('data-location');
    let map = e.target.nextElementSibling;
    map.innerHTML = '<div class="relative" id="courseLocationMap"><iframe class="h-80 xl:h-96" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + directions + '" id="courseLocation"></iframe></div>';
}