

export type Products = {
    id:number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image:string
}


const productsArray: Products[] = [
    {
        id:1,
        title:"iPhone 14 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:1400,
        image: "/images/iphone-purple.webp"
    },
    {
        id:2,
        title:"iPhone 13 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"512",
        price:1300,
        image: "/images/iphone-black.webp"
    },
    {
        id:3,
        title:"iPhone 12 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"256",
        price:1000,
        image: "/images/iphone-silver.webp"
    },
    {
        id:4,
        title:"iPhone XS",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:900,
        image: "/images/iphone-gold.webp"
    },
    {
        id:5,
        title:"iPhone XR",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"64",
        price:800,
        image: "/images/iphone-blue.webp"
    },
    {
        id:6,
        title:"iPhone 14 Pro MAX",
        description:"This is iPhone 14 Pro MAX",
        type:"phone",
        capacity:"512",
        price:1500,
        image: "/images/iphone-red.webp"
    }
]

export const getProductsObject = (array: Products[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]: product
}), {})

export default productsArray;