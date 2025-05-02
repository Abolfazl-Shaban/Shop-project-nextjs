import { SiteUrl } from '../../../constant';

export async function getSliderItems() {
  return await fetch(`${SiteUrl}/api/sliderItems`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

export async function getFeaturedProducts() {
  return await fetch(`${SiteUrl}/api/featuredProducts`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

export async function getAllProducts() {
  return await fetch(`${SiteUrl}/api/products`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}
