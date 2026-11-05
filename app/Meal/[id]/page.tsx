import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Meal({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = await response.json();

    const meal = data.meals?.[0];
    if (!meal) return <div className="page-wrap"><div className="panel text-center text-stone-500">No meal found</div></div>;

    return (
        <div className="page-wrap">
            <Link href="/Search" className="mb-4 inline-flex text-sm font-medium text-orange-900 hover:underline">Back to search</Link>
            <article className="panel grid gap-6 md:grid-cols-[280px_1fr] md:items-start">
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={400}
                    height={400}
                    className="h-64 w-full rounded-2xl object-cover"
                />
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-stone-900">{meal.strMeal}</h1>
                    <h2 className="mt-5 text-lg font-semibold text-stone-900">Instructions</h2>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{meal.strInstructions}</p>
                </div>
            </article>
        </div>
    );
}
