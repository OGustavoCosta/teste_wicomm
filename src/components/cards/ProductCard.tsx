import { useState } from "react"

function ProductCard(){
    const [color, setColor] = useState('blue')

    return(
        <article className="card card--product w-full max-w-64 grow basis-56 aspect-[3/4] grid grid-rows-[1fr] m-1">
            <div className="card__banner relative overflow-hidden">
                <img className="card__image w-full h-full object-cover object-center" src={`/images/product/product-01-${color}.png`} alt="toca túnel módulos" />
                <div className="card__info absolute top-0 right-0 text-[10px] text-light flex items-end flex-col gap-1">
                    <p className="bg-highlight-cyan uppercase p-1 text-right"><strong className="font-bold">10%</strong>OFF</p>
                    <p className="bg-highlight-red uppercase p-1 text-right font-bold">Lançamento</p>
                </div>
            </div>
            <div className="card__content flex gap-2">
                <div className="grid gap-1 grow">
                    <h3 className="card__title font-bold">Toca Túnel Módulos</h3>
                    <div className="card__tacker flex gap-2 text-[12px]">
                        <p className="font-light line-through">R$00,00</p>
                        <p className="font-bold">R$0000,00</p>
                    </div>
                </div>
                <div className="flex gap-1 pt-1 w-fit items-start">
                    {/* caso criacão de novas cores, componentize */}
                    <span className="card__color inline-block w-3 aspect-square bg-blue-500 rounded-full cursor-pointer" onClick={() => setColor('blue')}></span>
                    <span className="card__color inline-block w-3 aspect-square bg-red-600 rounded-full cursor-pointer" onClick={() => setColor('red')}></span>
                    <span className="card__color inline-block w-3 aspect-square bg-green-600 rounded-full cursor-pointer" onClick={() => setColor('green')}></span>
                    <span className="card__color inline-block w-3 aspect-square bg-gray-700 rounded-full cursor-pointer" onClick={() => setColor('black')}></span>
                </div>
            </div>
        </article>
    )
}

export default ProductCard