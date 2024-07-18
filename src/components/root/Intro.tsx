import Image from "next/image"
import Icon from "@/components/Icon"

export default function Intro() {
	return (
		<div className="relative flex-center w-full h-svh">
			<Image
				className="absolute w-full h-full object-cover object-center brightness-50"
				src="/background.jpg"
				width={2048}
				height={1330}
				alt="Задний фон"
			/>
			<div className="absolute flex-center flex-col inset-0 space-y-2 text-white">
				<Image
					className="max-w-full max-h-96 p-4"
					src="/logo.png"
					width={384}
					height={384}
					alt="Логотип КЯКа"
				/>
				<div className="flex-center flex-col rounded-xl p-2 m-2 space-y-2">
          <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-6xl m-2">Клуб Японской Культуры</h1>
          <hr className="w-full"/>
          <p className="font-semibold text-sm lg:text-base text-center">
            Мы приглашаем вас познакомится с удивительной культурой страны восходящего солнца.
          </p>
        </div>
			</div>
			<Icon classDiv="absolute w-8 h-8 bottom-0" classImage="animate-bounce text-white" src="keyboard_arrow_down" />
		</div>
	)
}