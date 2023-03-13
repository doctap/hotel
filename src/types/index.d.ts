interface IPage {
	pageName: string;
	pageId: number;
}

type HEX = `#${string}`;
type ButtonType = `button` | `submit` | `reset`;

type IconType = `menu` | `list`;

export type { IPage, HEX, ButtonType, IconType,  };