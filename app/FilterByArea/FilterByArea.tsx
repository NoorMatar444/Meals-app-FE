"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import DisplayMultiMeals from '../DisplayMultiMeals/DisplayMultiMeals';
import { Button } from '@/components/ui/button';
import { filterByAreaType } from '../Types/filterByArea.type';

export default function FilterByArea() {
    const [meals, setMeals] = useState([])
    const [isMealExist, setIsMealExist] = useState(true)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: ""
        }
    })
    function handleAreaSearch(value: filterByAreaType) {
        console.log(value);
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value.name}`)
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
            <h2 className="text-lg font-semibold tracking-tight text-stone-900">By area</h2>
            <p className="mt-1 text-sm text-stone-500">Example: Italian, Canadian, or Japanese.</p>
            <form onSubmit={handleSubmit(handleAreaSearch)} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input {...register("name")} className="meal-input" autoComplete="off" type="search" placeholder="Enter Area"></input>
                <Button type="submit" className="rounded-full px-6">Search</Button>
            </form>
            {isMealExist ? <DisplayMultiMeals meals={meals} /> : <p className="mt-6 text-sm font-medium text-stone-500">No Meal Found</p>}
        </section>
    )
}
