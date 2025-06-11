const hamButton = document.getElementById('hambMenu');
const ul = document.querySelector('ul');

hamButton.addEventListener('click', () => {
	ul.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Handle responsive display
// function updateNavDisplay() {
//   if (window.innerWidth > 512) {
//     ul.classList.add('flex-display');
//     ul.classList.remove('open');
//     hamButton.classList.remove('open');
//   } else {
//     ul.classList.remove('flex-display');
//   }
// }

// // Run on page load
// updateNavDisplay();

// // Run on resize
// window.addEventListener('resize', updateNavDisplay);

window.addEventListener('resize', () =>{
	if (window.innerWidth > 512) {
    ul.classList.add('flex-display');
    ul.classList.remove('open');
    hamButton.classList.remove('open');
  } else {
    ul.classList.remove('flex-display');
  }
});

// Temples Object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Kinshasa Democratic Republic of the Congo",
    location: "Kinshasa, DRC",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/01-Kinshasa-DRCongo-Temple-2208932.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Boston, Massachusetts",
    dedicated: "2000, October, 10",
    area: 69600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
  }
];

function displayTemples(templesData){  
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";
  templesData.forEach(data => {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
      <img src="${data.imageUrl}" alt="${data.templeName}" loading="lazy" >
      <div class="temple-details">
        <h3>${data.templeName}</h3>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Dedicated:</strong> ${data.dedicated}</p>
        <p><strong>Area:</strong> ${data.area.toLocaleString()} sq ft</p>
      </div>      
    `;
    
    container.appendChild(card);
  });
}


// Get dedication year
function getYear(dedicatedDate) {
  return parseInt(dedicatedDate.split(",")[0].trim());
}

// Filter functions
const showAll = () => displayTemples(temples);
const showOld = () => displayTemples(temples.filter(temple => getYear(temple.dedicated) < 1900));
const showNew = () => displayTemples(temples.filter(temple => getYear(temple.dedicated) > 2000));
const showLarge = () => displayTemples(temples.filter(temple => temple.area > 90000));
const showSmall = () => displayTemples(temples.filter(temple => temple.area < 10000));

// Event listeners
// Remove 'active' from all
document.querySelectorAll(".menu-link").forEach(btn => btn.classList.remove("active"));

document.getElementById("showAll").addEventListener("click", e => { e.preventDefault(); showAll(); this.classList.add("active"); });
document.getElementById("templesOld").addEventListener("click", e => { e.preventDefault(); showOld(); this.classList.add("active"); });
document.getElementById("templesNew").addEventListener("click", e => { e.preventDefault(); showNew(); this.classList.add("active"); });
document.getElementById("templesLarge").addEventListener("click", e => { e.preventDefault(); showLarge(); this.classList.add("active");});
document.getElementById("templesSmall").addEventListener("click", e => { e.preventDefault(); showSmall(); this.classList.add("active"); });

// Load all by default
showAll();

