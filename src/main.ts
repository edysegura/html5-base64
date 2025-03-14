const inputText = document.querySelector<HTMLInputElement>("#inputText");
const inputBase64 = document.querySelector<HTMLTextAreaElement>("#inputBase64");
const copyBtn = document.querySelector<HTMLButtonElement>("#copy");
const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

if (!inputText || !inputBase64 || !copyBtn || !clearBtn) {
  throw new Error("Required elements not found");
}

// Convert input to base64 on input change
inputText.addEventListener("input", (event: Event) => {
  const text = (event.target as HTMLInputElement).value;
  const base64 = window.btoa(text);
  inputBase64.value = base64;
});

// Copy base64 output to clipboard
copyBtn.addEventListener("click", async () => {
  if (!inputBase64.value) return;
  try {
    await navigator.clipboard.writeText(inputBase64.value);
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
  inputText.value = "";
  inputBase64.value = "";
});
