const inputEl = document.querySelector<HTMLInputElement>("#input");
const outputEl = document.querySelector<HTMLTextAreaElement>("#output");
const copyBtn = document.querySelector<HTMLButtonElement>("#copy");
const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

if (!inputEl || !outputEl || !copyBtn || !clearBtn) {
  throw new Error("Required elements not found");
}

// Convert input to base64 on input change
inputEl.addEventListener("input", (e: Event) => {
  const text = (e.target as HTMLInputElement).value;
  const base64 = window.btoa(text);
  outputEl.value = base64;
});

// Copy base64 output to clipboard
copyBtn.addEventListener("click", async () => {
  if (!outputEl.value) return;
  try {
    await navigator.clipboard.writeText(outputEl.value);
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = "Copy Base64";
    }, 2000);
  } catch (err: unknown) {
    console.error("Failed to copy:", err);
  }
});

// Clear both input and output
clearBtn.addEventListener("click", () => {
  inputEl.value = "";
  outputEl.value = "";
});
