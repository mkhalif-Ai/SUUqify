type Props ={
    params:Promise<{ id:string }>
};

interface product{
    id: number,
    title: string,
    price: number,
    description:string;
}

async function productInfo(props:Props) {
    const id = (await props.params).id

    const url = "https://fakestoreapi.com/products"+id;
    const response = await fetch(url)
    const product:product = await response.json()
  return (
    <div>
        <h1>{product.title}</h1>
        <div className="divider"></div>
        <h3>{product.price}</h3>
        <div className="divider"></div>
        <p>{product.description}</p>
    </div>
  )
}

export default productInfo