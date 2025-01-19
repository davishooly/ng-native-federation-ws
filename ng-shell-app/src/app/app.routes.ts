import { Route } from '@angular/router';
import { LayoutComponent } from "./layout.component";
import { UrlMatcher, UrlSegment } from '@angular/router';
import { WrapperComponent } from "./wrapper/wrapper.component";

export function startsWith(path: string): UrlMatcher {
  return (segments: UrlSegment[]) => {
    return segments[0].path === path
      ? { consumed: segments }
      : { consumed: [] };
  };
}


export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    matcher: startsWith('remote-app'),
    component: WrapperComponent,
  },
];
