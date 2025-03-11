import { useLanguage } from '@/providers/language.provider';
import Link from 'next/link';
import metaboleFull from '../public/lotties/metabole-full.json';
import metaboleSmall from '../public/lotties/metabole-small.json';
import ContactPopover from './ContactPopover';
import Lottie from './Lottie';
import Sound from './Sound';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useEnvironment } from '@/hooks/useEnvironment';
import gsap from 'gsap';

const Header = () => {
  const headerRef = useRef(null);

  const { isProd } = useEnvironment();
  const { getInternalPath } = useLanguage();

  useGSAP(() => {
    gsap.to(headerRef.current, {
      delay: isProd ? 5.5 : 8,
      duration: 2,
      ease: 'power3.out',
      y: 0,
    });
  }, [isProd]);

  return (
    <header
      ref={headerRef}
      className="px-x-default fixed z-[900] h-[108px] w-full -translate-y-full"
    >
      <div className="flex h-[108px] items-center justify-between py-8">
        <Link href={getInternalPath('/')} scroll={false}>
          <Lottie animationData={metaboleFull} className="hidden h-10 md:block" />
          <Lottie animationData={metaboleSmall} className="block h-10 w-10 md:hidden" />
        </Link>
        <div className="relative flex h-[108px] gap-4 py-8">
          <Sound className="shrink-0" />
          <div className="relative w-[117px] md:w-auto">
            <ContactPopover />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
