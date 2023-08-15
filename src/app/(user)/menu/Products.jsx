import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
function Products({ product }) {
  return (
    <div>
      <Link href={`/menu/${product.slug}`}>مشاهده محصول</Link>
      <AddToCart product={product} />
    </div>
  );
}

export default Products;
{
  /* <Link href={`/menu/${product.slug}`}>مشاهده محصول</Link>
<AddToCart product={product} /> */
}
{
  /* <Link href={`/menu/${product.slug}`}>مشاهده محصول</Link> */
}
