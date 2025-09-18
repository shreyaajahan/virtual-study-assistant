import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { USER_TABLE } from "@/configs/schema";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const { user } = event.data;

    const result = await step.run(
      "Check User and create New if Not in DB",
      async () => {
        // check if user already exists
        const existing = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

        if (existing?.length === 0) {
          await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
        }

        return "Success"; // ✅ always return Success
      }
    );

    return result;
  }
);
