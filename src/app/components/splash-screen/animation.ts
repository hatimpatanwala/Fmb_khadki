import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('500ms', style({ transform: 'translateX(100%)' })),
  ]),
]);
export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(500)]),
]);
export const fadeInOutInfiniteAnimation = trigger(
  'fadeInOutInfiniteAnimation',
  [
    transition('* <=> *', [
      animate(
        '1s',
        keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]),
  ]
);
