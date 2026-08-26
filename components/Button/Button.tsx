import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonColor = 'bg-white' | 'bg-violeta' | 'bg-celeste';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
  color?: ButtonColor;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  href,
  color = 'bg-violeta',
}: ButtonProps) {
  const isLight = color === 'bg-white' || color === 'bg-celeste';

  const textColor = isLight ? 'text-violeta' : 'text-white';

  const hoverBackground =
    color === 'bg-violeta'
      ? 'group-hover:bg-violeta'
      : color === 'bg-celeste'
        ? 'group-hover:bg-celeste'
        : 'group-hover:bg-white';

  const content = (
    <div
      className={`
        inline-flex items-center gap-0.5
        group cursor-pointer
        transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:gap-0
        ${className}
      `}
    >
      <span
        className={`
          ${color}
          ${textColor}
          px-6 py-4
          rounded-full
          font-medium
          shadow-md
          relative z-10
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hoverBackground}
          group-hover:rounded-r-[18px]
          group-hover:pr-7
        `}
      >
        {children}
      </span>

      <span
        className={`
          ${color}
          ${textColor}
          w-14 h-14
          shrink-0
          rounded-full
          flex items-center justify-center
          relative z-10
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hoverBackground}
          group-hover:rounded-l-[18px]
          group-hover:-translate-x-1
        `}
      >
        <ArrowUpRight
          className="
            w-6 h-6
            transition-transform duration-400
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:rotate-45
          "
        />
      </span>
    </div>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return <a href={href}>{content}</a>;
    }

    return <Link href={href}>{content}</Link>;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="border-none bg-transparent p-0 outline-none"
    >
      {content}
    </button>
  );
}