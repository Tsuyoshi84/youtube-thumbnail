export interface ThumbnailInfo {
  url: string;
  name: string;
  width: number;
  height: number;
  ratio: string;
}

export function getThumbnailInfos(id: string): ThumbnailInfo[] {
  return [
    {
      url: `https://img.youtube.com/vi/${id}/default.jpg`,
      name: 'Normal',
      width: 120,
      height: 90,
      ratio: `4:3`,
    },
    {
      url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
      name: 'Medium Quality',
      width: 320,
      height: 180,
      ratio: '16:9',
    },
    {
      url: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      name: 'High Quality',
      width: 480,
      height: 360,
      ratio: '4:3',
    },
    {
      url: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
      name: 'Standard Definition',
      width: 640,
      height: 480,
      ratio: '4:3',
    },
    {
      url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      name: 'Max',
      width: 1280,
      height: 720,
      ratio: '16:9',
    },
  ];
}

export function extractId(url: string | null): string | null {
  if (url === null || url.length === 0) {
    return null;
  }

  const re = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
  const matches = url.trim().match(re);

  if (matches !== null && matches.length > 0) {
    return matches[1];
  } else {
    return null;
  }
}
