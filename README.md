# Nextra Docs Template

This is a template for creating documentation with [Nextra](https://nextra.site).

[**Live Demo →**](https://nextra-docs-template.vercel.app)

[![](.github/screenshot.png)](https://nextra-docs-template.vercel.app)

## Quick Start

Click the button to clone this repository and deploy it on Vercel:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&showOptionalTeamCreation=false)

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

## License

This project is licensed under the MIT License.

## Google Workspace Marketplace Publishing Guide

### Part 1: Prepare Documents and Content

Before you start the submission process in the Google Cloud Platform console, gather all necessary assets and information.

**Branding Assets:**

- **Application Name:** "ViveTube – YouTube Insights for Sheets" (from `appsscript.json`)
- **Application Logo (Icon):** https://www.vivescriptsolutions.com/assets/images/vive-tube/vive-tube-logo.png (from `appsscript.json`). Ensure this is high quality, typically 96x96 px or 128x128 px.
- **Promotional Tile:** A larger image representing your add-on.
  - Required: At least one 440x280 pixels (e.g., a banner or key feature graphic).
  - Recommended: Additional sizes if you want more control over appearance.
- **Screenshots:**
  - Required: At least 1 screenshot.
  - Recommended: 3-5 high-quality screenshots (1280x800 pixels or similar aspect ratio) showcasing your add-on's main features and UI within Google Sheets. Highlight key benefits.
- **Feature Video (Optional):** A short YouTube video (30-120 seconds) demonstrating your add-on.

**Descriptive Content:**

- **Short Description:** A concise summary (max 80 characters). Example: "Unlock YouTube insights directly in Google Sheets. Track analytics, automate reports."
- **Long Description:** A detailed description (max 4000 characters).
  - Explain what your add-on does, its key features, benefits for the user, and use cases.
  - Mention automation, data visualization, and how it helps with content strategy.
  - You can use simple HTML for formatting (bold, italics, lists).
- **Category:** Choose the most relevant category (e.g., "Productivity," "Business Tools," "Utilities," "Analytics").
- **Pricing Information:** Clearly state your pricing model (e.g., Free, Freemium with paid tiers, Subscription). Refer to your `Config.SUBSCRIPTION_TIERS` for details on what each tier offers.
- **Languages Supported:** List the languages your add-on UI supports.
- **Regions:** Specify if your add-on is available worldwide or limited to certain regions.

**Support and Legal Links (Verify these in your `Constant.js` `Config.APP_URLS`):**

- **Homepage URL:** https://www.vivescriptsolutions.com/shop/subscription/vive-tube
- **Support URL:** https://www.vivescriptsolutions.com/support/vive-tube (Your new dedicated support page)
- **Privacy Policy URL:** https://doc.vivescriptsolutions.com/vive-tube/privacy-policy (Your new dedicated privacy policy)
- **Terms of Service URL:** https://doc.vivescriptsolutions.com/vive-tube/terms-of-service (Your new dedicated terms of service)
- **Documentation URL (Optional but Recommended):** https://doc.vivescriptsolutions.com/vive-tube (or link to relevant sections within your support page).

**Developer Information:**

- **Developer Name:** ViveScript Solutions LLC
- **Developer Website:** https://www.vivescriptsolutions.com/
- **Developer Email:** info@vivescriptsolutions.com (for support and contact)

### Part 2: List of What You Need to Provide for Approval (Key Requirements)

Google's review process is thorough. Here are critical areas:

**Manifest File (`appsscript.json`):**

- **Correct Configuration:** Ensure the `addOns.common` and `addOns.sheets` objects are correctly set up.
- **OAuth Scopes:** List only the scopes absolutely necessary for your add-on to function. Be prepared to provide a detailed justification for each scope during the submission process.
- **`urlFetchWhitelist`:** Ensure all external domains your script calls (APIs, image hosts) are listed.
- **`webapp` Configuration:** Your `doGet` handles OAuth callbacks and Stripe checkout. Ensure `executeAs` is `USER_DEPLOYING` and `access` is appropriate (likely `ANYONE_ANONYMOUS` for OAuth callbacks, but ensure security for any sensitive operations).

**OAuth Consent Screen (Configured in Google Cloud Platform):**

- **Accurate Information:** Application name, logo, support email, and links must match your add-on and public-facing information.
- **Authorized Domains:** Include `script.google.com` and your website domain (`vivescriptsolutions.com`).
- **Scope Justification:** This is crucial. For each scope, you must explain:
  - What feature uses this scope?
  - How does the add-on use the data obtained via this scope?
  - Why is this level of access necessary for the feature to work?
  - Provide clear, concise, and user-centric explanations.

**Security and Data Handling:**

- **Sensitive Scopes:** Justify any sensitive or restricted scopes thoroughly.
- **Data Minimization:** Only request and use data essential for the add-on's functionality.
- **Secure Storage:** Client ID, Client Secret, and any backend API keys (like `VIVESCRIPT_BACKEND_API_KEY_FOR_CHECKOUT`) must be stored securely in Script Properties, not hardcoded. Your `OAuthManager.js` implies this is done correctly.
- **No User Credential Storage:** Never ask for or store user passwords.
- **Privacy Policy:** Your privacy policy must be comprehensive, accurate, and easily accessible.

**Functionality and User Experience:**

- **Works as Described:** All features mentioned in your listing must be functional.
- **Error Handling:** Implement robust error handling. Your `Utils.handleError` is a good start. Provide clear, user-friendly error messages.
- **UI/UX:** The add-on should have a clean, intuitive interface and provide a good user experience.
- **Performance:** Ensure the add-on is reasonably performant and doesn't excessively slow down Google Sheets.
- **No Broken Links/Features:** Test all links and functionalities thoroughly.

**Content and Branding:**

- **Professionalism:** All text and visuals should be professional and free of typos.
- **Accuracy:** Do not misrepresent your add-on's capabilities.
- **No Deceptive Practices:**

**Testing:**

- Test extensively with different Google accounts (personal, G Suite/Workspace).
- Test all features, including authorization, data refresh, report generation, settings changes, and error conditions.
- Test the subscription flow if applicable.

### Part 3: Step-by-Step Guide for Submission

**1. Ensure Apps Script Project is Linked to a Google Cloud Platform (GCP) Project:**

- In the Apps Script editor, go to "Project Settings" (⚙️ icon).
- Under "Google Cloud Platform (GCP) Project," if it says "This script is currently associated with a default GCP project created by Apps Script," click "Change project" and link it to a standard GCP project you own. If it's already linked to a standard project, you're good.

**2. Configure OAuth Consent Screen in GCP:**

- Go to your GCP project: https://console.cloud.google.com/
- Navigate to "APIs & Services" > "OAuth consent screen."
- **User Type:** Likely "External."
- **App information:**
  - App name: ViveTube – YouTube Insights for Sheets
  - User support email: Your support email (info@vivescriptsolutions.com)
  - App logo: Upload your logo.
- **App domain:**
  - Application home page: https://www.vivescriptsolutions.com/shop/subscription/vive-tube
  - Application privacy policy link: https://doc.vivescriptsolutions.com/vive-tube/privacy-policy
  - Application terms of service link: https://doc.vivescriptsolutions.com/vive-tube/terms-of-service
- **Authorized domains:** Add `vivescriptsolutions.com`.
- **Developer contact information:** Your contact email.
- **Scopes:** Click "Add or Remove Scopes." Manually add all scopes listed in your `appsscript.json`. For each scope, you will need to provide a clear, concise justification explaining why your add-on needs it. This is a very important step for the review.
- **Test Users (Optional but Recommended):** Add email addresses of test accounts if you want to test the OAuth flow before verification.
- **Submit for Verification:** If you're using sensitive or restricted scopes, Google will need to verify your app. This process can take time.

**3. Configure Google Workspace Marketplace SDK in GCP:**

- In your GCP project, navigate to "APIs & Services" > "Library." Search for "Google Workspace Marketplace SDK" and enable it if it's not already.
- Go back to "APIs & Services" > "Enabled APIs & services," find "Google Workspace Marketplace SDK," and click "Manage."
- Click on "App Configuration."
- **App Visibility:** Choose "Public."
- **App Integration:** Select "Google Sheets add-on."
- **Deployment ID:**
  - In your Apps Script editor, go to "Deploy" > "Manage deployments."
  - Use the Deployment ID of your intended production deployment (usually a versioned deployment, not "Head").
- **OAuth Scopes:** List all OAuth scopes used by your add-on. These must exactly match your `appsscript.json` and the OAuth consent screen configuration. Provide detailed justifications for each scope again here. This is critical.
- Fill in any other required fields.

**4. Configure Store Listing (in Marketplace SDK):**

- Click on "Store Listing."
- **Application Name:** ViveTube – YouTube Insights for Sheets
- **Short Description, Long Description:** Enter the content you prepared.
- **Category:** Select the most appropriate one.
- **Pricing:** Select your pricing model.
- **Languages, Regions:** Specify.
- **Graphics Assets:** Upload your Application Logo, Screenshots, and Promotional Tile.
- **Support Links:** Provide links to your Homepage, Support page, Privacy Policy, and Terms of Service.
- **Developer Information:** Enter your developer name, website, and email.

**5. Submit for Review:**

- Carefully review all entered information in both the "App Configuration" and "Store Listing" sections.
- Once you are confident, click the "Submit for review" or "Publish" button (the exact wording might vary).

**Review Process:**

- Google's team will review your submission. This can take several days to a few weeks.
- They will check for compliance with all policies, security, functionality, and OAuth scope usage.
- You may receive emails from the review team with questions or requests for changes. Respond promptly and thoroughly.
- You can check the status of your submission in the Marketplace SDK dashboard.

**Post-Approval:**

- Once approved, your add-on will be published on the Google Workspace Marketplace!
- Continue to monitor user feedback, provide support, and release updates as needed.

### Key Takeaways for a Smooth Review:

- **Justify OAuth Scopes Thoroughly:** This is often a major point of scrutiny. Be very clear and specific.
- **Privacy Policy and ToS:** Ensure these are comprehensive, accurate, and specific to your add-on.
- **Test, Test, Test:** A buggy add-on will likely be rejected.
- **Professional Presentation:** High-quality descriptions, screenshots, and logo make a good impression.
