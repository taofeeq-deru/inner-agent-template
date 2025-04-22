import { Agent } from "@mastra/core";
import { openai } from "@ai-sdk/openai";

export const innerAgent = new Agent({
  name: "inner-agent",
  instructions: "You are a helpful assistant",
  model: openai("gpt-4o")
});
