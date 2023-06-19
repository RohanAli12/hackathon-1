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
            <div className="mt-10 grid  md:grid-cols-[repeat(3,auto)] grid-rows-[repeat(3,auto)]  justify-center  gap-x-10">
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
