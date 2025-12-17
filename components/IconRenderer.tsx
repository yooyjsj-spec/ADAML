import React from 'react';
import { Brain, Rocket, Shield, Microscope, Cpu } from 'lucide-react';

const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
  const icons: {[key: string]: React.ElementType} = { Brain, Rocket, Shield, Microscope, Cpu };
  const Icon = icons[name] || Cpu;
  return <Icon className={className} />;
};

export default IconRenderer;