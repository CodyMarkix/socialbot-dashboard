import type { RequestHandler } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ params, url }) => {    
    let reqheaders = new Headers();
    reqheaders.append("Authorization", `Bot ${API_KEY}`);
    reqheaders.append("Content-Type", "application/json");

    let req = new Request('https://discord.com/api/v10/channels/775815628619251743/messages', {
        method: "POST",
        body: `{"content":"${url.searchParams.get('msg')}", "tts":"false"}`,
        headers: reqheaders
    });

    fetch(req).then(e => {
        return e.text();
    }).then(e => {
        console.log(e);
    });

    return new Response("hello")

};