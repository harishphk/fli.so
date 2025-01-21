import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  console.log("locals", locals);

  if (!locals.pb.authStore.isValid && !locals.user.is_blocked) {
    throw redirect(302, "/app/login");
  }

  return {
    reason: locals.user.blocked_reason,
  };
};
