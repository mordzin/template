import { customAlphabet } from "nanoid";

export const uuid = (size?: number) => {
	// Data
	const alphabet =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	// 🏹 Returns
	return customAlphabet(alphabet, size || 6)();
};

export const is = (data: any, arr: Array<string>) => {
	return arr.some((type) => data.type.includes(type));
};

export const sortBy = (data: any, key: string) => {
	return data.sort((a: any, b: any) => {
		return a[key] > b[key] ? 1 : -1;
	});
};

export const getCopy = (data: any) => {
	if (!data) return null;
	return JSON.parse(JSON.stringify(data));
};

export const goTo = (path: string) => {
	useRouter().push(path);
};

export const goBack = (path: string) => {
	useRouter().back();
};

export const slugify = (str: string) => {
	return String(str)
		.replace(`.jpg`, ``)
		.replace(`.jpeg`, ``)
		.replace(`.png`, ``)
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
};

export const isEmoji = (str: string) => {
	if (!str) return false;
	const unicode = str.codePointAt(0).toString(16);
	return unicode.includes("1f");
};

export const getElementHeigth = (id: string) => {
	const element = document.getElementById(id);
	return element?.getBoundingClientRect().height;
};

export const isEven = (num: number): boolean => {
	return num % 2 === 0;
};

export const imageResize = (file: any, size: string) => {
	const dataURItoBlob = (dataURI: string) => {
		const bytes =
			dataURI.split(",")[0].indexOf("base64") >= 0
				? atob(dataURI.split(",")[1])
				: unescape(dataURI.split(",")[1]);
		const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
		const max = bytes.length;
		const ia = new Uint8Array(max);
		for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i);
		return new Blob([ia], { type: mime });
	};
	const reader = new FileReader();
	const image = new Image();
	const canvas = document.createElement("canvas");
	const resize = () => {
		let width = image.width;
		let height = image.height;
		if (width > height) {
			if (width > size) {
				height *= size / width;
				width = size;
			}
		} else {
			if (height > size) {
				width *= size / height;
				height = size;
			}
		}
		canvas.width = width;
		canvas.height = height;
		canvas.getContext("2d").drawImage(image, 0, 0, width, height);
		let dataURL = canvas.toDataURL("image/jpeg");
		return dataURItoBlob(dataURL);
	};
	return new Promise((ok, no) => {
		if (!file.type.match(/image.*/)) {
			no(new Error("Not an image"));
			return;
		}
		reader.onload = (readerEvent) => {
			image.onload = () => ok(resize());
			image.src = readerEvent.target.result;
		};
		reader.readAsDataURL(file);
	});
};

export const getElementById = (id: string) => {
	return document.getElementById(id);
};

export const log = (...args: any) => {
	console.log(`🔵`, ...args);
};

export const firstName = (name: string) => {
	if (!name) return "";
	return name.split(" ")[0];
};

export const shortName = (name: string) => {
	if (!name) return "";
	const [first, last] = name.split(" ");
	return `${first} ${last?.[0] || ""}.`;
};

export const sortByPropVal = (data: any, prop: string, val: string) =>
	data[prop].includes(val) ? -1 : +1;

export const fitToScrollHeight = (e: any) => {
	requestAnimationFrame(() => {
		e.target.style.height = "56px";
		e.target.style.height = `${e.target.scrollHeight}px`;
	});
};
