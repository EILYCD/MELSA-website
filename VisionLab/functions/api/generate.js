export async function onRequestPost(context) {
  // 1. Get the prompt from the frontend
  const { prompt } = await context.request.json();
  
  // 2. Get your Secret Key from Cloudflare Settings
  const apiKey = context.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server Configuration Error: No API Key" }), { status: 500 });
  }

  // 3. Call Google Gemini API directly (No SDK needed here)
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const googleResponse = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await googleResponse.json();

  // 4. Send the result back to your website
  // We extract just the text to make it easy for the frontend
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error: No response from AI";
  
  return new Response(JSON.stringify({ output: text }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
