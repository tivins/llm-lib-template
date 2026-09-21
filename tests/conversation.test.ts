import { describe, expect, test } from "bun:test";
import { Conversation, Message, Role } from "llm-lib-ts";

describe("llm-lib-ts from GitHub", () => {
  test("builds an OpenAI-style chat payload", () => {
    const conversation = new Conversation([
      new Message(Role.System, "You are a concise assistant."),
      new Message(Role.User, "Say hello."),
    ]);

    expect(conversation.toChatCompletionPayload()).toEqual([
      { role: "system", content: "You are a concise assistant." },
      { role: "user", content: "Say hello." },
    ]);
  });
});
