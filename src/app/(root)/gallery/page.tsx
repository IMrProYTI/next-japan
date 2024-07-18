import BackgroundTwigs from "@/components/root/BackgroundTwigs";
import Gallery from "@/components/root/Gallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея | Клуб Японской Культуры",
};

export default function GalleryPage() {
	return (
		<div className="relative flex flex-col min-w-full min-h-svh flex-center pt-10 overflow-clip">
			<div className="p-6 space-y-4">
				<h3 className="font-semibold text-3xl text-center">Галерея</h3>
				<p></p>
      	<Gallery />

			</div>
			<BackgroundTwigs />
		</div>
	)
}