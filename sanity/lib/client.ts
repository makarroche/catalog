import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'development',
  apiVersion: '2023-10-01',
  useCdn: true,
})
