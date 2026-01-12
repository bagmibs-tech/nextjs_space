
import contentStructure from '@/public/content-structure.json';
import arabicTranslations from '@/public/arabic-translations.json';

export type Language = 'en' | 'de' | 'ar';

export function getContent(language: Language) {
  if (language === 'ar') {
    return arabicTranslations;
  }
  return contentStructure;
}

export function getTranslation(path: string[], language: Language, contentData?: any): string {
  const data = contentData || getContent(language);
  
  let current: any = data;
  for (const key of path) {
    if (current && typeof current === 'object') {
      current = current[key];
    } else {
      return '';
    }
  }

  // If we have a language-specific object, get the right language
  if (current && typeof current === 'object' && language in current) {
    return current[language] || '';
  }

  return current || '';
}

export function getNavigationItems(language: Language) {
  const content = getContent(language);
  return content?.navigation?.items || [];
}

export function getPageContent(pageId: string, language: Language) {
  const content = getContent(language);
  const page = content?.pages?.find?.((p: any) => p?.page_id === pageId);
  return page || null;
}

export function getSiteMetadata(language: Language) {
  const content = getContent(language);
  return content?.site_metadata || {};
}
