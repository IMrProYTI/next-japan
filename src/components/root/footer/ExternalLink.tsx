interface IExternalLink {
	children: React.ReactNode
	href: string
}

export default function ExternalLink(ctx: IExternalLink) {
	return (
		<a
			className="underline text-blue-500 hover:text-blue-600"
			href={ctx.href}
			target="_blank"
		>
			{ctx.children}
		</a>
	)
}