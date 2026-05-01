# Analytics setup

This portfolio supports Google Analytics 4 and Vercel Analytics.

## Google Analytics 4

Set this environment variable in production:

```txt
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-8PV05WS2BN
```

The older `NEXT_PUBLIC_GA_ID` name is also supported for compatibility.

This portfolio also includes `G-8PV05WS2BN` as a public fallback in code, so tracking still works after deploy even if the environment variable is not set.

To find the value in Google Analytics:

1. Open Google Analytics.
2. Go to Admin.
3. Open Data streams.
4. Select the Web stream for this portfolio.
5. Copy the Measurement ID that starts with `G-`.

After setting the environment variable, redeploy the site.

## Vercel Analytics

The app already renders `@vercel/analytics`, so Vercel Analytics works when it is enabled in the Vercel project dashboard.
