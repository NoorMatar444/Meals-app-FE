import React from 'react'
import PageHeader from '../_components/PageHeader'
import ListAllMealsCategoriesApi from '../API/ListAllMealsCategoriesApi/ListAllMealsCategoriesApi'
import Image from 'next/image';
import { categoryType } from '../Types/category.type';

export default async function Category() {
  const data=await ListAllMealsCategoriesApi();
  console.log(data)
  return (
    <div className="page-wrap">
      <PageHeader
        title="Categories"
        text="Meals grouped by category. Open Search or Filter when you want a specific recipe."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((category:categoryType)=><article key={category.idCategory} className="cards overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="image bg-stone-50">
            <Image src={category.strCategoryThumb} alt='image' width={500} height={500} className="h-52 w-full object-cover"/>
          </div>
          <div className="name px-5 pt-4 text-xl font-semibold tracking-tight text-stone-900">
            <p>{category.strCategory}</p>
          </div>
          <div className="description px-5 pt-2 pb-5">
            <p className='line-clamp-4 text-sm leading-6 text-stone-600'>{category.strCategoryDescription}</p>
          </div>
        </article>)}
      </div>
    </div>
  )
}
