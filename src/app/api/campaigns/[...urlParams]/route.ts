import { loadMetaData } from "@/utils/loadMetaData";
import { NextResponse } from "next/server";

const preload = (context: string, id: string) => {
  void loadMetaData(context, id);
};

export async function GET(_: any, params: any) {
  const urlParamsArary = params.params.urlParams;
  console.log(urlParamsArary);
  const data = await fetch(
    `https://admin-api.staging.qubeslate.com/api/v0/${urlParamsArary[0]}?from=${urlParamsArary[1]}&to=${urlParamsArary[2]}`
  );
  const response = await data.json();
  response.forEach((res: any) => {
    preload("orders", res.orderId);
  });
  return NextResponse.json(response);
}
