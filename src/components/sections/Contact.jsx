export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const subject = `Message from ${name}`;
        const body =
            `Name: ${name}%0D%0A` +
            `Email: ${email}%0D%0A%0D%0A` +
            `${encodeURIComponent(message)}`;
        const myEmail = atob("dG5hdGVjYXJnaWxlQGdtYWlsLmNvbQ==");
        window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center
            justify-center py-20"
        >
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Contact Me
                </h2>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Name"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Email"
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
