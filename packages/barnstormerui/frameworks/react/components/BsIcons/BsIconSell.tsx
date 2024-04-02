import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconSell({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="sell" {...attributes}>
      <path d="M14.25 21.4q-.575.575-1.425.575T11.4 21.4l-8.8-8.8a2.07 2.07 0 0 1-.6-1.45V4q0-.825.588-1.413A1.93 1.93 0 0 1 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412a1.92 1.92 0 0 1-.575 1.413zM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062A1.44 1.44 0 0 0 6.5 5q-.625 0-1.062.438A1.44 1.44 0 0 0 5 6.5q0 .625.438 1.062Q5.875 8 6.5 8" />
    </BsIconBase>
  );
}
