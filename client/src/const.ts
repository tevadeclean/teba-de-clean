export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || "https://oauth.manus.ai";
  const appId = import.meta.env.VITE_APP_ID || "";
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  try {
    // Ensure oauthPortalUrl is a valid URL string before passing to URL constructor
    const baseUrl = oauthPortalUrl.startsWith('http') ? oauthPortalUrl : `https://${oauthPortalUrl}`;
    const url = new URL(`${baseUrl}/app-auth`);
    url.searchParams.set("appId", appId);
    url.searchParams.set("redirectUri", redirectUri);
    url.searchParams.set("state", state);
    url.searchParams.set("type", "signIn");

    return url.toString();
  } catch (error) {
    console.error("Failed to construct login URL:", error);
    // Fallback to a simple string concatenation if URL constructor fails
    return `${oauthPortalUrl}/app-auth?appId=${appId}&redirectUri=${encodeURIComponent(redirectUri)}&state=${state}&type=signIn`;
  }
};

// 口コミ用スプレッドシートのCSV URL
export const TESTIMONIALS_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_O_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L/pub?output=csv";

// ブログ用スプレッドシートのCSV URL（後ほどユーザーに作成してもらう）
export const BLOG_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L_L/pub?output=csv";
