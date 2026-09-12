// Example contact page component in Next.js 13 with Tailwind CSS
export default function ContactPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-6">
                This is a placeholder for the Contact page.
                Add your form or contact details here.
            </p>

            {/* Example placeholder form */}
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your message..."
                        className="mt-1 block w-full border rounded-md p-2"
                        rows={4}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                >
                    Send
                </button>
            </form>
        </main>
    );
}
