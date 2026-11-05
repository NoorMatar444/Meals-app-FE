"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DisplayMultiMeals from '../DisplayMultiMeals/DisplayMultiMeals'
import { displayMealType } from '../Types/displayMeal.type'
import { searchMealByFirstType } from '../Types/searchMealByFirstType.type'


export default function SearchMealByFirstLetter() {
    const [meals, setMeals] = useState<displayMealType[]>([])
    const [isMealExist, setIsMealExist] = useState(true)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            char: ""
        }
    })
    function handleLetterSearch(value: searchMealByFirstType) {
        console.log(value)
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value.char}`)
            .then((res) => {
                if (res.data.meals) {
                    setMeals(res.data.meals)
                    setIsMealExist(true)
                } else {
                    setMeals([])
                    setIsMealExist(false)
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <section className="panel">
            <h2 className="text-lg font-semibold tracking-tight text-stone-900">Search by first letter</h2>
            <p className="mt-1 text-sm text-stone-500">Type one letter to list matching meals.</p>
            <form onSubmit={handleSubmit(handleLetterSearch)} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input {...register("char")} className="meal-input" autoComplete="off" type="search" placeholder="Enter first letter of Meal Name"></input>
                <Button type="submit" className="rounded-full px-6">Search</Button>
            </form>
            {isMealExist ? <DisplayMultiMeals meals={meals} /> : <p className="mt-6 text-sm font-medium text-stone-500">No Meal Found</p>}
        </section>
    )
}