import { AccordionDemo } from "@/components/AccordionDemo";
import { AlertDemo } from "@/components/AlertDemo";
import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { CardDemo } from "@/components/CardDemo";
import { CheckboxDemo } from "@/components/CheckboxDemo";
import { Calendar } from "@/components/ui/calendar";
import { CollapsibleDemo } from "@/components/CollapsibleDemo";
import { ComboboxDemo } from "@/components/ComboboxDemo";
import { CommandDemo } from "@/components/CommandDemo";
import { ContextMenuDemo } from "@/components/ContextMenuDemo";
import { DataTableDemo } from "@/components/DataTableDemo";
import { DatePickerWithPresets } from "@/components/DatePickerWithPresets";
import { DialogDemo } from "@/components/DialogDemo";
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo";
import { MenubarDemo } from "@/components/MenubarDemo";
import { NavigationMenuDemo } from "@/components/NavigationmenuDemo";
import { PopoverDemo } from "@/components/PopoverDemo";
import { ProgressDemo } from "@/components/ProgressDemo";
import { ScrollAreaDemo } from "@/components/ScrollAreaDemo";
import { SelectDemo } from "@/components/SelectDemo";
import { SeparatorDemo } from "@/components/SeparatorDemo";
import { SheetDemo } from "@/components/SheetDemo";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { SliderDemo } from "@/components/SliderDemo";
import { SwitchDemo } from "@/components/SwitchDemo";
import { TabsDemo } from "@/components/TabsDemo";
import { TextareaDemo } from "@/components/TextAreaDemo";
import { ToastDemo } from "@/components/ToastDemo";
import { ToggleDemo } from "@/components/ToggleDemo";
import { TooltipDemo } from "@/components/TooltipDemo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <AccordionDemo />
        <AlertDemo />
        <AlertDialogDemo />
        <div className="flex flex-col gap-4">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
        </div>
        <Calendar />
        <CardDemo />
        <CheckboxDemo />
        <CollapsibleDemo />
        <ComboboxDemo />
        <CommandDemo />
        <ContextMenuDemo />
      </div>
      <DataTableDemo />
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <DatePickerWithPresets />
        <DialogDemo />
        <DropdownMenuDemo />
        <MenubarDemo />
        <NavigationMenuDemo />
        <PopoverDemo />
        <ProgressDemo />
        <ScrollAreaDemo />
        <SelectDemo />
        <SeparatorDemo />
        <SheetDemo />
        <SkeletonDemo />
        <SliderDemo />
        <SwitchDemo />
        <TabsDemo />
        <TextareaDemo />
        <ToastDemo />
        <ToggleDemo />
        <TooltipDemo />
      </div>
    </>
  );
}
