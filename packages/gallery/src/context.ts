import { createContext } from 'react';
import SwiperCore from 'swiper';

import { GalleryImage, ImageMeta } from './types';

export type GalleryContext = {
    singleSlide: boolean;
    currentSlideIndex: number;
    images: GalleryImage[];
    imagesMeta: ImageMeta[];
    fullScreen: boolean;
    initialSlide: number;
    setFullScreen: (fullScreen: boolean) => void;
    setImageMeta: (meta: ImageMeta, index: number) => void;
    slideTo: (index: number) => void;
    slideNext: () => void;
    slidePrev: () => void;
    getSwiper: () => SwiperCore | undefined;
    setSwiper: (swiper: SwiperCore) => void;
    onClose: () => void;
    setCurrentSlideIndex: (index: number) => void;
    getCurrentImage: () => GalleryImage | undefined;
    getCurrentImageMeta: () => ImageMeta | undefined;
};

const mockFn = () => undefined;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GalleryContext = createContext<GalleryContext>({
    singleSlide: false,
    currentSlideIndex: 0,
    images: [],
    imagesMeta: [],
    fullScreen: false,
    initialSlide: 0,
    setFullScreen: mockFn,
    setImageMeta: mockFn,
    slideTo: mockFn,
    slideNext: mockFn,
    slidePrev: mockFn,
    getSwiper: mockFn,
    setSwiper: mockFn,
    onClose: mockFn,
    setCurrentSlideIndex: mockFn,
    getCurrentImage: mockFn,
    getCurrentImageMeta: mockFn,
});
