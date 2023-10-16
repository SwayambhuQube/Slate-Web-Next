import { loadMetaData } from "@/utils/loadMetaData";
import { NextResponse } from "next/server";

export async function GET(_: any, params: any) {
  const urlParamsArray = params.params.urlParams;
  const data = await loadMetaData(urlParamsArray[0], urlParamsArray[1]);
  return NextResponse.json(data);
}
