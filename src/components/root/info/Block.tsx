import Icon from "@/components/Icon";

interface IBlock {
	title: string
	description: string
	icon_src: "event" | "favorite" | "school"
}

export default function Block(ctx: Readonly<IBlock>) {
	return (
		<div className="text-center space-y-4">
			<Icon classImage="w-14 h-14 softTransition duration-250 hover:-translate-y-1" width={56} height={56} src={ctx.icon_src} />
			<h3 className="font-semibold text-2xl">{ctx.title}</h3>
			<p>{ctx.description}</p>
		</div>
	)
}