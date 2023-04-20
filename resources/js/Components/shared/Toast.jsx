import * as ToastPrimitive from "@radix-ui/react-toast";

export const Toast = ({ title, content, children, ...props }) => {
    return (
        <ToastPrimitive.Root {...props} className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
            {title && <ToastPrimitive.Title className="[grid-area:_title] mb-[5px] font-medium text-slate-900 text-[15px]">{title}</ToastPrimitive.Title>}
            <ToastPrimitive.Description className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]">
                {content}
            </ToastPrimitive.Description>
            {children && (
                <ToastPrimitive.Action asChild>
                    {children}
                </ToastPrimitive.Action>
            )}
            <ToastPrimitive.Close aria-label="Close">
                <span aria-hidden>×</span>
            </ToastPrimitive.Close>
        </ToastPrimitive.Root>
    );
};
