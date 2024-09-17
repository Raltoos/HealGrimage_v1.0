// import { useState, useEffect } from "react";
// import axios from "axios";

// const ImageSlider = () => {
//   const [treatment, setTreatment] = useState("all");
//   const [city, setCity] = useState("all");
//   const [budget, setBudget] = useState("any");
//   const [search, setSearch] = useState(""); // State for search query
//   const [hospitals, setHospitals] = useState([]);

//   // Function to fetch hospitals based on filters and search query
//   const fetchHospitals = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/hospitals", {
//         params: { treatment, city, budget, search },
//       });
//       console.log("Fetched hospitals response:", response); // Log the full response
//       console.log("Fetched hospitals data:", response.data); // Log the 
//       setHospitals(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching hospitals", error);
//       setHospitals([]);
//     }
//   };

//   // Fetch hospitals whenever filters or search query change
//   useEffect(() => {
//     fetchHospitals();
//   }, [treatment, city, budget, search]);

//   // Function to handle Enter key press
//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchHospitals();
//     }
//   };

//   return (
//     <section
//       id="plans"
//       className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
//     >
//       <div className="container-custom flex flex-col gap-[5rem] items-center">
//         {/* Filters */}
//         <div className="bg-[#003B6C] text-white p-5 rounded-3xl flex justify-between gap-5 items-center mt-5">
//           <span className="md:text-5xl text-2xl">Treatments and Cities</span>
//           <div className="flex gap-5">
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center">
//               <span className="md:text-7xl text-5xl">26</span>
//               <span className="text-sm">Treatments</span>
//             </div>
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center">
//               <span className="md:text-7xl text-5xl">12</span>
//               <span className="text-sm w-[1.5rem]">Cities</span>
//             </div>
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center self-end">
//               <span className="md:text-7xl text-5xl">1443</span>
//               <span className="text-sm w-[1.5rem]">Hospitals</span>
//             </div>
//           </div>
//         </div>

//         <div className="w-[90%] grid md:grid-cols-3 gap-2">
//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Treatment</span>
//             <select
//               value={treatment}
//               onChange={(e) => setTreatment(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Orthopedic">Orthopedic</option>
//               <option value="Cardiovascular">Cardiovascular</option>
//               <option value="Ayurveda">Ayurveda</option>
//               <option value="Hair Transplant">Hair Transplant</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select City</span>
//             <select
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Pune">Pune</option>
//               <option value="Bengaluru">Bengaluru</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Budget</span>
//             <select
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="any">Any</option>
//               <option value="1L - 5L">1L - 5L</option>
//               <option value="5L - 10L">5L - 10L</option>
//               <option value="10L+">10L+</option>
//             </select>
//           </div>
//         </div>

//         {/* Display Filtered Hospitals */}
//         <div className="w-[90%] max-h-[500px] rounded-xl flex flex-col gap-3 overflow-y-auto">
//           <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2 overflow-y-auto">
//             <div className="flex gap-2 w-[2rem] items-center">
//               Show
//               <div>
//                 <select name="" id="" className="p-1 border border-black">
//                   <option value="">5</option>
//                   <option value="">10</option>
//                   <option value="">15</option>
//                 </select>
//               </div>
//               Entries
//             </div>
//             <div className="flex gap-2 h-[2rem] items-center">
//               Search :
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 onKeyDown={handleSearchKeyPress}
//                 className="p-1 rounded-sm border border-black"
//                 placeholder="Search"
//               />
//             </div>
//           </div>

//           {/* Scrollable Hospital List */}
//           <div className="w-full bg-white rounded-2xl flex flex-col gap-5 items-center p-2">
//             {hospitals.length > 0 ? (
//               hospitals.map((hospital) => (
//                 <div
//                   key={hospital._id}
//                   className="w-full h-[200px] border border-black rounded-md p-4"
//                 >
//                   <h3>{hospital.name}</h3>
//                   <p>City: {hospital.city}</p>
//                   <p>Treatment: {hospital.treatment}</p>
//                   <p>Budget: {hospital.budget}</p>
//                   <button
//           // onClick={() => handleAddToCart(hospital)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
//         >
//           Add to Cart
//         </button>
                 
