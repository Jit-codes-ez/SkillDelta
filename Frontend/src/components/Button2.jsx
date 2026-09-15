import React, { useEffect, useState } from 'react';
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
};

const defaultRippleColors = {
  default: '#FFF5E4',
  primary: '#FFF5E4',
  secondary: 'rgba(133, 14, 53, 0.16)',
  outline: 'rgba(133, 14, 53, 0.16)',
  ghost: 'rgba(133, 14, 53, 0.18)',
  nav: 'rgba(133, 14, 53, 0.18)',
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
    const activeRippleColor = rippleColor || defaultRippleColors[variant] || '#FFF5E4';

    const handleClick = (event) => {
      createRipple(event);
      onClick?.(event);
    };

    const createRipple = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple = { x, y, size, key: Date.now() };
      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useEffect(() => {
      let timeout = null;

      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1];
        timeout = setTimeout(() => {
          setButtonRipples((prevRipples) =>
            prevRipples.filter((ripple) => ripple.key !== lastRipple.key)
          );
        }, parseInt(duration, 10));
      }

      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [buttonRipples, duration]);

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
              className="animate-rippling absolute rounded-full opacity-35 pointer-events-none"
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
export default RippleButton;
