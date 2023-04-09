import React from 'react';
import PKG from '@site/package.json';

export default function FooterCopyright({copyright}) {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="w-full lg:flex-1 flex justify-start items-end text-neutral-300">
        {copyright}
      </div>
      <div className="flex-initial flex justify-end items-end">
        <span className="text-neutral-500 text-sm">v{PKG.version}</span>
      </div>
    </div>
  );
}