//                 </div>
//               ))
//             ) : (
//               <div>No hospitals found</div>
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ImageSlider;




import { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [treatment, setTreatment] = useState("all");
  const [city, setCity] = useState("all");
  const [budget, setBudget] = useState("any");
  const [search, setSearch] = useState(""); // State for search query
  const [hospitals, setHospitals] = useState([]);
  const [cart, setCart] = useState(new Set()); // State for cart, using a Set to avoid duplicates

  // Function to fetch hospitals based on filters and search query
  const fetchHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/hospitals", {
        params: { treatment, city, budget, search },
      });
      setHospitals(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching hospitals", error);
      setHospitals([]);
    }
  };

  // Fetch hospitals whenever filters or search query change
  useEffect(() => {
    fetchHospitals();
  }, [treatment, city, budget, search]);

  // Function to handle Enter key press
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchHospitals();
    }
  };

  // Function to handle adding/removing from cart
  const handleCartClick = (hospital) => {
    setCart((prevCart) => {
      const newCart = new Set(prevCart);
      if (newCart.has(hospital._id)) {
        newCart.delete(hospital._id); // Remove from cart
      } else {
        newCart.add(hospital._id); // Add to cart
      }
      return newCart;
    });
  };

  // Function to check if a hospital is in the cart
  const isInCart = (hospitalId) => cart.has(hospitalId);

  return (
    <section
      id="plans"
      className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
    >
      <div className="container-custom flex flex-col gap-[5rem] items-center">
        {/* Filters */}
        <div className="bg-[#003B6C] text-white p-5 rounded-3xl flex justify-between gap-5 items-center mt-5">
          <span className="md:text-5xl text-2xl">Treatments and Cities</span>
          <div className="flex gap-5">
            <div className="flex flex-col w-[10rem] h-full items-center justify-center">
              <span className="md:text-7xl text-5xl">26</span>
              <span className="text-sm">Treatments</span>
            </div>
            <div className="flex flex-col w-[10rem] h-full items-center justify-center">
              <span className="md:text-7xl text-5xl">12</span>
              <span className="text-sm w-[1.5rem]">Cities</span>
            </div>
            <div className="flex flex-col w-[10rem] h-full items-center justify-center self-end">
              <span className="md:text-7xl text-5xl">1443</span>
              <span className="text-sm w-[1.5rem]">Hospitals</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] grid md:grid-cols-3 gap-2">
          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select Treatment</span>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="all">All</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Cardiovascular">Cardiovascular</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Hair Transplant">Hair Transplant</option>
            </select>
          </div>

          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select City</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="all">All</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
          </div>

          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select Budget</span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="any">Any</option>
              <option value="1L - 5L">1L - 5L</option>
              <option value="5L - 10L">5L - 10L</option>
              <option value="10L+">10L+</option>
            </select>
          </div>
        </div>

        {/* Display Filtered Hospitals */}
        <div className="w-[90%] max-h-[500px] rounded-xl flex flex-col gap-3 overflow-y-auto">
          <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2 overflow-y-auto">
            <div className="flex gap-2 w-[2rem] items-center">
              Show
              <div>
                <select name="" id="" className="p-1 border border-black">
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">15</option>
                </select>
              </div>
              Entries
            </div>
            <div className="flex gap-2 h-[2rem] items-center">
              Search :
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyPress}
                className="p-1 rounded-sm border border-black"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Scrollable Hospital List */}
          <div className="w-full bg-white rounded-2xl flex flex-col gap-5 items-center p-2">
            {hospitals.length > 0 ? (
              hospitals.map((hospital) => (
                <div
                  key={hospital._id}
                  className="w-full h-[200px] border border-black rounded-md p-4"
                >
                  <h3>{hospital.name}</h3>
                  <p>City: {hospital.city}</p>
                  <p>Treatment: {hospital.treatment}</p>
                  <p>Budget: {hospital.budget}</p>
                  <button
                    onClick={() => handleCartClick(hospital)}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ${
                      isInCart(hospital._id) ? "bg-red-500" : ""
                    }`}
                  >
                    {isInCart(hospital._id) ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>
              ))
            ) : (
              <div>No hospitals found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
