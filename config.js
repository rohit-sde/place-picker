const backendUrl = "http://localhost:5065"?.replace(/\/$/, "");

const backendBaseUrl = `${
  import.meta.env.VITE_NODE_ENV === "production" ? "" : backendUrl
}`;

export const CONFIG = {
  backendBaseUrl,
  apiBaseUrl: `${backendBaseUrl}/api`,
};
