import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>New free course from Tetrate! Gain a foundational understanding of Envoy Gateway and its integration with Kubernetes to manage traffic to your services.New free course from Tetrate! Gain a foundational understanding of Envoy Gateway and its integration with Kubernetes to manage traffic to your services.</p>";

				const frontmatter = {"title":"Envoy Gateway Fundamentals","newsname":"Free Training","image":"/images/post3.png","buttonLink":"https://docusaurus-site.com/blog/ml-optimization"};
				const file = "/Users/svetaco/Documents/Astro-my/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \n                                   \n                         \n                          \n                                                              \n   \n\nNew free course from Tetrate! Gain a foundational understanding of Envoy Gateway and its integration with Kubernetes to manage traffic to your services.New free course from Tetrate! Gain a foundational understanding of Envoy Gateway and its integration with Kubernetes to manage traffic to your services.\n";
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
