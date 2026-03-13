'use server';

import { client } from "@/sanity/lib/client";
import { getSanityQuery } from "../utils/helpers";

export const getContent = async (type: string) => {
  return await client.fetch(getSanityQuery(type));
}


