import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const popularRes = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await popularRes.json();
    console.log("data", data);
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((popRec) => {
        return (
          <div key={popRec.id}>
            <p>{popRec.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
