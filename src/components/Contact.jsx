import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let err = {};
    if (!data.from_name) err.name = "Name is required";
    if (!data.from_email) err.email = "Email is required";
    if (!data.message) err.message = "Message cannot be empty";
    return err;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    // 1️⃣ SEND EMAIL TO YOU
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // 2️⃣ AUTO REPLY TO USER
      .then(() => {
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_ID,
          {
            to_email: data.from_email,
            from_name: data.from_name,
            message: data.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      })

      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current.reset();

        setTimeout(() => setSuccess(false), 4000);
      })

      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-sky-50">

      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
          Let’s Connect
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Have a project, opportunity, or idea? I’d love to hear from you.
        </p>

        {/* FORM */}
        <div className="bg-white border rounded-3xl shadow-lg p-8">

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <div>
              <input
                name="from_name"
                placeholder="Your Name"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-sky-200"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="from_email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-sky-200"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-sky-200"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 rounded-xl hover:bg-sky-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

        {/* SUCCESS */}
        {success && (
          <div className="mt-6 text-center animate-bounce">
            <h3 className="text-green-600 text-xl font-semibold">
              Message Sent Successfully 🎉
            </h3>
            <p className="text-gray-500">
              Thanks! I’ll get back to you soon.
            </p>
          </div>
        )}

        {/* SOCIALS */}
        <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-600">
          <a href="https://github.com/mamatadhkr"><FaGithub /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>

      </div>
    </section>
  );
}