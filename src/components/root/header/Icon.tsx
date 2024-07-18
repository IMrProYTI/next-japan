import Image from "next/image";

interface IIcon {
	href: string
	src: string
	alt: string
}

export default function Icon(ctx: Readonly<IIcon>) {
	return (
		<a href={ctx.href}>
			<Image
				className="p-1 hover:p-0.5 linkHover"
				src={ctx.src}
				width={32}
				height={32}
				alt={ctx.alt}
			/>
		</a>
	)
}