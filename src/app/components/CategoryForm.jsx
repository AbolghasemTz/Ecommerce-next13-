import React from "react";
import TextField from "../common/TextField";
import Select from "react-select";

export const categoryType = [
  { id: 1, label: "محصول", value: "product" },
  { id: 2, label: "پست", value: "post" },
  { id: 3, label: "تیکت", value: "ticket" },
  { id: 4, label: "نظرات", value: "comment" },
];
function CategoryForm({
  onSubmit,
  handleChange,
  category,
  selectedType,
  setSecetedType,
})  
{
  console.log(category)

  return (
    <form action="spacey-4" onSubmit={onSubmit}>
      <TextField
        name="title"
        label="عنوان"
        value={category?.title || ""}
        onChange={handleChange}
      />
      <TextField
        name="englishTitle"
        label=" عنوان انگلیسی"
        value={category?.englishTitle || ""}
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="توضیحات"
        value={category?.description || ""}       
        onChange={handleChange}
      />
      <div>
        <label htmlFor="type" className="mb-2 block">
          نوع
        </label>
        <Select
          instanceId="type"
          onChange={setSecetedType}
          options={categoryType}
          defaultValue={selectedType}
        />
      </div>
      <button type="submit" className="btn p-2 mt-8 w-full">
        تایید
      </button>
    </form>
  );
  }

export default CategoryForm;
