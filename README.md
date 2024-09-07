# Wedding app

*README last updated: Sept 2024*

## App description
I built this applicaion to manage the RSVP and give guests information about our wedding.

## Repo Description
The repo is client only which uses serverless functions on Next.js to connect to a Vercel/Postgres db.

## Set-up 
### Development
To start the app in development mode on localhost, simple run:

```bash
pnpm dev
# or
vercel dev
```

### Production
The application is hosted on Vercel, and each push to master is pushed to production as CI/CD.

## Pages & Features
- **Home**
  - Landing page with embedded video.
- **RSVP**
  - Where guests search by name and enter menu choices and other info to be stored in postgres db.
- **Itinerary, Travel, Accomodation, FAQS**
  - Static pages with information about the event.
- **Gifts**
  - A static page which redirects to an external app to safely collect card payments
- **Guestlist**
  - Hidden from navigation menu.
  - A table of all the guest info submitted.
