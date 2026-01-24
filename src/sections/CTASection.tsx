import { useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";

const CTASection = () => {
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
    <Section
      title="Start a pilot"
      subtitle="Tell us about your interoperability priorities and we will follow up with a scoped pilot plan."
      className="section-reveal"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]" id="contact">
        <form
          onSubmit={handleSubmit}
          className="card-reveal space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900" htmlFor="organization">
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <Button type="submit" variant="primary">
            Submit request
          </Button>
        </form>
        <div className="card-reveal space-y-4 text-slate-600">
          <p className="text-base font-semibold text-slate-900">Contact</p>
          <p>contact@interoplens.com</p>
          <p className="text-sm">
            We respond within two business days and align pilots to specific TEFCA
            implementations.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
