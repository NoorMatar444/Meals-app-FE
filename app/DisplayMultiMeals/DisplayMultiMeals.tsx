import Image from "next/image";
import React from "react";
import { displayMealType } from "../Types/displayMeal.type";

type DisplayMultiMealsProps = {
  meals: displayMealType[];
};

export default function DisplayMultiMeals({ meals }: DisplayMultiMealsProps) {

  if (!Array.isArray(meals)) {
    return null
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {meals?.map((meal) => (
        <div key={meal.idMeal} className="card overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="image bg-stone-50">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={300}
              className="h-52 w-full object-cover"
            />
          </div>

          <div className="name mt-3 px-4 pb-5 text-center text-base font-semibold tracking-tight text-stone-900">
            <p>{meal.strMeal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

