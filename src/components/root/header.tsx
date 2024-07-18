import Link from "./header/Link"
import Icon from "./header/Icon"

export default function Header() {
	return (
		<header className="absolute flex justify-between items-stretch w-full h-10 px-2 bg-neutral-800 z-50">
			<nav className="flex divide-x divide-neutral-800">
				<Link href="/">Главная</Link>
				<Link href="/gallery">Галерея</Link>
				<Link href="/admin">Админка</Link>
			</nav>
			<div className="flex-center pe-2">
				<Icon
					href="https://vk.com/japanclubm"
					src="/logos/VK.svg"
					alt="VK группа"
				/>
				<Icon
					href="https://t.me/japanclubmirea"
					src="/logos/Telegram.svg"
					alt="Telegram канал"
				/>
				<Icon
					href="https://www.youtube.com/@user-ot1vk5tc2i"
					src="/logos/Youtube.svg"
					alt="Youtube канал"
				/>
				<Icon
					href="https://discord.com/invite/whUKEvMjgy"
					src="/logos/Discord.svg"
					alt="Discord сервер"
				/>
			</div>
		</header>
	)
}