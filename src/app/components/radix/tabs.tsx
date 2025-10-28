'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ tabs, defaultTab, onTabChange, className, ...props }, ref) => {
  const [value, setValue] = React.useState(
    defaultTab || (tabs.length > 0 ? tabs[0].id : '')
  );

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (onTabChange) {
      onTabChange(newValue);
    }
  };

  return (
    <TabsPrimitive.Root
      value={value}
      onValueChange={handleValueChange}
      className={`w-full ${className || ''}`}
      {...props}
      ref={ref}
    >
      <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 p-1 text-gray-400">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-700 data-[state=active]:text-white data-[state=active]:shadow-sm ${
              tab.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
          >
            {tab.title}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
});

Tabs.displayName = TabsPrimitive.Root.displayName;

export { Tabs };