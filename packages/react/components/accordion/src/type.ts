export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionItemType = {
  children: React.ReactNode[];
  itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionButtonProps = {
  itemName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionPanelProps = {
  itemName?: string;
} & React.HTMLAttributes<HTMLDivElement>;
