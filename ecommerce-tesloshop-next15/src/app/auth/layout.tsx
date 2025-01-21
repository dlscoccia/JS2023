export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className='min-h-screen bg-indigo-600'>{children}</main>;
}
