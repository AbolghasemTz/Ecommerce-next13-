
import AddToCart from "./AddToCart";
import RoadPage from "./RoadPage";
import CategrySinglePage from "./CategrySinglePage";
import RoadPageDescktop from "./RoadPageDescktop";
import ContentInfo from "./ContentInfo";
import { getOneProductsBySlug, getProducts } from "../../../services/ProductServices";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
export const dynamic = "force-static";
// export const dynamicParams = false;

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProductsBySlug(slug);

  return (
    <div classNameName="">
      <RoadPage product={product} />

      <div className="md:px-4 md:mt-6 lg:px-6 container mx-auto max-w-screen-2xl grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8">
        <CategrySinglePage />
        <RoadPageDescktop product={product} />

        <ContentInfo product={product} />
      </div>

      {/* sticky bottom in mobile */}
      <div className="md:hidden fixed flex items-center justify-between left-0 right-0 bottom-0 w-full bg-white shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] px-4 py-2 gap-x-4">
        <AddToCart product={product} />
        <div className="text-slate-800 flex flex-col items-end">
          <span className="font-bold">
            {product.offPrice
              ? toPersianNumbersWithComma(product.offPrice)
              : toPersianNumbersWithComma(product.price)}
          </span>
          <span className="text-gray-400 text-sm">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default page;

export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
