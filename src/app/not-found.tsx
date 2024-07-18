import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex-center flex-col w-full h-screen *:text-center">
			<Image
				src="/404.png"
				width={500}
				height={500}
				priority={true}
				alt="Картинка ошибки 404"
			/>
			<h1 className="text-8xl sm:text-9xl">404</h1>
			<p className="text-base sm:text-xl">Данной страницы не существует...</p>
			<Link href="/" className="text-base sm:text-xl underline text-blue-500 hover:text-blue-600">Вернутся на глувную</Link>
		</div>
	)
}