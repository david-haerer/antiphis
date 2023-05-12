const links = document.getElementsByTagName("a");
const base = new URL(window.location.origin);

const flagged = [];

function warning(url) {
  return `You are about to visit:\n${url}\n\nThis is a Unicode link which is often used for phishing!`;
}

for (const link of links) {
  const url = new URL(link.href, base);
  if (url.hostname.includes("xn--")) {
    link.innerHTML += ` ⚠️`;
    link.onclick = function () {
      return confirm(warning(url));
    };
  }
}
