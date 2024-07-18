import Image from "next/image";

export default function BackgroundTwigs() {
	return (
		<>
			<Image
				className="absolute drop-shadow-lg -top-48 -left-8 opacity-15 -z-10 scale-90 rotate-90"
				src="/twig.png"
				width={375}
				height={500}
				alt="Веточка сакуры"
			/>
			<Image
				className="absolute drop-shadow-lg -right-8 inset-y-1/2 opacity-15 -z-10 scale-90 -rotate-90"
				src="/twig.png"
				width={375}
				height={500}
				alt="Веточка сакуры"
			/>
			<Image
				className="absolute drop-shadow-lg -bottom-48 -left-32 opacity-15 -z-10 scale-90 -rotate-45"
				src="/twig.png"
				width={375}
				height={500}
				alt="Веточка сакуры"
			/>
		</>
	)
}