
function Header() {
  return (
    <div className="bg-gray-50 h-dvh mx-10 mb-30 grid grid-cols-2">
        <div className="flex flex-col items-start justify-center pl-40">
            <span className="text-2xl font-normal">Classic Exclusive</span>
            <h1 className="text-5xl font-bold my-5">
                Women's Collection
            </h1>
            <span className="text-2xl font-normal">UP TO 40% OFF</span>
            <button className="bg-black px-5 py-3 text-gray-50 rounded-xl mt-10 flex gap-3 cursor-pointer transition duration-300 hover:scale-90">
                Shop Now
                <span>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" fill="currentColor" /></svg>
                </span>
            </button>
        </div>
        <div>
            <img className="h-full" src="—Pngtree—elegant fashion model in luxury_23258979.png" alt="" />
        </div>
    </div>
  )
}

export default Header;
