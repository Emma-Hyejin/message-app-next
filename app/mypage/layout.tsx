export default function MyPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>NAV SECTION</nav>
            {children}
        </section>
    )
}