

type Products = {
    id:number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}


const productsArray: Products[] = [
    {
        id:1,
        title:"iPhone 14 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:1400,
    },
    {
        id:2,
        title:"iPhone 13 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"512",
        price:1300,
    },
    {
        id:3,
        title:"iPhone 12 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"256",
        price:1000,
    },
    {
        id:4,
        title:"iPhone XS",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:900,
    },
    {
        id:5,
        title:"iPhone XR",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"64",
        price:800,
    },
    {
        id:6,
        title:"iPhone 14 Pro MAX",
        description:"This is iPhone 14 Pro MAX",
        type:"phone",
        capacity:"512",
        price:1500,
    }
]

export default productsArray;