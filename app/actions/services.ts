"use server";

import { client } from "@/sanity/lib/client";
import { getSanityQuery } from "../utils/helpers";

export const getContent = async (type: string, slug?: string) => {
  const { query, slug: slugParam } = getSanityQuery(type, slug);
  return await client.fetch(query, slugParam);
};
