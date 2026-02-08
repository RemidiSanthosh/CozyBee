// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };

const sampleListings = [

  {
  title: "Cozy Beachfront Cottage",
  description: "Escape to this charming beachfront cottage for a relaxing getaway.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
  price: 1500,
  location: "Malibu",
  country: "United States",
  geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  category: "beach"
},

{
  title: "Modern Loft in Downtown",
  description: "Stay in the heart of the city in this stylish loft apartment.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
  price: 1200,
  location: "New York City",
  country: "United States",
  geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
  category: "iconic"
},

{
  title: "Mountain Retreat",
  description: "Unplug and unwind in this peaceful mountain cabin.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
  price: 1000,
  location: "Aspen",
  country: "United States",
  geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  category: "mountains"
},

{
  title: "Historic Villa in Tuscany",
  description: "Experience the charm of Tuscany in this beautifully restored villa.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
  price: 2500,
  location: "Florence",
  country: "Italy",
  geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  category: "castles"
},

{
  title: "Secluded Treehouse Getaway",
  description: "Live among the treetops in this unique treehouse retreat.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
  price: 800,
  location: "Portland",
  country: "United States",
  geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  category: "camping"
},

{
  title: "Beachfront Paradise",
  description: "Step out of your door onto the sandy beach.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
  price: 2000,
  location: "Cancun",
  country: "Mexico",
  geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  category: "beach"
},

{
  title: "Luxury Penthouse with City Views",
  description: "Indulge in luxury living with panoramic city views.",
  image: 
  { filename: "listingimage", 
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
   },
  price: 3500,
  location: "Los Angeles",
  country: "United States",
  geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
  category: "trending"
},

{
  title: "Ski-In/Ski-Out Chalet",
  description: "Hit the slopes right from your doorstep.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
  price: 3000,
  location: "Verbier",
  country: "Switzerland",
  geometry: { type: "Point", coordinates: [7.2286, 46.0961] },
  category: "mountains"
},

{
  title: "Safari Lodge in the Serengeti",
  description: "Experience the thrill of the wild.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
  geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
  category: "trending"
},

{
  title: "Historic Canal House",
  description: "Beautifully preserved canal house in Amsterdam.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
  geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  category: "iconic"
},

{
  title: "Private Island Retreat",
  description: "Have an entire island to yourself.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
  geometry: { type: "Point", coordinates: [178.0650, -17.7134] },
  category: "beach"
},

{
  title: "Beachfront Villa in Greece",
  description: "Mediterranean beachfront luxury villa.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60" },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  geometry: { type: "Point", coordinates: [25.3289, 37.4467] },
  category: "beach"
},
  {
  title: "Goa Beachfront Villa",
  description: "Luxury beachfront villa near Baga Beach",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    filename: "goa-beach"
  },
  price: 6500,
  location: "Goa",
  country: "India",
  geometry: { type: "Point", coordinates: [73.7537, 15.2993] },
  category: "beach"
},

{
  title: "Manali Mountain Cabin",
  description: "Cozy wooden cabin surrounded by snow mountains",
  image: {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    filename: "manali-cabin"
  },
  price: 4200,
  location: "Manali",
  country: "India",
  geometry: { type: "Point", coordinates: [77.1892, 32.2432] },
  category: "mountains"
},

{
  title: "Mumbai City Apartment",
  description: "Modern apartment in the heart of Mumbai",
  image: {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    filename: "mumbai-apartment"
  },
  price: 5200,
  location: "Mumbai",
  country: "India",
  geometry: { type: "Point", coordinates: [72.8777, 19.0760] },
  category: "iconic"
},

{
  title: "Jaipur Palace Stay",
  description: "Royal heritage palace experience",
  image: {
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=60",
    filename: "jaipur-palace"
  },
  price: 5800,
  location: "Jaipur",
  country: "India",
  geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  category: "castles"
},

{
  title: "Rishikesh Riverside Camping",
  description: "Camping by the Ganga river",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    filename: "rishikesh-camp"
  },
  price: 2200,
  location: "Rishikesh",
  country: "India",
  geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  category: "camping"
},

{
  title: "Kerala Backwater Houseboat",
  description: "Traditional houseboat stay",
  image: {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    filename: "kerala-houseboat"
  },
  price: 4800,
  location: "Alappuzha",
  country: "India",
  geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  category: "trending"
},

{
  title: "Ooty Hills Cottage",
  description: "Peaceful cottage with valley view",
  image: {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    filename: "ooty-cottage"
  },
  price: 3500,
  location: "Ooty",
  country: "India",
  geometry: { type: "Point", coordinates: [76.6950, 11.4102] },
  category: "rooms"
},

