import ImageLink from "@/components/root/footer/ImageLink"
import ExternalLink from "@/components/root/footer/ExternalLink"

interface ILink {
	link: string
	text: string
}

export default function Footer() {
	const links: ILink[] = [
		{ link: "https://vk.com/japanclubm", text: "Мы во ВКонтакте" },
		{ link: "https://t.me/japanclubmirea", text: "Мы в Telegram" },
		{ link: "https://www.youtube.com/@user-ot1vk5tc2i", text: "Мы на YouTube" },
		{ link: "https://discord.com/invite/whUKEvMjgy", text: "Мы в Discord" },
		{ link: "https://jc.org.ru/ru/index", text: "Японский центр" },
		{ link: "https://vk.com/yatoisada", text: "Президент клуба" }
	]

	return (
		<footer className="w-full h-auto p-2 space-y-8 text-white bg-neutral-800">
			<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 *:flex *:flex-col *:justify-stretch *:items-center *:w-auto *:h-full m-4">
				<div className="xl:col-start-2">
					<div className="space-y-1">
						<h4 className="font-semibold text-lg">О нас</h4>
						<p>Клуб Японской Культуры ждет новых участников.</p>
						<p>Фестивали, турниры, показы фильмов - всё это и еще много мероприятий, которые проводит наш клуб.</p>
					</div>
				</div>
				<div>
					<div>
						<h4 className="font-semibold text-lg">При поддержке</h4>
						<ImageLink image="Gerb" href="https://www.mirea.ru/" alt="Герб РТУ МИРЭА" />
						<ImageLink image="Stud" href="https://sumirea.ru/" alt="Студенческий союз МИРЭА" />
					</div>
				</div>
				<div>
					<div className="flex flex-col h-full">
						<h4 className="font-semibold text-lg">Полезные ссылки</h4>
						<ul className="flex flex-col flex-1 justify-around">
							{
								links.map((el, i) => (
									<li key={`li${i}`}>• <ExternalLink href={el.link}>{el.text}</ExternalLink></li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
			<div className="grid gap-2 grid-cols-2 *:text-center">
				<p>Сделано с ❤️ для Клуба Японской Культуры</p>
				<div className="flex justify-around flex-wrap *:text-center *:px-1">
					<p>Разработано: <a className="underline text-blue-500 hover:text-blue-600" href="https://poti.netlify.app/">POTI</a></p>
					<p>Код на <a className="underline text-blue-500 hover:text-blue-600" href="https://github.com/IMrProYTI/next-japan">Github</a></p>
				</div>
			</div>
		</footer>
	)
}