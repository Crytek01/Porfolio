import sanitizeHtml from 'sanitize-html';

export const separateText = (textArray?: string[], separator = ','): string =>
  !textArray ? '' : textArray.join(` ${separator} `);

const sanitizeTextConfigs = {
  allowedTags: ['b', 'i', 'em', 'strong', 'br'],
};
export const sanitizeHTMLText = (text: string) =>
  sanitizeHtml(text, sanitizeTextConfigs);
