
import {defineType,defineField} from 'sanity'

export const category = defineType({
    name:"category" ,//show in api
    type:"document",
    title:"Category",//for sanity desktop
    fields:[
          defineField({
            name:"name",
            title:"Category Name",
            type:"string"
        }),
    ]
})