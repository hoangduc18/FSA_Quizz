function AnonymousLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className='flex-1 relative h-screen'>
                <img src="../../public/assets/background-01.jpeg" alt="?" className="w-full h-screen object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {children}
                </div>
            </main>
        </>
    );
}

export default AnonymousLayout;