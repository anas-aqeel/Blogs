import { SchemaTypeDefinition } from 'sanity'
import { blog } from './schema/blog'
import { author } from './schema/author'
import { category } from './schema/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, category],
}
