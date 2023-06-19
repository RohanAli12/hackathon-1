import { type SchemaTypeDefinition } from 'sanity'
import {products} from './products'
import {category} from './category'
import {size} from './size'
import { upcomming } from './upcomming'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category,size,upcomming],
}
