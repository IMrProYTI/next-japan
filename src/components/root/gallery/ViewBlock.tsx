import Gallery, { Images } from "@/utils/gallery/server"
import Viewer from "./Viewer"

interface IViewBlock {
	title: string
	description: string
	type: Images
}

export default async function ViewBlock(ctx: Readonly<IViewBlock>) {
	const data = (await Gallery.getData())[ctx.type];

	return (
		<div className="space-y-4 text-center">
			<h4 className="font-semibold text-2xl">{ctx.title}</h4>
			<p>{ctx.description}</p>
			<Viewer
				data={data}
				type={ctx.type}
			/>
		</div>
	)
}