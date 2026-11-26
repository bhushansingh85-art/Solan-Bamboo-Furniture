# Solan Bamboo Furniture — Website starter

A responsive Next.js + React + TypeScript website starter based on the uploaded **Solan Bamboo Furniture.txt** decisions: Firebase Firestore, Firebase Authentication, Firebase Storage, Tailwind CSS with `app/globals.css`, GitHub source control, and Vercel as the recommended deployment target. The existing website is intentionally not modified.

## Included
- Responsive brand homepage, collection cards, product detail routes and contact page.
- `app/globals.css` global styling and reusable header/footer.
- Firebase client initialization (`lib/firebase.ts`) using environment variables.
- Admin sign-in starter at `/admin` (email/password) with English/Hindi label toggle.
- Firestore and Storage security-rule starter files.
- Basic SEO metadata, Open Graph metadata, `sitemap.xml` and `robots.txt` generation.
- Optional Google Analytics 4 integration through `NEXT_PUBLIC_GA_ID`.
- `.env.example` and deployment notes.

## Run locally
1. Install Node.js 20 or newer.
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in your Firebase web app settings.
4. Run `npm run dev` and open `http://localhost:3000`.

The public site can be previewed without Firebase, but Firebase-backed sign-in will not work until the environment variables are configured.

## Firebase setup before launch
1. Create a Firebase project and register a Web app.
2. Enable Email/Password under Authentication.
3. Create a Firestore database and enable Storage.
4. Add the web app values to `.env.local` (and to Vercel Environment Variables after deployment).
5. Create the initial 2–3 administrator users in Firebase Authentication.
6. Assign the `admin: true` custom claim to approved administrator accounts using a trusted Admin SDK script or Cloud Function. Never let a browser client assign its own admin claim.
7. Publish `firestore.rules` and `storage.rules` after reviewing them for the final data model.

## Important implementation status
This is a **development starter**, not a connected production store. The source file confirms the chosen stack and project preferences, but does not provide verified product catalogue data, official contact details, brand assets, domain, existing-hosting credentials or Firebase project credentials. Accordingly:
- The four catalogue items and their photos are visual demo placeholders; replace them with real product names, descriptions, dimensions, prices and approved photos.
- The contact form opens the visitor's email app and uses a clearly marked placeholder email address. Connect a server endpoint / Firebase Cloud Function before launch to collect enquiries reliably.
- The admin route demonstrates Firebase email/password sign-in; full product CRUD, order management, customer accounts, cart/checkout, role management and operational dashboard screens still need implementation.
- Admin language toggle is a starter UI toggle, not a complete translated admin product.
- Search Console verification, final canonical domain, consent/privacy disclosures and production analytics validation require the real domain and account properties.
- Backups must be configured in the Firebase/GCP project (for example scheduled Firestore exports to a secured Cloud Storage bucket); no cloud backup is activated by this code alone.

## Deploy safely
1. Push this project to a **new GitHub repository**. Do not overwrite or disconnect the current website repository/hosting.
2. Import the new repository into Vercel and add the environment variables.
3. Preview and test mobile/desktop pages, admin authentication, rules, forms and SEO.
4. Only after approval, plan the domain switch. Keep the current website available until the new one has passed acceptance testing.

## Suggested Firestore collections
- `products/{productId}` — title, slug, category, description, price fields, image URLs, `isPublished`, timestamps.
- `customers/{uid}` — minimal customer profile data; do not store passwords.
- `enquiries/{enquiryId}` — contact requests, created through a trusted server endpoint.
- `orders/{orderId}` — add only after payment, tax, shipping, cancellation and refund workflows are specified.

## Commands
- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — run production build locally

See `docs/LAUNCH-CHECKLIST.md` for the handover checklist.
