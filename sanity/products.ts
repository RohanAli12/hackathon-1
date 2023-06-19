import {defineType,defineField} from 'sanity'

export const products = defineType({
    name:"product" ,//show in api
    type:"document",
    title:"Product",//for sanity desktop
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
        defineField({
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }),
        defineField({
            name:"size",
            title:"Product Size",
            type:"reference",
            to:[{
                type:"size"
            }]
        }),
    ]
})