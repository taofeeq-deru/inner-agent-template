import { Agent } from "@mastra/core";
import { anthropic } from "@ai-sdk/anthropic";

export const innerAgent = new Agent({
  name: "inner-agent",
  instructions: "You are a helpful assistant",
  model: anthropic(process.env.MODEL ?? claude-3-5-sonnet-20240620)
});
