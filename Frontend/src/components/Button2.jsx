import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const variantStyles = {
  default:
    'border border-[#850E35]/20 bg-[#850E35] text-[#FFFBF1] shadow-xs shadow-[#850E35]/25 hover:bg-[#6F0A2B] hover:shadow-md active:scale-95 px-5 py-2.5 rounded-xl font-semibold',
  primary:
    'border border-[#850E35]/20 bg-[#850E35] text-[#FFFBF1] shadow-xs shadow-[#850E35]/25 hover:bg-[#6F0A2B] hover:shadow-md active:scale-95 px-5 py-2.5 rounded-xl font-semibold',
  secondary:
    'border border-[#850E35]/20 bg-[#FFF5E4] text-[#850E35] hover:bg-[#FFFBF1] shadow-2xs active:scale-95 px-5 py-2.5 rounded-xl font-semibold',
  outline:
    'border border-[#850E35]/25 bg-transparent text-[#850E35] hover:bg-[#FFF5E4] active:scale-95 px-5 py-2.5 rounded-xl font-semibold',
  ghost:
    'border-transparent bg-transparent text-[#850E35]/80 hover:text-[#850E35] hover:bg-[#FFF5E4] shadow-none active:scale-95 px-4 py-2 rounded-xl font-medium',
  nav:
    'border-transparent bg-transparent text-[#850E35]/80 hover:text-[#850E35] hover:bg-[#FFF5E4] shadow-none text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full active:scale-95',
  white:
    'border border-[#850E35]/20 bg-white text-[#850E35] hover:bg-[#FFF5E4] shadow-2xs active:scale-95 px-3.5 py-1.5 rounded-xl font-semibold text-xs',
};

const defaultRippleColors = {
  default: 'rgba(255, 251, 241, 0.45)',
  primary: 'rgba(255, 251, 241, 0.45)',
  secondary: 'rgba(133, 14, 53, 0.22)',
  outline: 'rgba(133, 14, 53, 0.22)',
  ghost: 'rgba(133, 14, 53, 0.22)',
  nav: 'rgba(133, 14, 53, 0.22)',
  white: 'rgba(133, 14, 53, 0.22)',
};

export const RippleButton = React.forwardRef(
  (
    {
      className,
      children,
      variant = 'default',
      rippleColor,
      duration = '600ms',
      onClick,
      href,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState([]);
    const navigate = useNavigate();
    const activeRippleColor = rippleColor || defaultRippleColors[variant] || '#FFF5E4';

    const createRipple = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const hasCoords =
        event &&
        event.clientX !== undefined &&
        (event.clientX !== 0 || event.clientY !== 0);
      const x = (hasCoords ? event.clientX - rect.left : rect.width / 2) - size / 2;
      const y = (hasCoords ? event.clientY - rect.top : rect.height / 2) - size / 2;

      const key = `${Date.now()}-${Math.random()}`;
      const newRipple = { x, y, size, key };
      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);

      const animDuration = parseInt(duration, 10) || 600;
      setTimeout(() => {
        setButtonRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.key !== key)
        );
      }, animDuration);
    };

    const handleClick = (event) => {
      createRipple(event);
      onClick?.(event);

      // Handle client-side routing with tactile ripple delay for cross-page links
      const isModifiedClick = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
      const isPlainLeftClick = event.button === 0 && !isModifiedClick;

      if (href && isPlainLeftClick && props.target !== '_blank') {
        const isInternalRoute = href.startsWith('/') && !href.startsWith('/#');
        if (isInternalRoute && navigate) {
          event.preventDefault();
          setTimeout(() => {
            navigate(href);
          }, 220);
        }
      }
    };

    const Component = href ? 'a' : 'button';

    return (
      <Component
        href={href}
        type={href ? undefined : type}
        className={cn(
          'relative inline-flex cursor-pointer items-center justify-center overflow-hidden text-center transition-all duration-200 select-none',
          variantStyles[variant] || variantStyles.default,
          className
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </div>
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          {buttonRipples.map((ripple) => (
            <span
              className="animate-rippling absolute rounded-full pointer-events-none"
              key={ripple.key}
              style={{
                width: `${ripple.size}px`,
                height: `${ripple.size}px`,
                top: `${ripple.y}px`,
                left: `${ripple.x}px`,
                backgroundColor: activeRippleColor,
                transform: 'scale(0)',
                '--duration': duration,
              }}
            />
          ))}
        </span>
      </Component>
    );
  }
);

RippleButton.displayName = 'RippleButton';

export const Button2 = RippleButton;
export const Button = RippleButton;
export default RippleButton;
