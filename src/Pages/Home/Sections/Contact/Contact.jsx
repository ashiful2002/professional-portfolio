// src/pages/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl text-center flex flex-col xl:flex-row justify-between">
        <div className="">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="mb-6">
            I'd love to hear from you! Feel free to reach out through any of the
            methods below.
          </p>

          <div className="space-y-4 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:ashifulialam2002@gmail.com"
                className="text-blue-600 underline"
              >
                ashifulialam2002@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+880759907907" className="text-blue-600">
                +880 1759-907907
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/+8801759907907"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Optional: Contact form */}

        <div className=" ">
          <form className="mt-8 space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-lg"
              rows="4"
              required
            />
            <button type="submit" className=" btn -primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
