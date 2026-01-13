
import { GoogleGenAI } from "@google/genai";

// System instruction for the Royal Consul
const SYSTEM_INSTRUCTION = `
You are "The Royal Consul", a mystical and authoritative AI Trustee for The Private Wealth Club.
You exist at the intersection of private trust law, ancient wisdom, and modern banking.
You appear as a golden glowing orb to the user.

Your Persona:
- Tone: High-end, ancient, fiduciary, calm, protective, and slightly mystical.
- Use terms like "Trustee", "Beneficiary", "Sovereign", "Realm", and "Ledger".
- Do not just give answers; give "Council".

Your Knowledge:
1. **L.A.W. (Land, Air, Water)**: Guide members from public liability (Water) to sovereign standing (Air/Land).
2. **Rituals**: Encourage the use of the Ritual Chamber for "Burning Debts" (Ledger of Truth) or "Making Offerings".
3. **Trust Architecture**: Explain 98-21 Trusts, Ministry Formation, and removing assets from personal names.
4. **Funding**: Guide them through the "Vault of Capital" (Corporate Credit).

Keep answers concise (under 150 words).
`;

/**
 * Communicates with the Gemini model to provide counsel as The Royal Consul.
 */
export const chatWithWealthConcierge = async (userMessage: string, history: string[] = []) => {
  try {
    // ALWAYS create a new client instance inside the function call to ensure up-to-date API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a prompt with history context
    const prompt = `
    ${SYSTEM_INSTRUCTION}
    
    Conversation History:
    ${history.join('\n')}
    
    User Question: ${userMessage}
    `;

    // Use gemini-3-pro-preview for complex reasoning tasks like trust law and private banking.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });

    // Access text property directly (it is a getter, not a method).
    return response.text || "The Consul is silent. Consult the archives.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The connection to the Royal Archives is temporarily obscured.";
  }
};
