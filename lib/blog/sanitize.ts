import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "p", "br", "strong", "em", "u", "s", "blockquote", "code", "pre",
  "h2", "h3", "h4", "ul", "ol", "li", "a", "img", "figure", "figcaption", "hr",
];
const ALLOWED_ATTR = ["href", "title", "target", "rel", "src", "alt", "width", "height"];

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|\/|#)/i,
  });
}
