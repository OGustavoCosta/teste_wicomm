interface IDefaultButtonProps{
    fill: boolean,
    text: string,
    link: string,
    className?: string,
}

function DefaultButton({ fill, text, link, className }: IDefaultButtonProps){
    return(
        <a type="submit" href={link} className={`group cursor-pointer relative h-12 overflow-hidden rounded-4xl px-8 py-2 duration-500 ${fill ? 'text-light' : 'text-dark border-2 hover:text-light'} border-dark w-fit flex items-center justify-center gap-3 ${className}`}>
            <span className="relative z-10 uppercase">{text}</span>
            <span className={`absolute inset-0 overflow-hidden rounded-md ${fill && 'bg-dark'}`}>
                <span className={`absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full ${fill ? 'bg-highlight-red' : 'bg-dark'} transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150`}></span>
            </span>
        </a>
    )
}

export default DefaultButton