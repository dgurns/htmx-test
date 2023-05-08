import index from './routes/index.html';
import clicked from './routes/clicked';
import updateTitle from './routes/update-title';

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
}

type Route = [
	pathname: string,
	handler:
		| string
		| ((
				request: Request,
				env: Env,
				ctx: ExecutionContext
		  ) => Promise<string | null> | string | null)
];

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const routes: Route[] = [
			['/clicked', clicked],
			['/update-title', updateTitle],
			['/', index],
		];
		for (const route of routes) {
			if (new URLPattern({ pathname: route[0] }).test(request.url)) {
				const res =
					typeof route[1] === 'string'
						? route[1]
						: await route[1](request, env, ctx);
				return new Response(res, {
					headers: { 'content-type': 'text/html' },
				});
			}
		}
		return new Response('Not found', { status: 404 });
	},
};
