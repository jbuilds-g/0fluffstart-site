document.addEventListener("DOMContentLoaded", () => {
  // Auto-fetch latest release version tag from GitHub
  const versionBadge = document.getElementById("versionBadge");
  if (versionBadge) {
    fetch("https://api.github.com/repos/jbuilds-g/0FluffStart/releases/latest")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.tag_name) {
          versionBadge.textContent = `${data.tag_name} Released • Open Source`;
        }
      })
      .catch(() => {});
  }
  // Dynamic CTA Router based on User-Agent detection
  const ctaBtn = document.getElementById("primaryCtaBtn");
  const ua = navigator.userAgent.toLowerCase();

  if (ctaBtn) {
    if (ua.includes("firefox")) {
      ctaBtn.textContent = "Add to Firefox - Free Add-on";
      ctaBtn.href = "https://addons.mozilla.org/addon/0flufstart/";
    } else if (
      ua.includes("chrome") ||
      ua.includes("edg") ||
      ua.includes("brave")
    ) {
      ctaBtn.textContent = "Add to Chrome - Free Extension";
      ctaBtn.href =
        "https://chromewebstore.google.com/detail/lgfflmhehhgomnkonfaljnfilangoebb";
    } else {
      ctaBtn.textContent = "Launch Web App - No Sign-Up";
      ctaBtn.href = "https://0fluffstart.pages.dev";
    }
  }
});
