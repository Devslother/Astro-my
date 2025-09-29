import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Join us for an insightful workshop showcasing the powerful capabilities of Tetrate Istio Subscription Plus (TIS+), designed to revolutionize service mesh management for platform engineering teams.</p>";

				const frontmatter = {"title":"A Deep Dive into Tetrate Istio Subscription Plus (TIS+)","newsname":"Free Webinar – Feb 19, 4pm (EST)","image":"/images/post2.png","buttonLink":"https://docusaurus-site.com/blog/ml-optimization"};
				const file = "/Users/svetaco/Documents/Astro-my/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \n                                                                \n                                            \n                          \n                                                              \n   \n\nJoin us for an insightful workshop showcasing the powerful capabilities of Tetrate Istio Subscription Plus (TIS+), designed to revolutionize service mesh management for platform engineering teams.\n";
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

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_1 as _ };
