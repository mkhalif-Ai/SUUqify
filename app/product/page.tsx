import Link from "next/link";

interface product{
    id: number,
    title: string,
    price: number,
    description:string;
}

async function products() {

    const url = "https://fakestoreapi.com/products"
    const response = await fetch(url)
    const products:product[] = await response.json()
  return (
    <div className="max-w-2xl p-6 mx-auto  font-sans bg-gray-50 min-h-screen"> 
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">all 20 products</h2>
        <div>
        {products.map((product)=>(
          <div key={product.id} className="card bg-base-100 w-96 shadow-sm m-6 ">
  <figure>
     <img 
    src={product.image} 
    alt={product.title} 
    style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} 
  />
  </figure>
  <div  className="card-body ">
    <Link href={`/product/${product.id}`} className="card-title">
      
     {product.title}
       <h3 className="text-yellow-700">${product.price}</h3>
    </Link>
    
    
  
  </div>
</div>
        ))}
    </div>
    </div>
  )
}

export default products