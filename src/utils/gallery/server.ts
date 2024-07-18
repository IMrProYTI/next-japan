'use server'

import supabase from "@/utils/supabase"
type Images = 'actual' | 'archive';

interface IData {
	actual: {
		maxIndex: number,
		styles: string[]
	},
	archive: {
		maxIndex: number,
		styles: string[]
	}
}

class Gallery {
	static async getData(): Promise<IData> {
		const publicUrl = supabase.storage.from('japanclub').getPublicUrl('data.json').data.publicUrl;
		const response = await fetch(publicUrl);
		const dataJSON = await response.json();
		return dataJSON;
	}
}

export type { IData, Images };
export default Gallery;