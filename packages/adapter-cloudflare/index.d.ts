import { Adapter } from '@sveltejs/kit';
import './ambient.js';

export default function plugin(options?: AdapterOptions): Adapter;

export interface AdapterOptions {
	/**
	 * Customize the automatically-generated `_routes.json` file
	 * https://developers.cloudflare.com/pages/platform/functions/routing/#create-a-_routesjson-file
	 */
	routes?: {
		/**
		 * Routes that will be invoked by functions. Accepts wildcards.
		 * @default ["/*"]
		 */
		include?: string[];

		/**
		 * Routes that will not be invoked by functions. Accepts wildcards.
		 * `exclude` takes priority over `include`.
		 *
		 * To have the adapter automatically exclude certain things, you can use these placeholders:
		 *
		 * - `<build>` to exclude build artifacts (files generated by Vite)
		 * - `<files>` for the contents of your `static` directory
		 * - `<prerendered>` for prerendered routes
		 * - `<all>` to exclude all of the above
		 *
		 * @default ["<all>"]
		 */
		exclude?: string[];
	};
}

export interface RoutesJSONSpec {
	version: 1;
	description: string;
	include: string[];
	exclude: string[];
}
