import { axiosData } from "../utils/dataFetch";

const SERVICE_KEY = "0c4a17daf99d7219eff52f3cceb287b84f4d634e4b2e024488108b5b042263d1";

export const searchDrug = async (keyword) => {
  const url = `/api/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=20&type=json&itemName=${keyword}`;
  const data = await axiosData(url);
  return data.body.items;
};