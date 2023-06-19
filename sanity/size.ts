
import {defineType,defineField} from 'sanity'

export const size= defineType({
    name:"size" ,//show in api
    type:"document",
    title:"Size",//for sanity desktop
    fields:[
          defineField({
              name: 'size',
              title: 'Size',
            type: 'array',
            of: [{type: 'string'}]
          }),
    ]
})