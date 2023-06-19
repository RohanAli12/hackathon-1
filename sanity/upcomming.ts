import {defineType,defineField} from 'sanity'

export const upcomming = defineType({
    name:"upcomming" ,//show in api
    type:"document",
    title:"Upcomming Collections",//for sanity desktop
    fields:[ 
        defineField({
        name:"title",
        title:"Product Title",
        type:"string"
    }),
    defineField({
        name:"description",
        title:"Product Description",
        type:"string"
    }),
    defineField({
        name:"price",
        title:"Product Price",
        type:"number"
    }),
    defineField({
        name:"image",
        title:"Product Image",
        type:"image"
    }),
    ]
})