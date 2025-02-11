document.getElementById('search-btn').addEventListener('click', function() {
    // Get the search input from the user
    let searchInput = document.getElementById('search-input').value.trim().toLowerCase();

    // JSON data (from your provided data)
    const data = {
        "countries": [
            {
                "id": 1,
                "name": "Australia",
                "cities": [
                    {
                        "name": "Sydney, Australia",
                        "imageUrl": "https://unsplash.com/photos/sydney-opera-house-during-daytime-7Zb7kUyQg1E",
                        "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                    },
                    {
                        "name": "Melbourne, Australia",
                        "imageUrl": "https://unsplash.com/photos/wood-logs-towered-in-water-rcAOIMSDfyc",
                        "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
                    }
                ]
            },
            {
                "id": 2,
                "name": "Japan",
                "cities": [
                    {
                        "name": "Tokyo, Japan",
                        "imageUrl": "https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-8X_Rz3giae4",
                        "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
                    },
                    {
                        "name": "Kyoto, Japan",
                        "imageUrl": "https://unsplash.com/photos/two-women-in-purple-and-pink-kimono-standing-on-street-_UIN-pFfJ7c",
                        "description": "Known for its historic temples, gardens, and traditional tea houses."
                    }
                ]
            }
        ],
        "temples": [
            {
                "id": 1,
                "name": "Angkor Wat, Cambodia",
                "imageUrl": "https://unsplash.com/photos/the-entrance-to-an-ancient-temple-in-the-jungle-o4ispOaaO48",
                "description": "A UNESCO World Heritage site and the largest religious monument in the world."
            },
            {
                "id": 2,
                "name": "Taj Mahal, India",
                "imageUrl": "https://unsplash.com/photos/taj-mahal-front-view-reflected-on-the-reflection-pool-an-ivory-white-marble-mausoleum-on-the-south-bank-of-the-yamuna-river-in-agra-uttar-pradesh-india-one-of-the-seven-wonders-of-the-world-ZjUaMF9VNDs",
                "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
            }
        ],
        "beaches": [
            {
                "id": 1,
                "name": "Bora Bora, French Polynesia",
                "imageUrl": "https://unsplash.com/photos/brown-wooden-dock-between-houses-1IfaGVN2ZAk",
                "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
            },
            {
                "id": 2,
                "name": "Copacabana Beach, Brazil",
                "imageUrl": "https://unsplash.com/photos/coconut-tree-near-shore-within-mountain-range-RN6ts8IZ4_0",
                "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
            }
        ]
    };

    // Container for search results
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Function to filter the travel data
    function filterResults(keyword) {
        const keywords = {
            beach: ['beach', 'beaches'],
            temple: ['temple', 'temples'],
            country: ['country', 'countries']
        };

        // Normalize the input and search for keyword variations
        if (keywords.beach.includes(keyword)) {
            return data.beaches;
        } else if (keywords.temple.includes(keyword)) {
            return data.temples;
        } else if (keywords.country.includes(keyword)) {
            return data.countries;
        } else {
            return []; // No matches found
        }
    }

    // Get search results based on the keyword
    const searchResults = filterResults(searchInput);

    // Display search results
    if (searchResults.length > 0) {
        searchResults.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            resultDiv.innerHTML = `
                <h3>${result.name}</h3>
                <p>${result.description}</p>
                <img src="${result.imageUrl}" alt="${result.name}" width="300">
            `;
            resultsContainer.appendChild(resultDiv);

            // If the result contains cities (for countries), loop through and display them
            if (result.cities) {
                result.cities.forEach(city => {
                    const cityDiv = document.createElement('div');
                    cityDiv.classList.add('result-item');
                    cityDiv.innerHTML = `
                        <h4>${city.name}</h4>
                        <p>${city.description}</p>
                        <img src="${city.imageUrl}" alt="${city.name}" width="300">
                    `;
                    resultsContainer.appendChild(cityDiv);
                });
            }
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found for your search.</p>';
    }
});


function ClearBtn(){
    var list=document.getElementById("results-list");
         while (list.firstChild) {
        ul.removeChild(list.firstChild);
      }
}