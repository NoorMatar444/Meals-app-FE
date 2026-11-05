import React from 'react'
import PageHeader from '../_components/PageHeader'
import FilterByMainIngredient from '../FilterByMainIngredient/FilterByMainIngredient'
import FilterByCategory from '../FilterByCategory/FilterByCategory'
import FilterByArea from '../FilterByArea/FilterByArea'

export default function Filter() {
  return (
    <div className="page-wrap space-y-6">
      <PageHeader
        title="Filter"
        text="Narrow the list by a main ingredient, a category, or the area the meal comes from."
      />
      <FilterByMainIngredient/>
      <FilterByCategory/>
      <FilterByArea/>
    </div>
  )
}
