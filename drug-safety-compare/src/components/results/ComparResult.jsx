import { useEffect, useState } from "react";
import { getDrugInteraction } from "../../api/ingredientApi";
import { getPillInfo } from "../../api/pillApi";

const ComparResult = ({ drug }) => {

  const [pill, setPill] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {

    if (!drug) return;

    const fetchData = async () => {
      const pillData = await getPillInfo(drug.ITEM_NAME);
      const ingredientData = await getDrugInteraction(drug.MATERIAL_NAME);

      setPill(pillData);
      setIngredient(ingredientData);
      
    };
    
    fetchData();
    
  }, [drug]);

  if (!drug) return <p>약을 선택하세요</p>;
  console.log(drug);
  

  return (
    <div>

      <h2>{drug.ITEM_NAME}</h2>
      
      {pill && (
        <img src={pill[0]?.ITEM_IMAGE} width="30"/>
      )}

      <strong>기준 성분: {drug.MATERIAL_NAME}</strong>

      {ingredient && (
        <ul>
          {ingredient.map((ing, index) => {
          return (
            <li key={index}>
              <p>병용금기 성분 : {ing.item.INGR_KOR_NAME} + {ing.item.MIXTURE_INGR_KOR_NAME}</p>
            </li>
          )
        })}
        </ul>
      )}

    </div>
  );
};

export default ComparResult;