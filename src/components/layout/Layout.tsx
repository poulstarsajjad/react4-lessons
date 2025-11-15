import Navbar from "../navbar/Navbar";

function Layout({children}: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      
    </div>
  )
}

export default Layout;
