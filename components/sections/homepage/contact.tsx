"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setNotice(data?.message || "Thanks — your message has been sent.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <section id="contact" className="bg-background scroll-mt-24">
        <div className="mx-auto my-16 max-w-350 rounded-2xl ">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary md:text-4xl">
                Get in Touch.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-600 md:text-base">
                Share a few details and we&apos;ll get back to you as soon as
                possible. We aim to respond to all inquiries as soon as possible.
              </p>

              <div className="mt-8 space-y-4 text-sm text-zinc-700">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Email
                  </p>
                  <a
                    href="mailto:info@kakanobiosciences.co.nz"
                    className="mt-2 inline-block transition-colors hover:text-primary"
                  >
                    info@kakanobiosciences.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Location
                  </p>
                  <p className="mt-2">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 sm:col-span-1">
                  <span className="text-sm font-medium text-zinc-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Your name"
                  />
                </label>

                <label className="space-y-2 sm:col-span-1">
                  <span className="text-sm font-medium text-zinc-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="example@email.com"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium text-zinc-700">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Optional"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium text-zinc-700">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Tell us a little about what you need"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex mx-auto flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-secondary px-36 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
}
