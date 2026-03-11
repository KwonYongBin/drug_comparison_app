import { axiosData } from "../utils/dataFetch";

const SERVICE_KEY = "0c4a17daf99d7219eff52f3cceb287b84f4d634e4b2e024488108b5b042263d1";

// 성분 정보 API
export const getDrugInteraction = async (itemName) => {
  const url = `/api/1471000/DURIrdntInfoService03/getUsjntTabooInfoList02?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=20&type=json&itemName=${itemName}`;
  const data = await axiosData(url);
  return data.body.items;
};