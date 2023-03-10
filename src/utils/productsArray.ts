

type Products = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}


const productsArray: Products[] = [
    {
        title:"iPhone 14 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:1400,
    },
    {
        title:"iPhone 13 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"512",
        price:1300,
    },
    {
        title:"iPhone 12 Pro",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"256",
        price:1000,
    },
    {
        title:"iPhone XS",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"128",
        price:900,
    },
    {
        title:"iPhone XR",
        description:"This is iPhone 14 Pro",
        type:"phone",
        capacity:"64",
        price:800,
    },
    {
        title:"iPhone 14 Pro MAX",
        description:"This is iPhone 14 Pro MAX",
        type:"phone",
        capacity:"512",
        price:1500,
    }
]

export default productsArray;