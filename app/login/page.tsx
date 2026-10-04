export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <p className="text-lg mb-8">Please log in to access the application.</p>

            <form action="">
                <input type="text" placeholder="Username" className="border p-2 mb-4 w-64" />
                <input type="password" placeholder="Password" className="border p-2 mb-4 w-64" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-64">
                    Log In
                </button>
            </form>
        </div>

    );
}