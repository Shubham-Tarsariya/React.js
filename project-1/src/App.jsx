import Card from './Components/Card'
import Product_Card from './Components/Product_Card';
import Card1 from './Components/Card1';

const App = () => {
  const user =
    [
      // {
      //   "photo": "https://randomuser.me/api/portraits/men/1.jpg",
      //   "name": "John Smith",
      //   "bio": "Travel lover and photographer",
      //   "followers": 1200,
      //   "photos": 340
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/women/2.jpg",
      //   "name": "Emma Johnson",
      //   "bio": "Food blogger and chef",
      //   "followers": 2300,
      //   "photos": 410
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/men/3.jpg",
      //   "name": "Michael Brown",
      //   "bio": "Fitness trainer and motivator",
      //   "followers": 1800,
      //   "photos": 290
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/women/4.jpg",
      //   "name": "Sophia Davis",
      //   "bio": "Fashion designer and stylist",
      //   "followers": 3100,
      //   "photos": 520
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/men/5.jpg",
      //   "name": "Daniel Wilson",
      //   "bio": "Tech enthusiast and coder",
      //   "followers": 900,
      //   "photos": 150
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/women/6.jpg",
      //   "name": "Olivia Martinez",
      //   "bio": "Digital artist and illustrator",
      //   "followers": 2700,
      //   "photos": 460
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/men/7.jpg",
      //   "name": "James Anderson",
      //   "bio": "Nature photographer",
      //   "followers": 1500,
      //   "photos": 380
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/women/8.jpg",
      //   "name": "Ava Taylor",
      //   "bio": "Lifestyle influencer",
      //   "followers": 4200,
      //   "photos": 610
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/men/9.jpg",
      //   "name": "William Thomas",
      //   "bio": "Music producer",
      //   "followers": 2100,
      //   "photos": 330
      // },
      // {
      //   "photo": "https://randomuser.me/api/portraits/women/10.jpg",
      //   "name": "Isabella Moore",
      //   "bio": "Travel vlogger",
      //   "followers": 3500,
      //   "photos": 540
      // }

        {
          "id": 1,
          "name": "Vanilla Ice Cream",
          "description": "Smooth and creamy classic vanilla bean flavor.",
          "tags": ["Vegan", "Gluten Free", "Organic"],
          "toppings": ["Choco chips", "Nuts"],
          "price": 10.00,
          "deliveryFee": 2.00,
          "image": "https://i.pinimg.com/1200x/e1/60/4f/e1604fefcae1a04721f7c78a9821dc0c.jpg"
        },
        {
          "id": 2,
          "name": "Dark Chocolate",
          "description": "Rich 70% cocoa dark chocolate with a velvety finish.",
          "tags": ["Dairy Free", "Organic"],
          "toppings": ["Sea Salt", "Brownie Bits"],
          "price": 12.50,
          "deliveryFee": 3.00,
          "image": "https://i.pinimg.com/736x/8e/aa/db/8eaadb2b2e14e21452a170221395b429.jpg"
        },
        {
          "id": 3,
          "name": "Strawberry Swirl",
          "description": "Fresh farm strawberries blended with sweet cream.",
          "tags": ["Gluten Free", "Fresh Fruit"],
          "toppings": ["Fresh Berries", "Syrup"],
          "price": 9.00,
          "deliveryFee": 1.50,
          "image": "https://i.pinimg.com/736x/e0/94/4b/e0944b50ed1afc599d151a7ea3ca0a17.jpg"
        },
        {
          "id": 4,
          "name": "Mango Sorbet",
          "description": "Refreshing tropical Alphonso mango delight.",
          "tags": ["Vegan", "Fat Free"],
          "toppings": ["Mint Leaves", "Coconut Flakes"],
          "price": 8.50,
          "deliveryFee": 2.00,
          "image": "https://i.pinimg.com/736x/1c/b3/e8/1cb3e8b620d6ff3075920f5110baeeda.jpg"
        },
        {
          "id": 5,
          "name": "Pistachio Dream",
          "description": "Authentic roasted Italian pistachios.",
          "tags": ["Organic", "Premium"],
          "toppings": ["Crushed Pistachios"],
          "price": 14.00,
          "deliveryFee": 2.50,
          "image": "https://i.pinimg.com/736x/22/38/3c/22383cea7b2b40754e073d5bef603373.jpg"
        },
        {
          "id": 6,
          "name": "Cookies & Cream",
          "description": "Crunchy chocolate cookies mixed into milk cream.",
          "tags": ["Classic", "Kid Friendly"],
          "toppings": ["Oreo Crumb", "Caramel"],
          "price": 11.00,
          "deliveryFee": 2.00,
          "image": "https://i.pinimg.com/1200x/7c/e6/74/7ce67489e0483668fe345d5392b2ee28.jpg"
        },
        {
          "id": 7,
          "name": "Blueberry Bliss",
          "description": "Wild blueberries with a hint of lavender.",
          "tags": ["Organic", "Unique"],
          "toppings": ["White Choco", "Berries"],
          "price": 13.00,
          "deliveryFee": 2.00,
          "image": "https://i.pinimg.com/1200x/51/75/65/5175655059fdbeda28140713536cc067.jpg"
        },
        {
          "id": 8,
          "name": "Coffee Roasted",
          "description": "Strong Arabica coffee infused creamy gelato.",
          "tags": ["Caffeine Hit", "Low Sugar"],
          "toppings": ["Coffee Beans", "Cocoa"],
          "price": 10.50,
          "deliveryFee": 1.50,
          "image": "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
        },
        {
          "id": 9,
          "name": "Caramel Pecan",
          "description": "Buttery caramel sauce with toasted pecans.",
          "tags": ["Sweet", "Crunchy"],
          "toppings": ["Extra Caramel", "Pecans"],
          "price": 12.00,
          "deliveryFee": 3.00,
          "image": "https://i.pinimg.com/1200x/ba/69/4d/ba694d3eb48ada5e803b6736eb7a1377.jpg"
        },
        {
          "id": 10,
          "name": "Mint Choco Chip",
          "description": "Cool peppermint with melt-in-mouth chocolate flakes.",
          "tags": ["Refreshing", "Vegan"],
          "toppings": ["Dark Choco", "Mint"],
          "price": 9.50,
          "deliveryFee": 2.00,
          "image": "https://i.pinimg.com/1200x/8f/24/24/8f2424a5dd39d971439d4a5687da3066.jpg"
        }
      ]
    ;
  const card1 = [
  {
    "id": 1,
    "company": "Amazon",
    "logo": "https://i.pinimg.com/736x/ff/a4/07/ffa407cb9ff38190e7ab88d15b9154d2.jpg",
    "postedTime": "5 days ago",
    "title": "Senior UI/UX Designer",
    "tags": ["Part-time", "Senior level"],
    "salary": "$120/hr",
    "location": "San Francisco, CA",
  },
  {
    "id": 2,
    "company": "Google",
    "logo": "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    "postedTime": "30 days ago",
    "title": "Graphic Designer",
    "tags": ["Full-time", "Flexible schedule"],
    "salary": "$150 - 220k",
    "location": "Mountain View, CA",
  },
  {
    "id": 3,
    "company": "Dribbble",
    "logo": "https://i.pinimg.com/736x/f7/b4/08/f7b4081f12e3f58be27b104c40f497fd.jpg",
    "postedTime": "18 days ago",
    "title": "Senior Motion Designer",
    "tags": ["Contract", "Remote"],
    "salary": "$85/hr",
    "location": "San Francisco, CA",
  },
  {
    "id": 4,
    "company": "Meta",
    "logo": "https://i.pinimg.com/736x/e2/5b/d8/e25bd8e098771222f6be61fc79454189.jpg",
    "postedTime": "3 months ago",
    "title": "UX Designer",
    "tags": ["Full-time", "In office"],
    "salary": "$200 - 250k",
    "location": "New York, NY",
  },
  {
    "id": 5,
    "company": "Airbnb",
    "logo": "https://i.pinimg.com/736x/84/ae/90/84ae90dd29800383b5c6fd1e0ee4fba7.jpg",
    "postedTime": "1 day ago",
    "title": "Junior UX/UI Designer",
    "tags": ["Contract", "Remote"],
    "salary": "$100/hr",
    "location": "San Francisco, CA",
  },
  {
    "id": 6,
    "company": "Apple",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "postedTime": "6 days ago",
    "title": "Graphic Designer",
    "tags": ["Full-time", "Flexible schedule"],
    "salary": "$85 - 120k",
    "location": "Cupertino, CA",
  }
];

  const card2 = [];

  return (
    <>
    
      <section className="flex-wrap gap-6 px-6 py-5 justify-center grid grid-cols-3">
      {card1.map(function (job, i) {
          return (
            <div key={i} >
              <Card1 data={job} />
            </div>
          )
        })}
      </section>

      <section className="flex-wrap gap-6 px-6 py-5 justify-center grid grid-cols-3">
      {user.map((product) => (
        <Product_Card key={product.id} product={product} />
      ))}
      </section>

      {/* <section className="flex flex-wrap gap-6 px-6 py-4 justify-center">
        

        {user.map(function (info, i) {
          console.log(i)
          return (
            <div key={i} >
              <Card data={info} />
            </div>
          )
        })}
 

      </section> */}
    </>
  );
};

export default App;
