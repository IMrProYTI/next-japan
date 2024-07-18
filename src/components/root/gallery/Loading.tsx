import Icon from "@/components/Icon"

export default function Loading() {
	return (
		<div className="flex-center w-full aspect-[8/5]">
			<Icon
				classImage="animate-spin"
				src="progress_activity"
			/>
		</div>
	)
}