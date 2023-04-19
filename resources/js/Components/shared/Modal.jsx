import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

export const ModalContent = React.forwardRef(
    ({ title, description, children, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="bg-[hsla(0,_0%,_0%,_0.439)] data-[state=open]:animate-overlayShow fixed inset-0 grid place-items-center overflow-y-auto py-8">
                <DialogPrimitive.Content
                    className="data-[state=open]:animate-contentShow relative rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                    {...props}
                    ref={forwardedRef}
                >
                    {title && (
                        <DialogPrimitive.Title className="text-neutral-900 m-0 text-[17px] font-medium">
                            {title}
                        </DialogPrimitive.Title>
                    )}

                    {description && (
                        <DialogPrimitive.Description className="text-neutral-500 mt-[10px] mb-5 text-[15px] leading-normal max-w-[80ch]">
                            {description}
                        </DialogPrimitive.Description>
                    )}

                    {children}

                    <DialogPrimitive.Close aria-label="Close">
                        <button
                            className="text-red-500 hover:bg-red-300 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross1Icon />
                        </button>
                    </DialogPrimitive.Close>
                </DialogPrimitive.Content>
            </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
    )
);

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;
