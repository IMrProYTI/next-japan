'use client'

import supabase from "@/utils/supabase";
import { CSSProperties } from "react";

class Gallery {
	static getImageUrls(maxIndex: number, type: string): string[] {
		const imgArr: string[] = [];

		for (let i = 0; i < maxIndex; i++) {
			const imgUrl = supabase.storage.from('japanclub').getPublicUrl(`/${type}/${i}.jpg`).data.publicUrl;
			imgArr.push(imgUrl);
		};

		return imgArr;
	}

	static getStyles(styles: string[]): CSSProperties[] {
		const stylesArr: CSSProperties[] = [];

		for (let style of styles) {
			if (style) {
				let [key, value] = style.split(':');
				
				key = key.trim();
				value = value.trim().replaceAll(';', '');
				
				switch (key) {
					case 'top':
						stylesArr.push({ top: value });
						break;
					case 'bottom':
						stylesArr.push({ bottom: value });
						break;
					case 'left':
						stylesArr.push({ left: value });
						break;
					case 'right':
						stylesArr.push({ right: value });
						break;
					case 'inset':
						stylesArr.push({ inset: value });
						break;

					default:
						break;
				}
			} else {
				stylesArr.push({});
			};
		}

		return stylesArr;
	}
}

export default Gallery;