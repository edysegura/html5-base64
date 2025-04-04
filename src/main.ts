const inputText = document.querySelector<HTMLInputElement>("#inputText");
const inputBase64 = document.querySelector<HTMLTextAreaElement>("#inputBase64");
const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

if (!inputText || !inputBase64 || !clearBtn) {
  throw new Error("Required elements not found");
}

// Convert input text to base64
inputText.addEventListener("input", (event: Event) => {
  const text = (event.target as HTMLInputElement).value;
  const base64 = window.btoa(text);
  inputBase64.value = base64;
});

// Decode base64 input to text
inputBase64.addEventListener("input", (event: Event) => {
  const base64 = (event.target as HTMLTextAreaElement).value;
  try {
    const text = window.atob(base64);
    inputText.value = text;
  } catch (error: unknown) {
    const message = "Failed to decode base64";
    console.error(message, error);
    inputText.value = message;
  }
});

// Clear both input and output
clearBtn.addEventListener("click", () => {
  inputText.value = "";
  inputBase64.value = "";
});
