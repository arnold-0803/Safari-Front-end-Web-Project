import img1 from "../images/1.avif";
import img2 from "../images/2.avif";
import img3 from "../images/3.avif";
import img4 from "../images/4.jpeg";

// NAVBAR MENU DATA
export const MenuItems =[
  {
    title: "Home",
    url: "/",
    cName: "nav-link",
    icon: "fa-solid fa-house-user"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-link",
    icon: "fa-solid fa-circle-info"
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-link",
    icon: "fa-solid fa-briefcase"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-link",
    icon: "fa-solid fa-address-book"
  },
  {
    title: "Sign Up",
    url: "/",
    cName: "nav-link-mobile"
  }
];


// POPULAR PLACES DATA
export const poularPlaceData = [
  {
    id: 0,
    heading: "Mount Kenya",
    text: "At 5,199 m, Mount Kenya is the second highest peak in Africa. It is an ancient extinct volcano, which during its period of activity (3.1-2.6 million years ago) is thought to have risen to 6,500 m. There are 12 remnant glaciers on the mountain, all receding rapidly, and four secondary peaks that sit at the head of the U-shaped glacial valleys. With its rugged glacier-clad summits and forested middle slopes, Mount Kenya is one of the most impressive landscapes in East Africa. The evolution and ecology of its afro-alpine flora provide an outstanding example of ecological and biological processes. Through the Lewa Wildlife Conservancy and Ngare Ndare Forest Reserve, the property also incorporates lower lying scenic foothills and arid habitats of high biodiversity, situated in the ecological transition zone between the mountain ecosystem and the semi-arid savanna grasslands. The area also lies within the traditional migrating route of the African elephant population.",
    image1: img1,
    image2: img2,
    customClass: "destination-one"
  },
  {
    id: 1,
    heading: "The Great Rift Valley in Kenya",
    text: "The Great Rift Valley in Kenya is a geological wonder that stretches approximately 6,000 kilometers (3,700 miles) from the Middle East to Mozambique in East Africa. In Kenya, it manifests as a striking trench-like depression running from the northern part of the country to the south. The formation of the Great Rift Valley in Kenya is attributed to the tectonic activity associated with the East African Rift System. This massive geological fault line was created by the shifting of tectonic plates millions of years ago, resulting in the stretching and thinning of the Earth's crust. The resultant depression forms a vast trench-like valley, characterized by steep cliffs, escarpments, and volcanic peaks. The Rift Valley in Kenya is renowned for its rich biodiversity. The diverse habitats within the valley support a wide variety of plant and animal species, including many endemic and threatened species, in simpleterms is a home to iconic African wildlife.",
    exText: "The valley has also been inhabited by various indigenous ethnic groups for thousands of years, and it holds significant cultural importance for the people of Kenya. Additionally, the Rift Valley is home to numerous archaeological sites where evidence of early human ancestors and ancient civilizations has been found, including stone tools, fossil remains, and rock art. Overall, the Rift Valley in Kenya is a fascinating and diverse region that showcases the natural beauty, geological wonders, and cultural heritage of East Africa. Its breathtaking landscapes and rich biodiversity make it a must-visit destination for anyone exploring Kenya's natural treasures.",
    image1: img3,
    image2: img4,
    customClass: "destination-one-reverse"
  }
]