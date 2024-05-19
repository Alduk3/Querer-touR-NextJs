export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <main className="w-full max-w-4xl p-4">
          {children}
        </main>
      </div>
    );
  }
  