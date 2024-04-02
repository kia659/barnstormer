import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconCancel({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="cancel" {...attributes}>
      <path
        fillRule="evenodd"
        d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12m14.295 4.295a.997.997 0 0 0 0-1.41L13.41 12l2.885-2.885a.997.997 0 1 0-1.41-1.41L12 10.59 9.115 7.705a.997.997 0 0 0-1.41 1.41L10.59 12l-2.885 2.885a.997.997 0 0 0 1.41 1.41L12 13.41l2.885 2.885c.39.39 1.02.39 1.41 0"
        clipRule="evenodd"
      />
    </BsIconBase>
  );
}
