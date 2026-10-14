import React, { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
  'aria-label': ariaLabel,
  strength = 0.22,
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const [isPointerFine, setIsPointerFine] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  );

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const pointerHandler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    pointerQuery.addEventListener('change', pointerHandler);

    return () => {
      pointerQuery.removeEventListener('change', pointerHandler);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || !isPointerFine || !elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: Math.max(-12, Math.min(12, deltaX)), y: Math.max(-12, Math.min(12, deltaY)) });
  };

  const handlePointerLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle =
    !prefersReducedMotion && isPointerFine && (position.x !== 0 || position.y !== 0)
      ? {
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
        }
      : {
          transform: 'translate3d(0, 0, 0)',
          transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
        };

  if (href) {
    return (
      <a
        ref={elementRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={transformStyle}
        className={`inline-block will-change-transform ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={transformStyle}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </button>
  );
};
