import React from 'react'
import TextField from '../common/TextField';
import { TagsInput } from 'react-tag-input-component';
import Select from 'react-select';
const productFormData = [
    { id: 1, label: "عنوان", name: "title" },
    { id: 2, label: "توضیحات", name: "description" },
    { id: 3, label: "اسلاگ", name: "slug" },
    { id: 4, label: "برند", name: "brand" },
    { id: 5, label: "قیمت", name: "price" },
    { id: 6, label: "تخفیف", name: "offPrice" },
    { id: 7, label: "قیمت روی تخفیف", name: "discount" },
    { id: 8, label: "موجودی", name: "countInStock" },
    { id: 9, label: "لینک عکس محصول", name: "imageLink" },
  ]; 
function ProductForm({onSubmit,tags,setTags,productData,productDataOnChange,setSelectedCategory
    ,categories,selectedCategory = ""}) {
  return (
   <div className='max-w-sm'>
     <form className="space-y-4" onSubmit={onSubmit}>
        {productFormData.map((item) => {
          return (
            <TextField
              key={item.id}
              label={item.label}
              name={item.name}
              value={productData[item.name] ?? ""}
              onChange={productDataOnChange}
            />
          );
        })}
          <div>
      <label htmlFor="tags">تگ محصولات</label>
     
      <TagsInput
      id="tags"
        value={tags}
        onChange={setTags}
        name="tags"
        
      />
             
    </div>
    <div>
        <label htmlFor="category" className="mb-2">دسته بندی</label>
        <Select
        instanceId="category"
        onChange={setSelectedCategory}
        options={categories}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option._id}
        defaultValue={selectedCategory}
        />
    </div>
        <button className="btn p-2 mt-8 w-full">تایید</button>
      </form>
   </div>
  )
}

export default ProductForm
