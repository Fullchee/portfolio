import * as Sentry from "@sentry/nextjs";

export async function register() {
  const runtime = process.env["NEXT_RUNTIME"];

  if (runtime === "nodejs") {
    await import("./sentry.server.config");
  } else if (runtime === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
