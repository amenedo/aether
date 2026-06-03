import { Router } from "express";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

// Setup Gemini client lazily/safely if key exists
let ai: GoogleGenAI | null = null;
const geminiKey = process.env.GEMINI_API_KEY;

if (geminiKey && geminiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: geminiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build-vercel',
        }
      }
    });
    console.log("AETHER Engine (Shared): Gemini AI Client initialized successfully.");
  } catch (e) {
    console.error("AETHER Engine Error: Failed to initialize Gemini client", e);
  }
} else {
  console.log("AETHER Engine (Shared): GEMINI_API_KEY not defined or placeholder. Using fallback creative generator.");
}

// API endpoint for AI Project Proposal co-creation
router.post("/api/aether/proposal", async (req, res) => {
  try {
    const { description, budgetRange, projectType } = req.body;

    if (!description || typeof description !== "string" || description.trim().length === 0) {
      return res.status(400).json({ error: "Please provide a valid project description." });
    }

    const cleanDescription = description.slice(0, 1000); // safety cap

    if (ai) {
      console.log(`Generating proposal using Gemini for: "${projectType}" project.`);
      try {
        const prompt = `
          You are the Master Creative Director and Lead Solutions Architect at AETHER, a world-class elite design and innovative tech studio.
          A prospective VIP client wants to create with us. Here are the parameters:
          - Project Type/Focus: ${projectType || 'Innovative Tech / Creative Experience'}
          - Estimated Target Scale: ${budgetRange || 'Premium Tier'}
          - Raw Client Idea: "${cleanDescription}"

          Generate an absolutely spectacular, innovative, custom project response fitting a elite luxury/tech agency's style. No generic jargon. Give extreme, vivid, cinematic, and technically elite ideas.
          The response MUST follow the strict JSON schema provided. Deliver the exact keys.
        `;

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            systemInstruction: `You are the core intelligence of AETHER, an elite multi-disciplinary agency. Your tone is highly professional, technical, artistic, and visually vivid. Your design choices reflect extreme contemporary aesthetic sensibilities (Awwwards-level concept design, custom branding, cinematography, AI agents, unique interactivity). You must respond with valid JSON matching the exact requested Type.OBJECT schema.`,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              required: [
                "projectName",
                "conceptTitle",
                "aestheticMood",
                "architecturalCore",
                "timelineEstimate",
                "techStack",
                "recommendedModules",
                "visualPalette",
                "executiveSummary"
              ],
              properties: {
                projectName: {
                  type: Type.STRING,
                  description: "High-end conceptual name of the project."
                },
                conceptTitle: {
                  type: Type.STRING,
                  description: "Stunning vision slogan or creative concept tagline."
                },
                aestheticMood: {
                  type: Type.STRING,
                  description: "Visual and atmosphere description (e.g. 'Obsidian glow, volumetric lighting, Swiss typography, tactile microinteractions')."
                },
                architecturalCore: {
                  type: Type.STRING,
                  description: "Innovative technological framework detail."
                },
                timelineEstimate: {
                  type: Type.STRING,
                  description: "Strategic delivery timeline (e.g. '8-10 Weeks' or '12 Weeks in 3 phased waves')."
                },
                techStack: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "State-of-the-art tech components (e.g. 'Vite', 'Three.js', 'NextJS SSR', 'FastAPI with PyTorch APIs', 'LLM Agent Swarms')."
                },
                recommendedModules: {
                  type: Type.ARRAY,
                  description: "Key creative touchpoints or interactive waves of the system.",
                  items: {
                    type: Type.OBJECT,
                    required: ["title", "desc"],
                    properties: {
                      title: { type: Type.STRING, description: "Module title (e.g., 'Volumetric Hologram Stage')" },
                      desc: { type: Type.STRING, description: "Technological or artistic description of this module." }
                    }
                  }
                },
                visualPalette: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Array of 4 hex colors related to this project aesthetic (e.g. '#070707', '#ff4500')",
                },
                executiveSummary: {
                  type: Type.STRING,
                  description: "Deep, compelling, and beautifully structured paragraph convincing the client that AETHER will deliver a masterpiece."
                }
              }
            }
          }
        });

        const resultText = response.text;
        if (resultText) {
          const proposalData = JSON.parse(resultText);
          return res.json(proposalData);
        } else {
          throw new Error("Empty response from AI client.");
        }
      } catch (apiError) {
        console.error("Gemini invocation failed, falling back to rich static engine:", apiError);
        // fall through to mock
      }
    }

    // High-Fidelity Fallback Agency Engine
    console.log("Generating high-fidelity fallback response for VIP project.");
    
    const ideasPool = {
      web: {
        name: "Project NEURAL_CANVAS",
        concept: "Sensory Web Topology with Generative Shaders",
        mood: "Brutalist dark luxury, fluid WebGL topologies, high-contrast typography, magnetic cursor grids",
        core: "Custom React framework paired with Three.js/Shaders, real-time audio analysis, and decentralized asset caching.",
        timeline: "8 - 10 Weeks",
        tech: ["Vite", "React 19", "Three.js", "GSAP WebGL", "Rust WASM Compression"],
        modules: [
          { title: "Fluid Topology Portal", desc: "Interactive continuous header utilizing a 3D noise fluid field conforming dynamically to visitor interaction." },
          { title: "Decentralized Gallery Node", desc: "High-performance imagery grid optimized using edge CDN pre-fetching with custom cubic-bezier loading states." },
          { title: "Voice-driven Interactive Core", desc: "Allows visitors to speak to the canvas, immediately morphing structure and layout schemes based on tone sentiment." }
        ],
        colors: ["#030303", "#FF4F00", "#1E2A38", "#FFFFFF"],
        summary: "We have architecturalized a premier interactive portal that translates your physical identity into structured, real-time kinetic visual patterns, elevating standard service web architectures to an immersive sensory brand platform."
      },
      ai: {
        name: "System CORE_INTELLIGENCE",
        concept: "Multi-Agent Neural Integration for Autonomous Branding",
        mood: "Cinematic telemetry noir, sleek monospace grids, bright emerald pulse indicators, ultra-dense statistics graphs",
        core: "Distributed AI agent swarms powered by custom LLM prompt tunnels, caching metrics, and structured semantic databases.",
        timeline: "12 Weeks (Phased Delivery)",
        tech: ["FastAPI Backend", "LangChain Suite", "Gemini 3.5 Pro API", "NextJS AppRouter", "PostgreSQL VectorDB"],
        modules: [
          { title: "Aether AI Agent Coordinator", desc: "An autonomous agent that supervises web metrics, social sentiment, and asset performance, auto-proposing visual branding shifts." },
          { title: "Neural Asset Sandbox", desc: "Automatically generates matching digital visual components, tone variations, and media templates in real-time." },
          { title: "Dynamic CRM Command Center", desc: "A telemetry HUD showing visual user-behavior indicators map overlaid with live decision tracking." }
        ],
        colors: ["#050505", "#10B981", "#064E3B", "#BAC5C0"],
        summary: "Our proposed multi-agent system constructs a living ecosystem around your core. Instead of passive infrastructure, this platform actively thinks, generates solutions, and expands your creative output under strict luxury brand guidelines."
      },
      media: {
        name: "Production KINETIC_MONOLITH",
        concept: "Immersive Cinematic Experience with Generative Audio-Visual Assets",
        mood: "Atmospheric fog, high contrast editorial layout, dramatic amber lighting offsets, smooth cinematic fades",
        core: "Symmetric combination of high-resolution video streaming, localized soundscapes, and adaptive parallax narration.",
        timeline: "6 - 8 Weeks",
        tech: ["HLS Video Proxying", "Web Audio API Node", "SvelteKit Static Pipeline", "AfterEffects Lottie Renders", "FFmpeg AWS Nodes"],
        modules: [
          { title: "Volumetric Story Slider", desc: "A premium full-screen multi-dimensional horizontal carousel where each frame reacts to cursor spatial movement." },
          { title: "Interactive Audio Canvas", desc: "Generates custom ambient background audio and sound design triggers which adapt dynamically to scrolling velocity." },
          { title: "Cinematographic Media Vault", desc: "A beautifully animated high-fidelity stream panel supporting instant cinematic preview nodes with no latency." }
        ],
        colors: ["#080808", "#F59E0B", "#1F1F1F", "#FBFBFB"],
        summary: "By bridging extreme production values and lightning-fast media deployment, we build an evocative, luxury digital exhibit. Each scroll feels like an editorial camera movement, capturing interest instantly through flawless performance."
      }
    };

    // Select category or fallback
    let matched = ideasPool.web;
    const typeLower = (projectType || '').toLowerCase();
    if (typeLower.includes("ai") || typeLower.includes("intelligence") || typeLower.includes("automation")) {
      matched = ideasPool.ai;
    } else if (typeLower.includes("media") || typeLower.includes("branding") || typeLower.includes("film") || typeLower.includes("creative")) {
      matched = ideasPool.media;
    }

    // Inject custom prompt elements to make it highly relevant
    const customizedProposal: any = {
      projectName: `${matched.name}_${Math.floor(Math.random() * 899 + 100)}`,
      conceptTitle: `Custom Realization: ${description.split(" ").slice(0, 3).join(" ").toUpperCase()} // ${matched.concept}`,
      aestheticMood: matched.mood,
      architecturalCore: matched.core,
      timelineEstimate: matched.timeline,
      techStack: matched.tech,
      recommendedModules: matched.modules,
      visualPalette: matched.colors,
      executiveSummary: `Designed to fulfill your prompt: "${cleanDescription.slice(0, 70)}...". ${matched.summary}`
    };

    res.json(customizedProposal);
  } catch (err: any) {
    console.error("Endpoint Error:", err);
    res.status(500).json({ error: "Creative AETHER Engine encountered an internal error. Please try again." });
  }
});

export default router;
