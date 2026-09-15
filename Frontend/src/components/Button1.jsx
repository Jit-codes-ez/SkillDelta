import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InteractiveHoverButton({
  children = 'Button',
  className,
  dotClassName,
  href,
  type = 'button',
  ...props
}) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      className={cn(
        'group relative inline-flex items-center justify-center w-auto cursor-pointer overflow-hidden rounded-full border border-[#850E35] bg-[#850E35] p-2.5 px-6 text-center font-semibold text-[#FFFBF1] shadow-md shadow-[#850E35]/20 hover:shadow-lg hover:shadow-[#850E35]/30 transition-all duration-300',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div
          className={cn(
            'h-2 w-2 rounded-full bg-[#6F0A2B] ring-2 ring-[#FFFBF1]/60 transition-all duration-300 group-hover:scale-[100.8] group-hover:ring-0',
            dotClassName
          )}
        />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute inset-0 z-10 flex h-full w-full translate-x-8 items-center justify-center gap-2 text-[#FFFBF1] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Component>
  );
}

export const Button1 = InteractiveHoverButton;
export default InteractiveHoverButton;
