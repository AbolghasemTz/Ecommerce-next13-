import React, { useCallback, useEffect, useState } from "react";
import RadioGroup from "../../common/RadioGroup";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const sortOptions = [
  { id: 1, value: "latest", label: "جدیدترین" },
  { id: 2, value: "earliest", label: "قدیمی ترین" },
  { id: 3, value: "pupular", label: "محبوب ترین" }
];
function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sort, setSort] = useState("");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, []);
  return (
    <div className="space-y-4 ">
      {sortOptions.map((item) => {
        return (
          <RadioGroup
            key={item._id}
            id={item._id}
            label={item.label}
            name="product-port"
            value={item.value}
            checked={sort === item.value}
            onChange={sortHandler}
          />
        );
      })}
      <RadioGroup />
    </div>
  );
}

export default ProductSort;
