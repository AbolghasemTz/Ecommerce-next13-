import Slider from "./home/Carousel";
import HomeProduct from "./home/HomeProduct";
import { getProducts } from "../services/ProductServices";

export default async function Home() {
  const { products } = await getProducts();
  return (
    <main>
     <Slider/>
     <HomeProduct products={products}/>
    </main>
  );
}
