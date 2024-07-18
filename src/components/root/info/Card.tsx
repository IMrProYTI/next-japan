import Image from "next/image"

interface ICard {
	title: string
	description: string
	img: "anime" | "mythology" | "nature"
}

export default function Block(ctx: Readonly<ICard>) {
	return (
		<div className="card flex flex-col border-2 hover:border-4 m-0.5 hover:m-0 rounded-xl overflow-hidden border-black dark:border-white">
			<div className="w-full 2xl:h-72 xl:h-56 lg:h-48 md:h-96 sm:h-80 h-72 overflow-hidden">
				<Image
					className="h-full object-cover object-bottom softTransition duration-500 hover:scale-105"
					src={`/static/${ctx.img}.jpg`}
					width={1024}
					height={768}
					alt={`Картинка ${ctx.title}`}
				/>
			</div>
			
			<div className="p-4 pb-6 space-y-2 flex-1">
				<h3 className="font-semibold text-2xl">{ ctx.title }</h3>
				<p>{ctx.description}</p>
			</div>
		</div>
	)
}