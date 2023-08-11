// const { remote } = require('webdriverio');

// (async () => {
//     const browser = await remote({
//         capabilities: {
//             browserName: 'chrome'
//         }
//     });

//     // Enable DevTools Network interception
//     await browser.cdp('Network', 'enable');

//     // Set up request interception
//     await browser.cdp('Network', 'setRequestInterception', { patterns: [{ urlPattern: '*' }] });

//     browser.on('Network.requestIntercepted', async ({ interceptionId, request }) => {
//         const { url } = request;

//         // Example: Capture response body of a specific network call
//         if (url.includes('specific-url-you-want-to-capture')) {
//             const { body, base64Encoded } = await browser.cdp('Network', 'getResponseBodyForInterception', { interceptionId });
//             const responseBody = base64Encoded ? Buffer.from(body, 'base64').toString() : body;
//             console.log(`Response body for ${url}:`, responseBody);
//         }

//         // Continue the intercepted request
//         await browser.cdp('Network', 'continueInterceptedRequest', { interceptionId });
//     });

//     await browser.url('https://www.example.com');
//     // Perform interactions or operations that trigger network requests

//     // Close the browser
//     await browser.deleteSession();
// })();