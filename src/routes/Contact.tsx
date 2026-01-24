import { useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact request", formData);
    alert("Thanks — we will respond shortly.");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div>
      <SEO title="Contact | Interoplens" />
      <Section title="Contact" subtitle="Tell us about your interoperability goals.">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-mist p-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink" htmlFor="organization">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
          <div className="space-y-4 text-slate">
            <p className="text-base font-semibold text-ink">Contact email</p>
            <p>contact@interoplens.com</p>
            <p className="text-sm">
              We respond within two business days and can schedule a discovery call as part of
              the pilot program.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
