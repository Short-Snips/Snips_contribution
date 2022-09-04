

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/index.html",
      "/article.html",
      "/Styles/index.css",
      "/Styles/article.css",
      "/saas_index.js",
      "/saas_article.js",
      "/index.js",
      "/article.js",
      "working_models/index.js",
      "working_models/create_index.js",
  
    ])
  );

});

const putInCache = async (request, response) => {
    const cache = await caches.open("v1");
    await cache.put(request, response);
  };
  

  const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  
    // Next try to get the resource from the network
    try {
      const responseFromNetwork = await fetch(request);
      // response may be used only once
      // we need to save clone to put one copy in cache
      // and serve second one
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch (error) {
      const fallbackResponse = await caches.match(fallbackUrl);
      if (fallbackResponse) {
        return fallbackResponse;
      }
      // when even the fallback response is not available,
      // there is nothing we can do, but we must always
      // return a Response object
      return new Response("Network error happened", {
        status: 408,
        headers: { "Content-Type": "text/plain" },
      });
    }
  };
  
  self.addEventListener("fetch", (event) => {
    //   console.log(event.request.url.includes("Snippets.js"),event);
    // if()
    // {
    //     const responseFromNetwork = await fetch(request);
    //     return responseFromNetwork
    // }
    // else
    // {
    //     const responseFromCache = await caches.match(request);
    //     if (responseFromCache) {
    //         return responseFromCache;
    //       }
    // }

    event.respondWith(
      cacheFirst({
        request: event.request,
        fallbackUrl: "/gallery/myLittleVader.jpg",
      })
    );
  });


  const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  };
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(enableNavigationPreload());
  });