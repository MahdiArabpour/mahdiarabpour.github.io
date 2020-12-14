'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ce16980e9a36222e31d8e344c09324e7",
"assets/assets/fonts/IRANSansMobileFaNum-Black.ttf": "b5e9092bc82a7b48d4a19fa6eb82bd6d",
"assets/assets/fonts/IRANSansMobileFaNum-Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/assets/fonts/IRANSansMobileFaNum-Light.ttf": "3d18be052a4de0da6d0f2aaef74bbae5",
"assets/assets/fonts/IRANSansMobileFaNum-Medium.ttf": "c37aafe885d7245042a5731e96a2acd2",
"assets/assets/fonts/IRANSansMobileFaNum-UltraLight.ttf": "35b822df0e8d7af2f66c3f3c9c4940f0",
"assets/assets/fonts/IRANSansMobileFaNum.ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/assets/images/friend_1.jpg": "d3e4b70950197f175735ced686f0ea00",
"assets/assets/images/friend_2.jpg": "36ed679e4b0e8bd66e19f521e7d120de",
"assets/assets/images/friend_3.jpg": "1746b7b3ef9762c1bdb35858651f9725",
"assets/assets/images/introduction1.png": "8b8a6cd68f92f5be90387dba9d86685f",
"assets/assets/images/introduction2.png": "baf9efb4a57b4c6d064b8a73d3addc76",
"assets/assets/images/introduction3.png": "a149d05b6a07b6a2644ad7387055fd02",
"assets/assets/images/profile_placeholder.png": "4f7e9d867df6ce4e0e96138d6433bfad",
"assets/assets/images/tree.png": "765362063b29336f469b1f49d97737ab",
"assets/assets/lang/fa.json": "31b6883e9d5f6c2e84c20d7d1302d231",
"assets/assets/lang/fa_faq.json": "e2693d1ec0acf61b25d52626e957299e",
"assets/assets/operators/area_codes.json": "464d99a50e0c17eb7139504355dfd728",
"assets/assets/svg/about_us.svg": "de7e66265dcc8be9ce6eaf87cf7db542",
"assets/assets/svg/account.svg": "777e0c5f3ecb89da301eb4c70a493ab7",
"assets/assets/svg/account_balance.svg": "1169b096c2b776ac814a0ef15cf207d2",
"assets/assets/svg/account_balance_disabled.svg": "5a20518f9638d1e57827574db66e89a2",
"assets/assets/svg/bill_payment_disabled.svg": "fc4245a72c316d38ebf4e1edbf4b510e",
"assets/assets/svg/charge_sim.svg": "846f4ec091a132e6b2836cddda775fab",
"assets/assets/svg/charge_sim_disabled.svg": "187f139fae76cb2e26ded56debd35e66",
"assets/assets/svg/clear.svg": "91bb67afff7bbc11522373d090bc9147",
"assets/assets/svg/common_questions.svg": "70b670ddbb29073512127baef5e25af3",
"assets/assets/svg/community.svg": "678bc7003c1c050fecfa340eca61cae6",
"assets/assets/svg/contacts.svg": "59695239d859572d02eebe0d974d2634",
"assets/assets/svg/contact_support.svg": "820d7be6b04aa44225ec1fa421e004e6",
"assets/assets/svg/copy.svg": "1b3b1d466f09b31ec64a9bc396bcfe89",
"assets/assets/svg/donak.svg": "e92921c13d27e2612e1a0faac05c99ea",
"assets/assets/svg/donak_bold.svg": "9cd615da1020cfa7dcbd6231b254aac3",
"assets/assets/svg/donak_logo_bold.svg": "ed767403eb97306db36258cf8b97ac3b",
"assets/assets/svg/donak_logo_light.svg": "6f54802aefd8d3eeba8969ff554b53bf",
"assets/assets/svg/donak_logo_medium.svg": "b39456bb2d9442681767c496d5e05b68",
"assets/assets/svg/download.svg": "a928d8172f9d6e0f43727c583efcf1af",
"assets/assets/svg/duration.svg": "4a141389f3dc7fca8e0f4f6fcfa02d61",
"assets/assets/svg/home.svg": "d48c9558c09f0bd42ea127641b186d0f",
"assets/assets/svg/internet_package.svg": "1ddfbaa8774d404da488aead702da2a2",
"assets/assets/svg/internet_package_disabled.svg": "093a3187ae40da5a32649763ad9b30c1",
"assets/assets/svg/irancell.svg": "8589148ba6bd1064f80f1f557220b05f",
"assets/assets/svg/irancell_selected.svg": "75e58f1ae5a0991073f42902735dc766",
"assets/assets/svg/logout.svg": "924406e753b48e9c453c57764f4674bf",
"assets/assets/svg/mci.svg": "fbfbe8c77a27075bc32e27352d287ee0",
"assets/assets/svg/mci_selected.svg": "8bf1e9b4107559c691d7d4ecfa8c1c50",
"assets/assets/svg/my_bills.svg": "0e2d64ec6a901668cc9b738b76937184",
"assets/assets/svg/my_tickets.svg": "faee2a7fa0f1a8f4482e8e196d6a0fab",
"assets/assets/svg/no_transactions.svg": "aa823272a9bc85241f7f5eb3ed76459d",
"assets/assets/svg/pay_bill.svg": "82b8725debe710790d1646c6ba539b9b",
"assets/assets/svg/phone.svg": "0157a932d5149404c990e87e07ed50d9",
"assets/assets/svg/phone_bold.svg": "9b0deb300a962aac569d1e3461728a32",
"assets/assets/svg/prefix_money.svg": "6a612e11e9d0d4afec5a597524e9a495",
"assets/assets/svg/profile_placeholder.svg": "7b303606f5013d6bcc5f6f6825b1ea8a",
"assets/assets/svg/reset.svg": "9bfc95cb1c307ab7f40e91e864f3406f",
"assets/assets/svg/rightel.svg": "44b2eeda7e90efa418732debde3093d6",
"assets/assets/svg/rightel_selected.svg": "bd21fb550dd2b3b617657a4feea88abc",
"assets/assets/svg/send.svg": "668830f9c70e249b19d6bd24e16a09b5",
"assets/assets/svg/settings.svg": "aa5bd1f784e8a13f13b5e2dd30f0d6d8",
"assets/assets/svg/success.svg": "110d77cf43ff8a45414fd405d154fb82",
"assets/assets/svg/terms_and_conditions.svg": "040e35328956b661d7583ce133eb144c",
"assets/assets/svg/time.svg": "fc35632355e7045069a49e192fd932ca",
"assets/assets/svg/transactions.svg": "2107b48e081070aa40b8a6e71b5a4b7d",
"assets/assets/svg/tree.svg": "324f173d1a7af5ebf0b61621c4602cd9",
"assets/assets/svg/unsuccessful.svg": "976c7310424cf158352905be3982a11b",
"assets/assets/svg/user.svg": "1366cf7b89dffc5cfbc4358d8cbb0c57",
"assets/FontManifest.json": "b6a0a1e7463767e71005907662b9d087",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5cf86c21fdf154ed0841913a4e0801f3",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"favicon.png": "b3875ab21a1eadf94c3d2c61353c2bbf",
"icons/Icon-192.png": "7cfffecdca7592392af5c221001e571f",
"icons/Icon-512.png": "b29765bf54ef0f98e818e77c01367fa6",
"img/splash_icon.png": "14d750c3e31f0800e0fb49aa19c7a87d",
"img/splash_text.png": "dad9ad74cdb9a1f76cfd5aecb5776820",
"index.html": "5b2986f58e22f7381b0c0a65f658a8d9",
"/": "5b2986f58e22f7381b0c0a65f658a8d9",
"main.dart.js": "b0e2a36673877c2be4c437dac938a98a",
"manifest.json": "d6f5cdc08dd39892f66877d7bf1d3f65",
"styles.css": "2bba72f9198d8149b2ad4535ee334aa7",
"version.json": "32cd4967cc3b98e1522d5c5c73d90270"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
