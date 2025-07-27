export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-200">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
      <form name="contact" method="POST" data-netlify="true" className="max-w-xl mx-auto space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 border rounded" required></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
