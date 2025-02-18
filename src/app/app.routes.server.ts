import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  { path: 'home', renderMode: RenderMode.Server },
  { path: 'all-products', renderMode: RenderMode.Server },
  { path: 'add-product-list', renderMode: RenderMode.Server },
  { path: 'contact', renderMode: RenderMode.Server },
  { path: 'terms & condition', renderMode: RenderMode.Server },
  {path: 'cancellation-refundPolicy', renderMode: RenderMode.Server}
];
