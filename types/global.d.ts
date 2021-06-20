/ Global definitions for development /;

// for style loader
declare module "*.css" {
  const styles: any;
  export = styles;
}

declare module "*.scss" {
  const styles: any;
  export = styles;
}

declare module "*.ttf" {
  const styles: any;
  export = styles;
}
// For images
declare module "*.png" {
  const img: any;
  export = img;
}
declare module "*.jpg" {
  const img: any;
  export = img;
}
declare module "*.svg" {
  const img: any;
  export = img;
}

declare module "*.json" {
  const value: any;
  export = value;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
