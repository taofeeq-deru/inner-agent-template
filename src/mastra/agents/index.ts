import { Agent } from "@mastra/core";
import { groq } from "@ai-sdk/groq";

export const innerAgent = new Agent({
  name: "inner-agent",
  instructions: "You are a helpful assistant",
  model: groq(process.env.MODEL ?? llama-3.3-70b-versatile)
});
