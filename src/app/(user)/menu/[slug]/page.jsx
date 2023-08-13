import React from "react";
import { getOneProductsBySlug, getProducts } from "@/src/app/services/ProductServices";

export const dynamic = "force-static"; //SSG
export const dynamicParams = false;

async function DetailsPage({params}) {
const {slug} = params;
const {product} = await getOneProductsBySlug(slug)
  return <div className="max-w-md">{product.title}</div>;
}

export default DetailsPage;


export async function generateStaticParams() {
  const {products} = await getProducts()

  return products.map((product) => ({
    slug: product.slug,
  }));
}
