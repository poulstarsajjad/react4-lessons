import Container from "../container/Container";

async function Category() {
    const categories = ["beauty", "womens-jewellery", "fragrances" , "womens-shoes"];
    const promises = categories.map(cat =>
    fetch(`https://dummyjson.com/products/category/${cat}?limit=1`).then(res => res.json())
    );
    const results = await Promise.all(promises);
    const allProducts = results.flatMap(result => result.products);
  return (
    <Container>
      <div className="grid grid-cols-4 gap-5 mb-50">
        {
          allProducts.map((product: Iproduct)=>(
              <div key={product.id} className="w-full h-90 bg-cover bg-center flex items-end justify-center pb-10 bg-gray-50" style={{ backgroundImage: `url(${product.thumbnail})` }}>
                  <button className="bg-gray-300 text-gray-600 font-medium w-full text-center py-3 mx-10 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-600 hover:text-gray-300">{product.category}</button>
              </div>
          ))
        }
      </div>
    </Container>
    
  )
}

export default Category;
