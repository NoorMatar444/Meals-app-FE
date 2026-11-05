import Image from 'next/image'
import { displayMealType } from '../Types/displayMeal.type'


export default function DisplayMeal({ meals }:{meals:displayMealType[]}) {
    return (
        <>
        {meals?.map((meals)=>{
            return  <article key={meals.idMeal} className="card mt-6 border-t border-stone-100 pt-6">
                <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-start">
                    <div className="image">
                        <Image src={meals?.strMealThumb} alt='image' width={500} height={500} className="h-56 w-full rounded-2xl object-cover" />
                    </div>
                    <div>
                        <div className="name text-2xl font-semibold tracking-tight text-stone-900">
                            <p>{meals?.strMeal}</p>
                        </div>
                        <div className="category&Area mt-3 flex flex-wrap gap-2">
                            <div className="category rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-900">
                                <p><span className='font-semibold'>Category:</span> {meals?.strCategory}</p>
                            </div>
                            <div className="Area rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
                                <p><span className='font-semibold'>Area:</span> {meals?.strArea}</p>
                            </div>
                        </div>
                        <div className="instructions mt-4 text-sm leading-7 text-stone-600">
                            <p>{meals?.strInstructions}</p>
                        </div>
                    </div>
                </div>
                {meals?.strYoutube && (
                    <div className="video mt-6">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${meals?.strYoutube.split('v=')[1]}`}
                            title="Meal video tutorial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="aspect-video w-full rounded-2xl shadow-lg"
                        ></iframe>
                    </div>
                )}
            </article>
        })}
        </>
    )
}