{
  title: "Paris City Studio",
  description: "Romantic studio near Eiffel Tower",
  image: {
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    filename: "paris-studio"
  },
  price: 9500,
  location: "Paris",
  country: "France",
  geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  category: "iconic"
},

{
  title: "Swiss Alps Mountain Chalet",
  description: "Luxury chalet in Swiss Alps",
  image: {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    filename: "swiss-chalet"
  },
  price: 11000,
  location: "Zermatt",
  country: "Switzerland",
  geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
  category: "mountains"
},

{
  title: "Dubai Marina Apartment",
  description: "Luxury apartment with skyline view",
  image: {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    filename: "dubai-apartment"
  },
  price: 10500,
  location: "Dubai",
  country: "UAE",
  geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  category: "iconic"
},

{
  title: "New York Loft",
  description: "Modern loft in Manhattan",
  image: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    filename: "ny-loft"
  },
  price: 13000,
  location: "New York",
  country: "USA",
  geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
  category: "trending"
},

{
  title: "Tokyo Compact Studio",
  description: "Minimalist studio in Tokyo",
  image: {
    url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=60",
    filename: "tokyo-studio"
  },
  price: 9000,
  location: "Tokyo",
  country: "Japan",
  geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  category: "rooms"
},

{
  title: "Iceland Glass Dome Stay",
  description: "Northern lights experience in glass dome",
  image: {
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    filename: "iceland-dome"
  },
  price: 11500,
  location: "Reykjavik",
  country: "Iceland",
  geometry: { type: "Point", coordinates: [-21.8174, 64.1265] },
  category: "domes"
},

{
  title: "Venice Canal House",
  description: "Classic house beside Venice canals",
  image: {
    url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    filename: "venice-house"
  },
  price: 9800,
  location: "Venice",
  country: "Italy",
  geometry: { type: "Point", coordinates: [12.3155, 45.4408] },
  category: "iconic"
},

{
  title: "Norway Arctic Cabin",
  description: "Cabin under northern lights",
  image: {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    filename: "norway-arctic"
  },
  price: 10800,
  location: "Tromsø",
  country: "Norway",
  geometry: { type: "Point", coordinates: [18.9553, 69.6492] },
  category: "arctic"
},

{
  title: "Caribbean Cruise Suite",
  description: "Luxury cruise suite with ocean view",
  image: {
    url: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60",
    filename: "cruise-suite"
  },
  price: 14000,
  location: "Caribbean Sea",
  country: "International Waters",
  geometry: { type: "Point", coordinates: [-61.0, 15.0] },
  category: "cruise"
},

{
  title: "Udaipur Lake View Haveli",
  description: "Heritage haveli overlooking Lake Pichola",
  image: {
    url: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=60",
    filename: "udaipur-haveli"
  },
  price: 6200,
  location: "Udaipur",
  country: "India",
  geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
  category: "castles"
},

{
  title: "Coorg Coffee Plantation Stay",
  description: "Stay amidst lush coffee plantations",
  image: {
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60",
    filename: "coorg-plantation"
  },
  price: 4100,
  location: "Coorg",
  country: "India",
  geometry: { type: "Point", coordinates: [75.8069, 12.3375] },
  category: "trending"
},

{
  title: "Pondicherry French Villa",
  description: "Colonial-style villa near the beach",
  image: {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    filename: "pondicherry-villa"
  },
  price: 5400,
  location: "Pondicherry",
  country: "India",
  geometry: { type: "Point", coordinates: [79.8083, 11.9416] },
  category: "rooms"
},

{
  title: "Andaman Beach Eco Resort",
  description: "Eco-friendly resort by turquoise waters",
  image: {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
    filename: "andaman-beach"
  },
  price: 7800,
  location: "Havelock Island",
  country: "India",
  geometry: { type: "Point", coordinates: [92.9750, 11.9716] },
  category: "beach"
},

{
  title: "Lonavala Hill Pool Villa",
  description: "Private pool villa in hill station",
  image: {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    filename: "lonavala-pool"
  },
  price: 6900,
  location: "Lonavala",
  country: "India",
  geometry: { type: "Point", coordinates: [73.4072, 18.7557] },
  category: "pools"
},

{
  title: "Bali Jungle Villa",
  description: "Private villa surrounded by tropical jungle",
  image: {
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
    filename: "bali-villa"
  },
  price: 9800,
  location: "Ubud",
  country: "Indonesia",
  geometry: { type: "Point", coordinates: [115.2625, -8.5069] },
  category: "trending"
}

];

module.exports = sampleListings;
