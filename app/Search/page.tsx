import React from 'react'
import PageHeader from '../_components/PageHeader'
import RandomMeal from '../RandomMeal/RandomMeal'
import SearchMealByName from '../SearchMealByName/SearchMealByName'
import SearchMealByFirstLetter from '../SearchMealByFirstLetter/SearchMealByFirstLetter'

export default function Search() {
  return (
    <div className="page-wrap space-y-6">
      <PageHeader
        title="Search"
        text="Start with a random meal, look one up by name, or list every meal that starts with a letter."
      />
      <RandomMeal/>
      <SearchMealByName/>
      <SearchMealByFirstLetter/>
    </div>
  )
}
