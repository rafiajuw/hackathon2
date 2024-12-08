import Nav from "./Nav";
import ProductGrid from "./ProductGrid";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Nav />
      <div className="flex">
        <div className="hidden lg:block w-1/4">
          <Sidebar />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductGrid />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
