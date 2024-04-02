import { useState, type ChangeEvent } from 'react';
import classnames from 'classnames';
import {
  BsIconStar,
  BsIconStarFilled,
  BsIconSize,
  BsRatingButtonSize,
  type BsRatingButtonProps,
  type BsRatingButtonRenderProps,
} from '@barnstormer/react';

function defaultLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

const renderDefaultIcon = ({ isFilled, iconSize }: BsRatingButtonRenderProps) => {
  if (isFilled) {
    return (
      <BsIconStarFilled
        role="none"
        className="text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
        size={iconSize}
      />
    );
  }
  return (
    <BsIconStar
      role="none"
      className="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
      size={iconSize}
    />
  );
};

const iconSize: Record<BsRatingButtonSize, BsRatingButtonRenderProps['iconSize']> = {
  [BsRatingButtonSize.sm]: BsIconSize.base,
  [BsRatingButtonSize.base]: BsIconSize.lg,
  [BsRatingButtonSize.lg]: BsIconSize.xl,
};

export default function BsRatingButton({
  onChange,
  value = 0,
  disabled = false,
  max = 5,
  name = 'sf-rating-button',
  className,
  size = BsRatingButtonSize.base,
  getLabelText = defaultLabelText,
  children = renderDefaultIcon,
  ...attributes
}: BsRatingButtonProps): JSX.Element {
  const [hoverValue, setHoverValue] = useState(0);
  const icons = Array.from({ length: Math.floor(Math.abs(max)) }, (_, index) => index + 1);
  const isIconFilled = (ratingValue: number) => ratingValue <= hoverValue || (hoverValue === 0 && ratingValue <= value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(event.target.value));
  };

  const handleHoverIn = (ratingValue: number) => () => {
    if (!disabled) {
      setHoverValue(ratingValue);
    }
  };

  const handleHoverOut = () => {
    if (!disabled) {
      setHoverValue(0);
    }
  };

  return (
    <div role="radiogroup" className={classnames('flex', className)} data-testid="ratingbutton" {...attributes}>
      {icons.map((ratingValue) => (
        <label key={ratingValue} onMouseEnter={handleHoverIn(ratingValue)} onMouseLeave={handleHoverOut}>
          <input
            type="radio"
            name={name}
            value={ratingValue}
            checked={ratingValue === value}
            onChange={handleChange}
            disabled={disabled}
            aria-label={getLabelText(ratingValue)}
            className="sr-only peer"
          />
          {children({ isFilled: isIconFilled(ratingValue), max, iconSize: iconSize[size] })}
        </label>
      ))}
    </div>
  );
}
