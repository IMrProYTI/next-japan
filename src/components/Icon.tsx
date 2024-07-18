import Image from "next/image"

interface IIcon {
	classDiv?: string
	classImage?: string
	width?: number
	height?: number
	src: string
}

export default function Icon(ctx: Readonly<IIcon>) {
	return (
		<div className={`flex-center ${ctx.classDiv}`}>
			<Image
				className={ctx.classImage}
				src={`/icons/${ctx.src}.svg`}
				width={ctx.width || 24}
				height={ctx.height || 24}
				alt={ctx.src}
			/>
		</div>
	)
}