document.addEventListener('DOMContentLoaded', () => {
            fetch('travel_recommendation_api.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const placesContainer = document.getElementById('places-container');
                    
                    if (!placesContainer) {
                        console.error('The places-container element is missing in the HTML.');
                        return;
                    }

                    // Loop through countries and their cities
                    data.countries.forEach(country => {
                        const countryElement = document.createElement('div');
                        countryElement.classList.add('country');
                        countryElement.innerHTML = `<h2>${country.name}</h2>`;
                        placesContainer.appendChild(countryElement);
                        
                        country.cities.forEach(city => {
                            const cityElement = document.createElement('div');
                            cityElement.classList.add('place');
                            cityElement.innerHTML = `
                                <h3>${city.name}</h3>
                                <p>${city.description}</p>
                                <img src="${city.imageUrl}" alt="${city.name}" width="300">
                            `;
                            placesContainer.appendChild(cityElement);
                        });
                    });

                    // Loop through temples
                    data.temples.forEach(temple => {
                        const templeElement = document.createElement('div');
                        templeElement.classList.add('place');
                        templeElement.innerHTML = `
                            <h3>${temple.name}</h3>
                            <p>${temple.description}</p>
                            <img src="${temple.imageUrl}" alt="${temple.name}" width="300">
                        `;
                        placesContainer.appendChild(templeElement);
                    });

                    // Loop through beaches
                    data.beaches.forEach(beach => {
                        const beachElement = document.createElement('div');
                        beachElement.classList.add('place');
                        beachElement.innerHTML = `
                            <h3>${beach.name}</h3>
                            <p>${beach.description}</p>
                            <img src="${beach.imageUrl}" alt="${beach.name}" width="300">
                        `;
                        placesContainer.appendChild(beachElement);
                    }); 
                })
                .catch(error => {
                    console.error('There was an error fetching the data:', error);
                });
        });

    

document.getElementById('search-button').addEventListener('click', function() {
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
                    "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                  },
                  {
                    "name": "Melbourne, Australia",
                    "imageUrl": "https://images.unsplash.com/photo-1526577386149-3a390449b227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                    "imageUrl": "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
                  },
                  {
                    "name": "Kyoto, Japan",
                    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "description": "Known for its historic temples, gardens, and traditional tea houses."
                  }
                ]
              },
              {
                "id": 3,
                "name": "Brazil",
                "cities": [
                  {
                    "name": "Rio de Janeiro, Brazil",
                    "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
                  },
                  {
                    "name": "São Paulo, Brazil",
                    "imageUrl": "https://plus.unsplash.com/premium_photo-1679689962301-adfa3c77d624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
                  }
                ]
              }
            ],
            "temples": [
              {
                "id": 1,
                "name": "Angkor Wat, Cambodia",
                "imageUrl": "https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                "imageUrl": "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
              },
              {
                "id": 2,
                "name": "Copacabana Beach, Brazil",
                "imageUrl": "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <img src="${result.imageUrl}" alt="${result.name}" width="300">
                <h3>${result.name}</h3>
                <p>${result.description}</p>
                <button class="visit-btn>Visit me</button>
          
            `;
            resultsContainer.appendChild(resultDiv);

            // If the result contains cities (for countries), loop through and display them
            if (result.cities) {
                result.cities.forEach(city => {
                    const cityDiv = document.createElement('div');
                    cityDiv.classList.add('result-item');
                    cityDiv.innerHTML = `
                    <img src="${city.imageUrl}" alt="${city.name}" width="300">
                        <h4>${city.name}</h4>
                        <p>${city.description}</p>
                        <button class="visit-btn>Visit me</button>
                      
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
// Get the container element
var resultsContainer = document.getElementById('search-results');

// Remove all child elements inside the container
while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
   }
 }




 