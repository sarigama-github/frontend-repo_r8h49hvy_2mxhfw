import { useEffect } from "react";

export default function AnalyticsSnippet() {
  useEffect(() => {
    // Basic GA4 snippet placeholder (no real tracking in this preview)
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  }, []);
  return null;
}
