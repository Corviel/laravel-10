import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";

export const Dropdown = DropdownPrimitive.Root;
export const DropdownTrigger = DropdownPrimitive.Trigger;

export const DropdownContent = React.forwardRef(
    ({ children, ...props }, forwardedRef) => {
        return (
            <DropdownPrimitive.Portal>
                <DropdownPrimitive.Content
                    className="min-w-[220px] bg-white rounded-md pt-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    {...props}
                    ref={forwardedRef}
                    sideOffset={5}
                >
                    {children}
                    <DropdownPrimitive.Arrow fill="white" />
                </DropdownPrimitive.Content>
            </DropdownPrimitive.Portal>
        );
    }
);

export const DropdownLabel = DropdownPrimitive.Label;
export const DropdownItem = DropdownPrimitive.Item;
export const DropdownGroup = DropdownPrimitive.Group;

export const DropdownCheckboxItem = React.forwardRef(
    ({ children, ...props }, forwardedRef) => {
        return (
            <DropdownPrimitive.CheckboxItem {...props} ref={forwardedRef}>
                {children}
                <DropdownPrimitive.ItemIndicator>
                    {props.checked === "indeterminate" && (
                        <DividerHorizontalIcon />
                    )}
                    {props.checked === true && <CheckIcon />}
                </DropdownPrimitive.ItemIndicator>
            </DropdownPrimitive.CheckboxItem>
        );
    }
);

export const DropdownRadioGroup = DropdownPrimitive.RadioGroup;

export const DropdownRadioItem = React.forwardRef(
    ({ children, ...props }, forwardedRef) => {
        return (
            <DropdownPrimitive.RadioItem {...props} ref={forwardedRef}>
                {children}
                <DropdownPrimitive.ItemIndicator>
                    <CheckIcon />
                </DropdownPrimitive.ItemIndicator>
            </DropdownPrimitive.RadioItem>
        );
    }
);

export const DropdownSeparator = DropdownPrimitive.Separator;
