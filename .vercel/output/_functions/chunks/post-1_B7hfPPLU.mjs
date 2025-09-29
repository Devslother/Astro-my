import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>In the rapidly evolving cloud-native landscape, businesses are continuously adopting microservices architectures to build scalable, resilient, and flexible applications.</p>";

				const frontmatter = {"title":"Onboard EC2/ECS Workloads Onto Your Service Mesh with Tetrate Istio Subscription","newsname":"Article","image":"/images/post1.png","buttonLink":"https://tetrate.io/blog/ml-optimization"};
				const file = "/Users/svetaco/Documents/Astro-my/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "   \n                                                                                         \n                   \n                          \n                                                     \n   \n\nIn the rapidly evolving cloud-native landscape, businesses are continuously adopting microservices architectures to build scalable, resilient, and flexible applications.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };
