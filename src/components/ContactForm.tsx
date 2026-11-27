"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please enter a subject."),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
  website: z.string().max(0, "Spam detected."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
  });

  function onSubmit(values: FormValues) {
    setLoading(true);
    setStatus("");
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`);
    const mailto = document.createElement("a");
    mailto.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    mailto.click();
    setStatus("Your email application should open with the message prepared.");
    reset();
    setLoading(false);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div className="field full">
          <label htmlFor="subject">Subject</label>
          <input id="subject" placeholder="Project or opportunity" {...register("subject")} />
          {errors.subject && <span className="error">{errors.subject.message}</span>}
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell me about your idea..." {...register("message")} />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </div>
        <div className="field full" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>
      </div>
      <button className="button primary" type="submit" disabled={loading}>
        {loading ? "Preparing..." : "Send Message"} <Send size={16} />
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
