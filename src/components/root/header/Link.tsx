import NextLink from 'next/link'

interface ILink {
	children: React.ReactNode
	href: string
}

export default function Link(ctx: Readonly<ILink>) {
	return (
		<NextLink
			className="
				flex justify-center items-center
				w-auto h-full px-2 text-sm
				text-white bg-neutral-700 hover:bg-neutral-600
			"
			href={ctx.href}
		>
			{ctx.children}
		</NextLink>
	)
}