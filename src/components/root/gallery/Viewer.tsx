'use client'

import Gallery from "@/utils/gallery/client";
import { Images } from "@/utils/gallery/server";
import { useState } from "react";

import Icon from "@/components/Icon";

interface IViewer {
	data: {
		maxIndex: number
    styles: string[]
	}
	type: Images
}

export default function Viewer(ctx: Readonly<IViewer>) {
	const imageUrls = Gallery.getImageUrls(ctx.data.maxIndex, ctx.type);
	const imageStyles = Gallery.getStyles(ctx.data.styles);

	let [index, setIndex] = useState(0);

	const prev = () => setIndex(validateIndexes(index - 1, ctx.data.maxIndex));
	const next = () => setIndex(validateIndexes(index + 1, ctx.data.maxIndex));

	function validateIndexes(newIndex: number, maxIndex: number): number {
		if (newIndex < 0) return maxIndex - 1;
		else if (newIndex >= maxIndex) return 0;
		else return newIndex;
	}

	const images = imageUrls.map(
		(url: string, i: number) => <img className={`absolute object-cover transition-opacity duration-500 ${index === i ? "" : "opacity-0"}`} style={imageStyles[i]} key={`${ctx.type}${i}image`} src={url} />
	)

	return (
		<div className="relative flex flex-col w-full aspect-[8/5] overflow-hidden overflow-x-auto">
			<div className="flex justify-between flex-1">
				{
					index !== 0
					?
					<div onClick={prev} className="flex flex-1 justify-start items-center cursor-pointer z-10 ps-4">
						<button className="flex justify-center items-center w-8 h-8 rounded-full bg-white/50 dark:bg-neutral-800/75">
							<Icon src="chevron_left" />
						</button>
					</div>
					:
					<div className="flex flex-1 justify-start items-center z-10 ps-4" />
				}
				{
					index !== ctx.data.maxIndex - 1
					?
					<div onClick={next} className="flex flex-1 justify-end items-center cursor-pointer z-10 pe-4">
						<button className="flex justify-center items-center w-8 h-8 rounded-full bg-white/50 dark:bg-neutral-800/75">
							<Icon src="chevron_right" />
						</button>
					</div>
					:
					<div className="flex flex-1 justify-end items-center z-10 ps-4" />
				}
			</div>
			{ ...images }
			<div className="flex justify-center items-center z-10 p-2 space-x-2">
				{
					images.map(
						(_image: any, i: number) => (
							<button
								onClick={() => setIndex(i)}
								className={`w-6 md:w-8 h-1 ${index === i ? "bg-white" : "bg-neutral-300"}`}
								key={`${ctx.type}${i}button`}
							/>
						)
					)
				}
			</div>
		</div>
	)
}