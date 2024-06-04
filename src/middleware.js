import { NextResponse } from "next/server";

export function middleware(request) {
  // if (request.nextUrl.pathname !== "/" && request.nextUrl.pathname !== "/contact" && request.nextUrl.pathname !== "/recipes") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
//   matcher: "/api",
// };











// {
//   cookies: RequestCookies { "ext_name": { "name": "ext_name", "value": "ojplmecpdpgccookcobabopnaifgidhf" }, "next-auth.session-token": { "name": "next-auth.session-token", "value": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..9_fcib4CHYlzwI9j.emnmG2sQXHZArxA2wXMp_hLoRSW1UlnBIC2hycj-Hlae3oC9epIyTHN2zNKV7JZGYm1ezeNQVARm88bKXix-o_apUi030l9Yk7xyenaqEPJcxAfGpPcqSd9bbGjxSxhe8Qeq9BYJZ-MgFWkR7aE_TW7_EKEcaWDVnXWwKgzl-xkTvCqTyecfX4UEa2bQGCyFfaK1VrHFZJPSsd2n9-KVlwMMC_zI9D7XA-HR9wk02EI-oQFhbOdQAg_XQ8SizmZ8fcy_QLejCJNJamvxzDnypz9jO6tIJzJkJst-wzp5mFzzX0YSR9491BDmjE4-OrljFBI59_VKuPA.Af9wetdRhcie0xnDtXTMzw" } },
//   geo: {},
//   ip: undefined,
//   nextUrl: {
//     href: "http://localhost:3000/ravi",
//     origin: 'http://localhost:3000',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'localhost:3000',
//     hostname: 'localhost',
//     port: '3000',
//     pathname: '/ravi',
//     search: '',
//     searchParams: URLSearchParams { },
//   hash: ''
//   },
// url: 'http://localhost:3000/ravi',
//   bodyUsed: false,
//     cache: 'default',
//       credentials: 'same-origin',
//         destination: '',
//           headers: {
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     accept - encoding: 'gzip, deflate, br, zstd',
//       accept - language: 'en-US,en;q=0.9,te;q=0.8',
//         connection: 'keep-alive',
//           cookie: 'ext_name=ojplmecpdpgccookcobabopnaifgidhf; next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..9_fcib4CHYlzwI9j.emnmG2sQXHZArxA2wXMp_hLoRSW1UlnBIC2hycj-Hlae3oC9epIyTHN2zNKV7JZGYm1ezeNQVARm88bKXix-o_apUi030l9Yk7xyenaqEPJcxAfGpPcqSd9bbGjxSxhe8Qeq9BYJZ-MgFWkR7aE_TW7_EKEcaWDVnXWwKgzl-xkTvCqTyecfX4UEa2bQGCyFfaK1VrHFZJPSsd2n9-KVlwMMC_zI9D7XA-HR9wk02EI-oQFhbOdQAg_XQ8SizmZ8fcy_QLejCJNJamvxzDnypz9jO6tIJzJkJst-wzp5mFzzX0YSR9491BDmjE4-OrljFBI59_VKuPA.Af9wetdRhcie0xnDtXTMzw',
//             host: 'localhost:3000',
//               sec - ch - ua: '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
//                 sec - ch - ua - mobile: '?0',
//                   sec - ch - ua - platform: '"macOS"',
//                     sec - fetch - dest: 'document',
//                       sec - fetch - mode: 'navigate',
//                         sec - fetch - site: 'none',
//                           sec - fetch - user: '?1',
//                             upgrade - insecure - requests: '1',
//                               user - agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
//                                 x - forwarded -for: '::1',
//                                   x - forwarded - host: 'localhost:3000',
//                                     x - forwarded - port: '3000',
//                                       x - forwarded - proto: 'http'
// },
// integrity: '',
//   keepalive: false,
//     method: 'GET',
//       mode: 'cors',
//         redirect: 'follow',
//           referrer: 'about:client',
//             referrerPolicy: '',
//               signal: AbortSignal {
//   [Symbol(kEvents)]: SafeMap(0) { },
//   [Symbol(events.maxEventTargetListeners)]: 10,
//     [Symbol(events.maxEventTargetListenersWarned)]: false,
//       [Symbol(kHandlers)]: SafeMap(0) { },
//   [Symbol(kAborted)]: false,
//     [Symbol(kReason)]: undefined,
//       [Symbol(kOnabort)]: undefined,
//         [Symbol(realm)]: {
//     settingsObject: {
//       baseUrl: undefined,
//         origin: [Getter],
//           policyContainer: { referrerPolicy: 'strict-origin-when-cross-origin' }
//     }
//   }
// }
// }