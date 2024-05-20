export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <main className="w-full flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
