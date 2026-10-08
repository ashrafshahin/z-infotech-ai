// app/api/contact/route.js
//
// POST /api/contact
//
// Validates the enquiry and returns JSON.
// NOTE: nothing is emailed yet. Submissions are logged server-side so they
// aren't lost during testing. Remove the log before production.
// TODO: send the enquiry (e.g. Resend) and return a confirmed send.

import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = {
  name: 100,
  email: 254,
  projectDetails: 5000,
  minProjectDetails: 20,
};

function errorResponse(status, error, details) {
  return NextResponse.json(
    details ? { error, details } : { error },
    { status }
  );
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return errorResponse(400, "The request body must be valid JSON.");
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return errorResponse(400, "The request body must be an object.");
  }

  const fields = {
    name: typeof payload.name === "string" ? payload.name.trim() : "",
    email: typeof payload.email === "string" ? payload.email.trim() : "",
    serviceId:
      typeof payload.serviceId === "string" ? payload.serviceId.trim() : "",
    projectDetails:
      typeof payload.projectDetails === "string"
        ? payload.projectDetails.trim()
        : "",
  };

  const errors = {};

  if (!fields.name) {
    errors.name = "Full name is required.";
  } else if (fields.name.length > LIMITS.name) {
    errors.name = `Name must be ${LIMITS.name} characters or fewer.`;
  }

  if (!fields.email) {
    errors.email = "Email address is required.";
  } else if (fields.email.length > LIMITS.email) {
    errors.email = "Enter a valid email address.";
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.serviceId) {
    errors.serviceId = "Please choose a service of interest.";
  }

  if (!fields.projectDetails) {
    errors.projectDetails = "Project details are required.";
  } else if (fields.projectDetails.length < LIMITS.minProjectDetails) {
    errors.projectDetails = `Please give us at least ${LIMITS.minProjectDetails} characters, a short outline of the outcome you want.`;
  } else if (fields.projectDetails.length > LIMITS.projectDetails) {
    errors.projectDetails = `Project details must be ${LIMITS.projectDetails} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(400, "Please correct the highlighted fields.", errors);
  }

  try {
    // TODO: send the enquiry here, e.g. with Resend, then return the send ID.
    console.info("Contact enquiry received:", {
      name: fields.name,
      email: fields.email,
      serviceId: fields.serviceId,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Message received. We will get back to you within one working day." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return errorResponse(
      500,
      "We could not process your request. Please try again later."
    );
  }
};