import { useRef, useState } from 'react';
import ParticleOrb from './Components/ParticleOrb';

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const { default: emailjs } = await import('@emailjs/browser');

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('✅ Message sent successfully!');
      form.current.reset();
    } catch (error) {
      alert('❌ Failed to send message. Please try again later.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact">
      <div
        className="section-header connect"
        id="contact"
        data-aos="fade-right"
      >
        <h2>Connect</h2>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          data-aos="fade-up"
        >
          <div className="form-group subject">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Title of the message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn contact-btn" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Particle Animation beside the form */}
        <div className="particle-side">
          <ParticleOrb hue={180} total={300} size={120} />
        </div>
      </div>
    </section>
  );
}
