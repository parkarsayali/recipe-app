import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState();
  const [active, setActive] = useState("Instructions");
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log("detailData", detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details?.title}</h2>
        <img src={details?.image} alt={details?.title} />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: details?.instructions }}
            ></h3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {details?.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
