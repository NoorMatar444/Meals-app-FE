import Image from "next/image";
import PageHeader from "./_components/PageHeader";
import ListAllIngredientsApi from "./API/ListAllIngredientsApi/ListAllIngredientsApi";
import { ingredientType } from "./Types/ingredients.type";

export default async function Home() {
  const data = await ListAllIngredientsApi();
  console.log(data);
  return (
    <div className="page-wrap">
      <PageHeader
        title="Ingredients"
        text="Browse every ingredient from the meals list. Each card keeps the name, photo, and description."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((ingredient: ingredientType) => (
          <article
            key={ingredient.idIngredient}
            className="cards flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="image bg-stone-50">
              <Image
                alt="image"
                src={ingredient.strThumb}
                width={500}
                height={500}
                className="h-44 w-full object-cover"
              />
            </div>
            <div className="name px-5 pt-4 text-lg font-semibold tracking-tight text-stone-900">
              <p>{ingredient.strIngredient}</p>
            </div>
            <div className="description px-5 pt-2 pb-5 text-sm leading-6 text-stone-600">
              <p className="line-clamp-4">{ingredient.strDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
