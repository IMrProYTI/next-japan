import Image from "next/image"

interface IImageLink {
	alt: string
	href: string
	image: "Gerb" | "Stud"
}

export default function ImageLink(ctx: IImageLink) {
	const SIZE = 150;

	return (
		<a
			className={`block w-[${SIZE}px] h-[${SIZE}px] overflow-clip`}
			href={ctx.href}
			target="_blank"
		>
			<Image
				className="scale-125"
				src={`/footer/${ctx.image}.png`}
				width={SIZE}
				height={SIZE}
				alt={ctx.alt}
			/>
		</a>
	)
}