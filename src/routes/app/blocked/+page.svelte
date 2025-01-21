<script lang="ts">
  import type { PageData } from "./$types";
  import { Logo } from "$lib/components/ui/core/misc";
  import { Button } from "$lib/components/ui/button";
  import { Shield, Mail, AlertCircle } from "lucide-svelte";

  let { data }: { data: PageData } = $props();

  const commonReasons = {
    spam: "Sending spam or unwanted promotional content",
    abuse: "Abusive behavior or harassment",
    terms: "Multiple violations of our terms of service",
    malware: "Spreading malware or malicious content",
    phishing: "Phishing attempts or fraudulent activity",
  };
</script>

<div class="flex min-h-screen flex-col items-center p-4 pt-8">
  <!-- Logo at the top -->
  <div class="mb-8">
    <Logo href="/app/login" />
  </div>

  <!-- Main content card -->
  <div class="w-full max-w-md rounded-4xl bg-card/40 p-2">
    <div class="mb-8 flex flex-col items-center gap-2 text-center">
      <div class="mt-4 flex flex-col gap-2">
        <div class="flex justify-center">
          <Shield class="size-12 text-destructive" />
        </div>
        <h1 class="text-2xl font-medium text-destructive">Account Blocked</h1>
        <p class="max-w-sm text-base text-muted-foreground">
          Your account has been suspended due to a violation of our terms of
          service.
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-4 rounded-4xl bg-white p-6">
      <div class="space-y-4">
        <!-- Current Block Reason -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <AlertCircle class="size-4 text-destructive" />
            <h2 class="font-medium">Your Block Reason:</h2>
          </div>
          <p class="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
            {data.reason}
          </p>
        </div>

        <!-- Common Block Reasons -->
        <div class="space-y-2">
          <h2 class="font-medium">Common Reasons for Blocks:</h2>
          <ul class="space-y-2 text-sm text-muted-foreground">
            {#each Object.entries(commonReasons) as [key, reason]}
              <li class="flex items-start gap-2">
                <span
                  class="mt-1 size-1.5 rounded-full bg-muted-foreground/30"
                />
                <span>{reason}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="space-y-2">
          <h2 class="font-medium">What can you do?</h2>
          <p class="text-sm text-muted-foreground">
            If you believe this is a mistake or would like to appeal this
            decision, please contact our support team. We'll review your case
            and respond within 24-48 hours.
          </p>
        </div>

        <div class="space-y-3">
          <Button
            variant="outline"
            class="w-full rounded-2xl"
            href="mailto:sanju@fli.so"
          >
            <Mail class="mr-2 size-4" />
            Contact Support
          </Button>

          <div class="text-center text-sm text-muted-foreground">
            <p>
              Email us directly at:
              <a
                href="mailto:sanju@fli.so"
                class="text-primary hover:underline"
              >
                team@fli.so
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
