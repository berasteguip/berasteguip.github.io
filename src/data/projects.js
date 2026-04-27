import { links } from "./links.js";

export const projects = [
  {
    name: "Driver Drowsiness Detector",
    role: "Solo dev",
    summary:
      "Applied computer vision system for detecting signs of driver drowsiness.",
    problem:
      "Driver drowsiness can cause car accidents, and the project focused on detecting that risk through visual signals.",
    built:
      "Built a Python-based ML and computer vision system using OpenCV and MediaPipe.",
    stack: ["Python", "OpenCV", "MediaPipe", "ML", "Computer Vision"],
    status: "Shared publicly through a LinkedIn post.",
    links: [links.drowsinessPost],
  },
  {
    name: "Optimos Agency",
    role: "Founder",
    summary:
      "AI automation solutions for SMEs through workflows, integrations, and agent-based systems.",
    problem:
      "SME operations often contain messy workflows that can be clarified and automated with selective AI systems.",
    built:
      "Building AI-driven automation systems using Python, n8n, and LLMs including GPT and Gemini.",
    stack: ["Python", "n8n", "LLMs", "GPT", "Gemini"],
    status: "Current entrepreneurship project, September 2025-present.",
    links: [links.optimos],
  },
  {
    name: "Daily-Pill",
    role: "Builder",
    summary:
      'Daily micro-learning through short knowledge "pills" designed as an alternative to doomscrolling.',
    problem:
      "The product concept explores how short AI/content workflows can create a more intentional learning habit.",
    built:
      "Built a product-style concept around AI and content workflows for short daily knowledge consumption.",
    stack: ["Product concept", "AI workflows", "Content workflows"],
    status: "Public demo available.",
    links: [links.dailyPill],
  },
];
