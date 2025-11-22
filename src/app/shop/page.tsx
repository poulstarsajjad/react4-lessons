// import Container from "@/src/components/container/Container";

// function Shop() {

//   return (
//     <Container>
//       <div className="grid grid-cols-3 gap-6">
//             <div className="border p-4 rounded shadow">
//               <img src="" alt="" className="w-full h-48 object-cover mb-3" />
//               <h3 className="font-bold text-lg">title</h3>
//               <p className="text-gray-600">description</p>
//               <p className="mt-2">
//                 price: price$
//                   <span className="text-gray-400 ml-3">
//                     <del>discountPercentage$</del>
//                   </span>
//               </p>
//             </div>
//       </div>

//     </Container>
//   );
// }

// export default Shop;







// import Container from "@/src/components/container/Container";


// async function fetchProducts(): Promise<Iproduct[]> {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   return data.products;
// }

// export default async function Shop() {
//   const products = await fetchProducts();

//   return (
//     <Container>
//       <div className="grid grid-cols-3 gap-6">
//         {products.map((product) => {
//           const originalPrice = Math.round(
//             product.price / (1 - product.discountPercentage / 100)
//           );
//           return (
//             <div key={product.id} className="border p-4 rounded shadow">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-48 object-cover mb-3"
//               />
//               <h3 className="font-bold text-lg">{product.title}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="mt-2">
//                 price: {product.price}$
//                 <span className="text-gray-400 ml-3">
//                   <del>{originalPrice}$</del>
//                 </span>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </Container>
//   );
// }


