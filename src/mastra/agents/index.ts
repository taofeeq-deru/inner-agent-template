import { Agent } from "@mastra/core";
import { google } from "@ai-sdk/google";

export const innerAgent = new Agent({
  name: "inner-agent",
  instructions: "You are a helpful assistant",
  model: google(process.env.MODEL ?? gemini-1.5-pro-latest)
});
