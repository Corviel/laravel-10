export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`font-medium text-right text-violet-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
