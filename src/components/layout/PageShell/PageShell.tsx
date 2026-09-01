type PageShellProps = {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-6xl px-6 py-10">
      {children}
    </main>
  )
}
