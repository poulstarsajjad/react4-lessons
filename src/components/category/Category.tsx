
async function Category() {
    const categories = ["beauty", "womens-jewellery", "fragrances" , "womens-shoes"];
    const promises = categories.map(cat =>
    fetch(`https://dummyjson.com/products/category/${cat}?limit=1`).then(res => res.json())
    );
    const results = await Promise.all(promises);
    const allProducts = results.flatMap(result => result.products);
  return (
    <div className="grid grid-cols-4 gap-5 mb-50">
      {
        allProducts.map((product: Iproduct)=>(
            <div key={product.id} className="w-full h-90 bg-cover bg-center flex items-end justify-center pb-10 bg-gray-50" style={{ backgroundImage: `url(${product.thumbnail})` }}>
                <h3 className="bg-gray-300 text-gray-800 font-medium w-full text-center py-3 mx-10 rounded-lg">{product.category}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Category;
