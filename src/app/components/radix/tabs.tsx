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
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ tabs, defaultTab, onTabChange, ...props }, ref) => {
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
      className="w-full"
      {...props}
      ref={ref}
    >
      <TabsPrimitive.List className="inline-flex h-10 items-center justify-center bg-gray-100 p-1">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium border border-transparent data-[state=active]:bg-white data-[state=active]:border-gray-300 data-[state=active]:shadow-sm"
          >
            {tab.title}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className="mt-2"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
});

Tabs.displayName = TabsPrimitive.Root.displayName;

export { Tabs };