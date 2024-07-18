import ViewBlock from "./gallery/ViewBlock";

export default function Gallery() {
	return (
		<>
			<ViewBlock
				title="Актуальные фото"
				description="Фотографии, которые были сделаны относительно недавно. Они показывают, каков клуб на данный момент."
				type="actual"
			/>
			<ViewBlock
				title="Архивные фото"
				description="Фотографии, которые были сделаны достаточно давно, но не потеряли своей актуальности."
				type="archive"
			/>
		</>
	)
}