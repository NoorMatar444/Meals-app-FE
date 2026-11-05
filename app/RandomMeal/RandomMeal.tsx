"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import DisplayMeal from '../DisplayMeal/DisplayMeal';






export default function RandomMeal() {
  const [meals, setMeals] = useState([])
  async function randomMealApi() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const { meals } = await response.json();
    setMeals(meals)
    console.log(meals)
  }

  return (
    <section className="panel">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-stone-900">Random meal</h2>
          <p className="mt-1 text-sm text-stone-500">Load one recipe without typing anything.</p>
        </div>
        <Button onClick={() => randomMealApi()}>Random Meal</Button>
      </div>
      <DisplayMeal meals={meals}/>
    </section>
  )
}
