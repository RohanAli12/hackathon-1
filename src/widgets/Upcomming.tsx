import { client } from "../../sanity/lib/client"
import { ProductInterface } from '@/shared/ProductInterface'
import UpcommingComponent from "@/components/UpcommingComponent";
import Wrapper from '@/shared/Wrapper'

const getUpcommingProductData = async () => {
    const res = await client.fetch(`*[_type=="upcomming"]{
        _id,   
        image,
        title,
        price, 
     }`);
    return res
}


export const Upcomming = async () => {
    const data: ProductInterface[] = await getUpcommingProductData()
    return (
        <Wrapper>
            <div className="mt-10">
            <p className="text-md text-center font-semibold md:text-xl text-blue-500">PRODUCTS</p>
          <h2 className="text-lg text-center md:text-3xl text-slate-400 mt-3 font-extrabold tracking-wider">Products To Come</h2>
            </div>
            <div className="mt-10 grid  md:grid-cols-[repeat(3,auto)] grid-rows-[repeat(1,auto)] gap-y-10  justify-center  md:gap-x-10">
                {
                    data.map((item) => {
                        return (
                            <div key={item._id}>
                                <UpcommingComponent item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Upcomming
