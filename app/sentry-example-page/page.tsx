"use client";

import { diagnoseSdkConnectivity, logger, startSpan } from "@sentry/nextjs";
import { useEffect, useState } from "react";

class SentryExampleFrontendError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SentryExampleFrontendError";
  }
}

async function throwSampleError(onBackendError: () => void) {
  logger.info("User clicked the button, throwing a sample error");

  await startSpan({ name: "Example Frontend/Backend Span", op: "test" }, async () => {
    const res = await fetch("/api/sentry-example-api");

    if (!res.ok) {
      onBackendError();
    }
  });

  throw new SentryExampleFrontendError("This error is raised on the frontend of the example page.");
}

function Status({ hasSentError, isConnected }: { hasSentError: boolean; isConnected: boolean }) {
  if (hasSentError) {
    return <p className="rounded-lg bg-brand-50 px-4 py-3 text-ink">Error sent to Sentry.</p>;
  }

  if (isConnected) {
    return <div className="h-12" />;
  }

  return (
    <p className="max-w-lg rounded-lg border border-brand-700 bg-surface px-4 py-3 text-center text-ink">
      It looks like network requests to Sentry are being blocked, which will prevent errors from
      being captured. Try disabling your ad-blocker to complete the test.
    </p>
  );
}

export default function Page() {
  const [hasSentError, setHasSentError] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    logger.info("Sentry example page loaded");

    async function checkConnectivity() {
      const result = await diagnoseSdkConnectivity();
      setIsConnected(result !== "sentry-unreachable");
    }

    void checkConnectivity();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-xl">
      <h1 className="font-mono">sentry-example-page</h1>

      <p className="max-w-lg text-center">
        Click the button below, and view the sample error on the Sentry{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://fullchee.sentry.io/issues/?project=6306483"
        >
          Issues Page
        </a>
        .
      </p>

      <button
        type="button"
        className="rounded-lg bg-brand-600 px-4 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => void throwSampleError(() => setHasSentError(true))}
        disabled={!isConnected}
      >
        Throw Sample Error
      </button>

      <Status hasSentError={hasSentError} isConnected={isConnected} />
    </main>
  );
}
