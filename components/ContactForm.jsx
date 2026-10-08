// components/ContactForm.jsx
"use client";

import { useState } from "react";
import { services } from "@/lib/site";

const EMPTY_STATE = {
  name: "",
  email: "",
  serviceId: "",
  projectDetails: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.serviceId) {
    errors.serviceId = "Please choose a service of interest.";
  }

  if (!values.projectDetails.trim()) {
    errors.projectDetails =
      "Project details are required. Tell us a little about what you want built.";
  } else if (values.projectDetails.trim().length < 20) {
    errors.projectDetails =
      "Please give us at least 20 characters, a short outline of the outcome you want.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_STATE);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setSubmitStatus(null);

    // Clear this field's error as the user types.
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const { [name]: _cleared, ...rest } = current;
      return rest;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(values);
    setFieldErrors(nextErrors);
    setFormError(null);
    setSubmitStatus(null);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          serviceId: values.serviceId,
          projectDetails: values.projectDetails.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
          setSubmitStatus("error");
          if (data.details) setFieldErrors(data.details);
          setFormError(data.error || "We could not send your message. Please try again.");
          return;
        }

      setSubmitStatus("success");
      setValues(EMPTY_STATE);
    } catch {
      setSubmitStatus("error");
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="mt-1 w-full rounded border px-3 py-2"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="mt-1 w-full rounded border px-3 py-2"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="serviceId" className="block text-sm font-medium">
          Service of interest
        </label>
        <select
          id="serviceId"
          name="serviceId"
          value={values.serviceId}
          onChange={handleChange}
          className="mt-1 w-full rounded border px-3 py-2"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {fieldErrors.serviceId && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.serviceId}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium">
          Project details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={5}
          value={values.projectDetails}
          onChange={handleChange}
          className="mt-1 w-full rounded border px-3 py-2"
        />
        {fieldErrors.projectDetails && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.projectDetails}</p>
        )}
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}
      {submitStatus === "success" && (
        <p className="text-sm text-green-600">
          
          Thanks, we have received your enquiry. We'll be in touch soon.
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="rounded bg-black px-5 py-2 text-white disabled:opacity-60"
      >
        {isSending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};