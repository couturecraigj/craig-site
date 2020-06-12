const fs = require("fs");
const mdx = require("@mdx-js/mdx");
const frontmatter = require("remark-frontmatter");
const path = require("path");

const blogPath = path.join(__dirname, "pages", "blog");

const blogArticles = fs.readdirSync(blogPath);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[frontmatter, ["yaml", "toml"]]],
  },
});

module.exports = () => {
  return withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  });
};
