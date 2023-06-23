import { client } from "../../../sanity/lib/client"
import { ProductInterface } from '@/shared/ProductInterface'
import Products from "@/components/Products";
import Wrapper from '@/shared/Wrapper'

const getUpcommingProductData = async () => {
    const res = await client.fetch(`*[_type=="product" && category->name=="Men"]{
      _id,   
      image,
      title,
      price, 
        category->{
          name,
          _id
        }
   }`);
    return res
}

 const Men = async () => {
    const data: ProductInterface[] = await getUpcommingProductData()
    return (
        <section className="mt-28">
            <Wrapper>
                <div className=" grid  md:grid-cols-[repeat(3,auto)] grid-rows-[repeat(3,auto)]  justify-center  gap-10">
                    {
                        data.map((item) => {
                            return (
                                <div key={item._id}>
                                    <Products item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </section>
    )
}

export default Men
