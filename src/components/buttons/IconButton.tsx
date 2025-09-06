/* Icons */
import { MoveRight } from "lucide-react"

interface IIconButtonProps{
    fill: boolean,
    text: string,
    icon: string,
    link: string,
}

function IconButton({ fill, text, link, icon }: IIconButtonProps){
    return(
        <a type="submit" href={link} className={`group cursor-pointer relative h-12 overflow-hidden rounded-4xl px-8 py-2 duration-500 ${fill ? 'text-light' : 'text-dark border-2 hover:text-light'} border-dark w-fit flex items-center justify-center gap-3`}>
            <img className="button__icon w-[25px] relative" src={icon} alt="" />
            <span className="relative z-5 uppercase group-hover:-translate-x-[37px] transition-all duration-500">{text}</span>
            <MoveRight className="absolute z-5 right-8 translate-x-[37px] text-light opacity-0 group-hover:opacity-100 group-hover:translate-0 transition-all duration-500"/>
            <span className={`absolute inset-0 overflow-hidden rounded-md ${fill && 'bg-dark'}`}>
                <span className={`absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full ${fill ? 'bg-highlight-red' : 'bg-dark'} transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150`}></span>
            </span>
        </a>
    )
}

export default IconButton